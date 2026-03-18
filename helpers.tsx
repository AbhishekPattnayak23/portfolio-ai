import React from 'react';

/**
 * Format a date into a readable string
 * @param dateString - Date string in format YYYY-MM-DD
 * @returns Formatted date string (e.g., "April 2023")
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

/**
 * Truncate text with ellipsis if it exceeds maxLength
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text or original if shorter than maxLength
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength) + '...';
};

/**
 * Highlight text within a string (for search results)
 * @param text - Full text
 * @param highlight - Text to highlight
 * @returns React element with highlighted text
 */
export const highlightText = (text: string, highlight: string): React.ReactNode => {
  if (!highlight.trim() || !text) {
    return text;
  }

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => (
        regex.test(part) ? (
          <mark key={i} style={{ backgroundColor: '#FFFF00', padding: 0 }}>
            {part}
          </mark>
        ) : (
          part
        )
      ))}
    </>
  );
};

/**
 * Group an array of items by a key
 * @param array - Array to group
 * @param key - Key to group by
 * @returns Object with groups
 */
export const groupBy = <T extends Record<string, any>>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, currentItem) => {
    const groupKey = String(currentItem[key]);
    result[groupKey] = result[groupKey] || [];
    result[groupKey].push(currentItem);
    return result;
  }, {} as Record<string, T[]>);
};

/**
 * Debounce a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(func: T, wait: number): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Get initials from a name
 * @param name - Full name
 * @returns Initials (up to 2 characters)
 */
export const getInitials = (name: string): string => {
  if (!name) return '';

  const nameParts = name.trim().split(' ');
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();

  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
};
