# Emilist

Emilist is a all in one project management platform built with Next.js 14.0.4 (App Router) and TypeScript, enabling users to post and find jobs, manage projects, post and buy materials, communicate via a message center, and access services and cart functionalities. The application is optimized for SEO, performance, and accessibility, using Tailwind CSS, Shadcn/UI, and DaisyUI for styling, Axios for external API requests, and Atomic Design for modular UI components.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [SEO Optimizations](#seo-optimizations)
- [Contributing](#contributing)
- [License](#license)

## Features

Emilist offers a robust set of features within a dashboard and public landing pages:

- **Jobs**: Post, view, edit, and delete jobs (Direct, Regular, Biddable, Reoccurring). View all jobs, user-applied jobs, user-uploaded jobs, and saved jobs.
- **Projects**: Manage projects created when a user is accepted for a job. View all projects or by ID.
- **Materials**: Upload, view (self-uploaded or others), and like materials. View all materials or user-uploaded materials.
- **Messages**: Communicate via a message center.
- **Cart**: Manage cart-related functionality.
- **Services**: Upload, edit, and view services.
- **Dashboard**: Centralized hub for all features.
- **Landing Pages**: Public-facing pages for marketing and user onboarding.
- **Custom UI**: Reusable Modal, Toast, Tooltip, and InfoCard components styled with Tailwind, Shadcn/UI, and DaisyUI.

## Tech Stack

- **Framework**: Next.js 14.0.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI, DaisyUI
- **API Requests**: Axios
- **Component Architecture**: Atomic Design (Atoms, Molecules, Organisms, Templates)
- **State Management**: React Context
- **SEO**: Next.js Metadata API, Structured Data (JSON-LD), Sitemap
- **Fonts**: Google Fonts (Inter and exo)
- **Formatting**: Prettier

## Project Structure

The project is organized for modularity, scalability, and maintainability, with no `src` folder:
