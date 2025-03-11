import { useState } from "react";
import { trackCustomEvent } from "../plausibleHelpers.ts";

interface InteractionData {
  total_time_ms: number;
  interactions: number;
}

interface UseFormTrackingReturn {
  trackFieldFocus: (fieldName: string) => void;
  trackFieldBlur: (fieldName: string) => void;
  trackFormSubmit: (formId: string) => void;
}

export const useFormTracking = (formId: string): UseFormTrackingReturn => {
  const [formStartTimeMillis, setFormStartTimeMillis] = useState<number | null>(
    null,
  );
  const [fieldStartTimeMillis, setFieldStartTimeMillis] = useState<
    Record<string, number>
  >({});
  const [interactionData, setInteractionData] = useState<
    Record<string, InteractionData>
  >({});

  // Track when form starts (first field interaction)
  const handleFormStart = () => {
    if (formStartTimeMillis) return;

    setFormStartTimeMillis(Date.now());
    trackCustomEvent("form_start", {
      form_id: formId,
    });
  };

  // Track when a user focuses on a field
  const handleFieldFocus = (fieldName: string) => {
    handleFormStart();
    setFieldStartTimeMillis((prev) => ({
      ...prev,
      [fieldName]: Date.now(),
    }));
  };

  // Track when a user leaves a field
  const handleFieldBlur = (fieldName: string) => {
    if (!fieldStartTimeMillis[fieldName]) return;

    const timeSpentMs = Date.now() - fieldStartTimeMillis[fieldName];

    trackCustomEvent("form_field_interaction", {
      form_id: formId,
      field_name: fieldName,
      interaction_type: "blur",
      time_spent_ms: timeSpentMs,
    });

    setInteractionData((prev) => ({
      ...prev,
      [fieldName]: {
        total_time_ms: (prev[fieldName]?.total_time_ms || 0) + timeSpentMs,
        interactions: (prev[fieldName]?.interactions || 0) + 1,
      },
    }));
  };

  // Track form submission
  const handleFormSubmit = () => {
    const totalDuration = formStartTimeMillis
      ? Date.now() - formStartTimeMillis
      : 0;

    trackCustomEvent("form_submit", {
      form_id: formId,
      total_time_ms_spent_ms: totalDuration,
      field_interactions: interactionData,
    });
  };

  return {
    trackFieldFocus: handleFieldFocus,
    trackFieldBlur: handleFieldBlur,
    trackFormSubmit: handleFormSubmit,
  };
};
