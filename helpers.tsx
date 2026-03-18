import React from 'react';
import { useField } from 'formik';

/**
 * Custom hook to format and validate phone numbers
 * @param initialValue - The initial phone number value
 * @returns Formatted value and helper functions
 */
export const usePhoneInput = (initialValue: string = '') => {
  const [value, setValue] = React.useState(formatPhoneNumber(initialValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    setValue(formatPhoneNumber(inputValue));
  };

  const isValid = value.length === 0 || value.length === 14;

  return {
    value,
    handleChange,
    isValid,
    props: {
      value,
      onChange: handleChange,
      maxLength: 14,
      placeholder: '(555) 123-4567',
    },
  };
};

/**
 * Formats a string of digits into a US phone number format
 * @param value - String of digits to format
 * @returns Formatted phone number string
 */
export const formatPhoneNumber = (value: string): string => {
  if (!value) return '';

  const digits = value.replace(/\D/g, '');

  if (digits.length <= 3) {
    return `(${digits}`;
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

/**
 * Custom hook for handling file inputs with validation
 * @param options - Configuration options
 * @returns File handling utilities and state
 */
export const useFileInput = (options: {
  maxSizeInMB?: number;
  allowedTypes?: string[];
  maxFiles?: number;
} = {}) => {
  const { maxSizeInMB = 5, allowedTypes = [], maxFiles = 1 } = options;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;

  const [files, setFiles] = React.useState<File[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);

  const validateFile = (file: File): string | null => {
    // Check file size
    if (file.size > maxSizeInBytes) {
      return `File "${file.name}" exceeds the maximum size of ${maxSizeInMB}MB`;
    }

    // Check file type if allowed types are specified
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      return `File "${file.name}" has an unsupported format`;
    }

    return null;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const newFiles: File[] = [];
    const newErrors: string[] = [];

    // Handle max files validation
    if (fileList.length > maxFiles) {
      newErrors.push(`You can only upload a maximum of ${maxFiles} file(s)`);
      return;
    }

    // Validate each file
    Array.from(fileList).forEach(file => {
      const error = validateFile(file);
      if (error) {
        newErrors.push(error);
      } else {
        newFiles.push(file);
      }
    });

    setFiles(newFiles);
    setErrors(newErrors);
  };

  const clearFiles = () => {
    setFiles([]);
    setErrors([]);
  };

  return {
    files,
    errors,
    hasErrors: errors.length > 0,
    handleFileChange,
    clearFiles,
  };
};

/**
 * Creates a masked input component with Formik integration
 * @param mask - The mask pattern to apply
 * @returns A HOC that wraps an input component with mask functionality
 */
export const withMask = (mask: string) => {
  return function <P extends { name: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }>(
    Component: React.ComponentType<P>
  ) {
    return function MaskedInput(props: P) {
      const [field, meta, helpers] = useField(props.name);

      const applyMask = (value: string): string => {
        let result = '';
        let valueIndex = 0;

        for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
          if (mask[i] === '#') {
            result += value[valueIndex++] || '';
          } else {
            result += mask[i];
            if (value[valueIndex] === mask[i]) valueIndex++;
          }
        }

        return result;
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, '');
        const maskedValue = applyMask(rawValue);

        // Create a synthetic event
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: maskedValue },
        };

        // Call Formik's onChange
        field.onChange(syntheticEvent);

        // Call the component's onChange if provided
        props.onChange?.(syntheticEvent);
      };

      return <Component {...props} {...field} onChange={handleChange} />;
    };
  };
};
