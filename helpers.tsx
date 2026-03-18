import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import LinkButton from './LinkButton';

/**
 * Button Components Usage Examples
 *
 * This file provides examples for how to use the Button components in the project.
 */

export const ButtonExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Button Variants</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>

      <h2>Button Sizes</h2>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h2>Button States</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button isLoading>Loading</Button>
      </div>

      <h2>Full Width Button</h2>
      <Button isFullWidth>Full Width Button</Button>

      <h2>Button with onClick Handler</h2>
      <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
    </div>
  );
};

export const IconButtonExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Icon Button Examples</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <IconButton
          icon={<span></span>}
          label="Search"
        >
          Search
        </IconButton>

        <IconButton
          icon={<span></span>}
          label="Add Item"
          variant="secondary"
        >
          Add
        </IconButton>

        <IconButton
          icon={<span></span>}
          label="Edit"
          variant="outline"
          iconPosition="right"
        >
          Edit
        </IconButton>
      </div>
    </div>
  );
};

export const LinkButtonExamples: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Link Button Examples</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <LinkButton to="/projects">View Projects</LinkButton>

        <LinkButton to="/contact" variant="secondary">
          Contact Me
        </LinkButton>

        <LinkButton to="https://github.com" external variant="outline">
          GitHub
        </LinkButton>

        <LinkButton to="/resume" variant="text">
          View Resume
        </LinkButton>
      </div>
    </div>
  );
};

/**
 * Usage Instructions
 *
 * Button:
 * - Use for triggering actions within the application
 * - Choose variant based on visual hierarchy (primary for main actions)
 * - Use size appropriate to the context
 * - Set isLoading during async operations
 *
 * IconButton:
 * - Use when a button needs a visual icon
 * - Always provide an accessible label
 * - Choose iconPosition based on design needs
 *
 * LinkButton:
 * - Use for navigation within the app (internal routes)
 * - Use for external links (set external=true)
 * - Supports same variants and sizes as Button
 */

export default {
  ButtonExamples,
  IconButtonExamples,
  LinkButtonExamples,
};
