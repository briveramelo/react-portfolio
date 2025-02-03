import React from "react";
import { Box, TextField, Button, Alert, Typography } from "@mui/material";
import { FormData, FormErrors } from "./contactFormUtils";
import { cp } from "../../../utils/utils";
import { useFormTracking } from "../../../tracking/useFormTracking";
import { useHoverTracking } from "../../../tracking/useHoverTracking";

interface ContactFormProps {
  formData: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSending: boolean;
  errorMessage: string | null;
  heartTriggerRef: React.RefObject<HTMLButtonElement>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  onChange,
  onSubmit,
  isSending,
  errorMessage,
  heartTriggerRef,
}) => {
  const formID = "contact-form";
  const { trackFieldFocus, trackFieldBlur, trackFormSubmit } =
    useFormTracking(formID);
  const { trackMouseEnter, trackMouseLeave } = useHoverTracking();

  const inputStyles = {
    backgroundColor: cp("background.paper"),
    color: cp("text.paper"),
    borderRadius: "8px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      color: cp("text.paper"),
    },
    "& .MuiInputLabel-shrink": {
      color: cp("text.paper"),
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: cp("background.paper"),
        color: cp("text.paper"),
        borderRadius: "16px",
        p: 4,
      }}
      className="subtle-shadow"
    >
      <form
        onSubmit={(e) => {
          trackFormSubmit(formID);
          onSubmit(e);
        }}
        id={formID}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <TextField
          required
          label="Your email"
          type="email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email}
          id="contact-email"
          onFocus={() => trackFieldFocus("email")}
          onBlur={() => trackFieldBlur("email")}
          onChange={(e) => onChange("email", e.target.value)}
          fullWidth
          InputProps={{
            inputProps: {
              style: {
                color: cp("text.paper"),
              },
            },
          }}
          sx={inputStyles}
        />

        <TextField
          required
          label="Message"
          variant="outlined"
          error={!!errors.message}
          helperText={errors.message}
          id="contact-message"
          onChange={(e) => onChange("message", e.target.value)}
          onFocus={() => trackFieldFocus("message")}
          onBlur={() => trackFieldBlur("message")}
          fullWidth
          InputProps={{
            inputComponent: "textarea",
            inputProps: {
              style: {
                resize: "vertical",
                minHeight: "140px",
                padding: "16px",
                fontFamily: "inherit",
                fontSize: "16px",
                color: cp("text.paper"),
              },
            },
          }}
          sx={{
            ...inputStyles,
            "& textarea": {
              marginTop: "12px",
            },
          }}
        />

        <Button
          id="contact_send"
          onMouseEnter={trackMouseEnter}
          onMouseLeave={trackMouseLeave}
          ref={heartTriggerRef}
          type="submit"
          variant="contained"
          sx={{
            zIndex: 1,
            alignSelf: "center",
            px: 4,
            backgroundColor: "orange",
            color: "black",
            "&:hover": { transform: "scale(1.1) !important" },
          }}
          className="pop-shadow"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </Button>
      </form>

      {errorMessage && (
        <Box
          sx={{
            mt: 3,
            mb: -1,
            py: 0,
            width: "100%",
            backgroundColor: cp("background.textError"),
            position: "relative",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            severity="error"
            sx={{
              position: "absolute",
              left: "-8px",
              top: "-8px",
              backgroundColor: "transparent",
            }}
          />
          <Typography
            sx={{
              position: "relative",
              display: "inline-block",
              color: cp("text.paper"),
              py: 0.5,
              px: 5,
            }}
            variant="body1"
          >
            {errorMessage}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
