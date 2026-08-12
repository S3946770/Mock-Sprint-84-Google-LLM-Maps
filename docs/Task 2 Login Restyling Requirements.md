**Team 84 Google LLM Maps**

**\[Login Restyling Bootstrap\] Task 2 -Write Requirements: Team Page & Login Styling**

# Feature Overview

Create a styled login page that navigates the user to a team page. The team page will display the team's name, each team members name, photo and role with a short biography and or interests, the scope of the login page is visual styling only. The implementation should use the existing project capstone boilerplate.

## Functional Requirements

### Login Page

- The user can access the login page
- Login page is visually styled according to the agreed design
- No changes to existing authentication logic or session behaviour.
- Successful login leads to the team page
- Use Existing RMIT capstone boilerplate where applicable

### Team Page

- Team name is displayed
- Each team member has:
- Photo
- Name
- Role
- Short Blurb

&nbsp;

## Design Requirements

### Login Page Styling

- Define layout
- Define typography
- Define colours
- Defne form-field styling
- Define button styling
- Defne effort/validation states
- Define responsive behaviour

&nbsp;

### Team Page Styling

- Define page layout
- Define image dimensions. Aspect ratio
- Define typography and spacing
- Define responsive behaviour

&nbsp;

## Technical Requirements

- Use existing RMIT Capstone boilerplate where necessary
- Avoid unnecessary changes to existing project structure
- Follow established project coding conventions
- Ensure the implementation can be tested

&nbsp;

## Project Hard Rules

1. No task starts until it's in your column, or it has been assigned to you.
2. Every completion gets a comment before the card moves.
3. Developers never test their own code - Dev 1 builds, Dev 2 tests.
4. The PM writes the cards and signs off last; nobody else marks a task Done.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Edge Cases

Edge cases must be documented

&nbsp;

### Missing Photo

If a team member does not have a photo, the team page must continue to display the members other information without causing a broken or empty image, such as a default avatar or branded placeholder image.

&nbsp;

### Long Blurb

If a team members blurb is longer than expected the layout must remain usable and visually consistent. The text should provide a "read more" interaction when full content needs to remain accessible.

&nbsp;

### Missing optional content

Where optional team member information is unavailable, the content should hide completely. Define which fields are optional and how each should behave when missing.

&nbsp;

### User enters the wrong password

User enters an incorrect password repeatedly and reaches the maximum login attempts.

The system should show clear an error message and temporarily lock further login attempts to prevent brute force attack.

&nbsp;

&nbsp;