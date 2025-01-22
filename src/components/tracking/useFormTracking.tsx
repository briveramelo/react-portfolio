import { useState } from "react";
import { trackCustomEvent } from "./plausibleSetup";

interface InteractionData {
  totalTime: number;
  interactions: number;
}

interface UseFormTrackingReturn {
  trackFieldFocus: (fieldName: string) => void;
  trackFieldBlur: (fieldName: string) => void;
  trackFormSubmit: (formId: string) => void;
}

export const useFormTracking = (formId: string): UseFormTrackingReturn => {
  const [formStartTime, setFormStartTime] = useState<number | null>(null);
  const [fieldStartTime, setFieldStartTime] = useState<Record<string, number>>({});
  const [interactionData, setInteractionData] = useState<Record<string, InteractionData>>({});

  // Track when form starts (first field interaction)
  const handleFormStart = () => {
    if (!formStartTime) {
      setFormStartTime(Date.now());
      trackCustomEvent("form_start", {
        form_id: formId,
      });
    }
  };

  // Track when a user focuses on a field
  const handleFieldFocus = (fieldName: string) => {
    handleFormStart();
    setFieldStartTime((prev) => ({
      ...prev,
      [fieldName]: Date.now(),
    }));
  };

  // Track when a user leaves a field
  const handleFieldBlur = (fieldName: string) => {
    if (fieldStartTime[fieldName]) {
      const timeSpent = Date.now() - fieldStartTime[fieldName];

      trackCustomEvent("form_field_interaction", {
        form_id: formId,
        field_name: fieldName,
        interaction_type: "blur",
        time_spent_ms: timeSpent,
      });

      setInteractionData((prev) => ({
        ...prev,
        [fieldName]: {
          totalTime: (prev[fieldName]?.totalTime || 0) + timeSpent,
          interactions: (prev[fieldName]?.interactions || 0) + 1,
        },
      }));
    }
  };

  // Track form submission
  const handleFormSubmit = () => {
    const totalDuration = formStartTime ? Date.now() - formStartTime : 0;

    trackCustomEvent("form_submit", {
      form_id: formId,
      total_time_spent_ms: totalDuration,
      field_interactions: interactionData,
    });
  };

  return {
    trackFieldFocus: handleFieldFocus,
    trackFieldBlur: handleFieldBlur,
    trackFormSubmit: handleFormSubmit,
  };
};
