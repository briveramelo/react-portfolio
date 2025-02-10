export interface FormData {
  email: string;
  message: string;
}

export interface FormErrors {
  email: string;
  message: string;
}

/**
 * Validates the contact form data.
 * @param formData - the current form data.
 * @returns An object with error messages for each field.
 */
export const validateContactForm = (formData: FormData): FormErrors => {
  let errors: FormErrors = { email: "", message: "" };

  // Email validation
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    errors.email = "Invalid email format.";
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "Message is required.";
  } else if (formData.message.length < 1 || formData.message.length > 10000) {
    errors.message = "Message must be between 1 and 10,000 characters.";
  }

  return errors;
};

/**
 * Checks if there are no errors.
 * @param errors - the error messages.
 */
export const isFormValid = (errors: FormErrors): boolean => {
  return Object.values(errors).every((value) => value === "");
};
