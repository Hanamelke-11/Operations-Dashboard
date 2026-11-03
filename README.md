# Operations Dashboard

Arrowstack Frontend Internship, Project 2.

## Overview

An executive dashboard for monitoring KPIs, revenue trends, sales by category, system alerts and recent orders. Built for operations managers who need a quick view of business health.

## Features

- KPI cards with positive/negative trend indicators
- Revenue line chart and sales-by-category bar chart (Recharts)
- Alerts panel (critical, warning, info) with an empty state
- Orders table with search by customer or order ID and status filter
- Loading, empty and error states with a Retry button
- Responsive grid layout (desktop, tablet, mobile)
- Accessibility: semantic HTML, aria-labels, labelled inputs, table headers with scope

## Tech Stack

React, TypeScript, Vite, Recharts, Lucide React, mock data

## How to Run

npm install --legacy-peer-deps
npm run dev
Open http://localhost:5173

## Decisions

- Used React with Vite instead of Next.js for simplicity
- Mock data in a single file acts like a REST API and can be replaced with fetch
- Used --legacy-peer-deps because of a typescript-eslint peer dependency conflict

## Known Limitations

- Data is simulated, there is no backend
- JS bundle is about 618 kB because of Recharts

## Next Improvements

- Code-split the charts with dynamic import
- Connect to a real REST API
- Add date-range filter and CSV export
- Add automated tests
