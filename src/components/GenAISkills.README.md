# GenAISkills Component

A React component that displays a section highlighting key skills related to Generative AI with icons and proficiency levels.

## Features

- Display skills with visual icons
- Show proficiency levels with a 5-bar indicator
- Optional skill descriptions
- Responsive layout for different screen sizes
- Comprehensive error handling and validation
- Accessibility features
- Interactive capability through click handlers

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | "GenAI Skills" | Section heading |
| `skills` | array | No | [] | Array of skill objects |
| `onSkillClick` | function | No | undefined | Callback when skill is clicked |

## Skill Object Properties

Each skill object should have the following properties:

- `id`: string or number (optional but recommended for stable keys)
- `name`: string (required) - Name of the skill
- `icon`: string (required) - Icon character or emoji representing the skill
- `proficiency`: number (required) - Skill level from 1-5
- `description`: string (optional) - Brief description of the skill

## Example Usage
