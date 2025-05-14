# Dashboard

A modern React app built with Vite, TypeScript, Tailwind CSS, and shadcn/ui.

## How to Run the Project

1. **Clone the repo**

   ```bash

   git clone https://github.com/niamudeen-pro/crm-dashboard-design
   cd your-project

   ```

2. **Install dependencies**

   ```bash
   npm install

   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Tech Stack Used

Vite – fast build tool

React – UI library

TypeScript – static typing

Tailwind CSS – utility-first CSS framework

shadcn/ui – prebuilt components styled with Tailwind

Radix UI – used under the hood by shadcn for accessibility and headless components

clsx / tailwind-variants – for conditional and variant-based styling (if used)

## Assumptions & Decisions Made

Component Library: Used shadcn/ui to avoid building common components from scratch and to maintain design consistency.

Styling: Chose Tailwind CSS for rapid styling and easier theming.

Project Structure: Followed feature-based folder structure to keep code organized.

Type Safety: Used TypeScript for better code quality and fewer runtime errors.

## Notes & Decisions

The theme toggle button was not visible by default, so I placed it inside the user menu in the topbar (right side), since there was no specific design guidance for it.
