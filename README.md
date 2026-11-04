# Operations Dashboard

Arrowstack Frontend Internship, Project 2.

## Live Demo

https://operations-dashboard-sable-xi.vercel.app

## Project Overview

An executive dashboard for monitoring KPIs, revenue trends, sales by category, system alerts and recent orders. Built for operations managers who need a quick view of business health and a way to find specific orders.

## Features

- KPI cards with positive and negative trend indicators
- Revenue line chart and sales-by-category bar chart (Recharts)
- Alerts panel with critical, warning and info levels, plus an empty state
- Orders table with search by customer or order ID and a status filter
- Loading, empty and error states, with a Retry button
- Responsive grid layout that wraps on tablet and mobile
- Accessibility: semantic HTML, `aria-label` on sections, labelled inputs, table headers with `scope`, `role="alert"` on critical alerts

## Tech Stack

React, TypeScript, Vite, Recharts, Lucide React, mock data

## How to Run

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:5173

## Decisions

- Used React with Vite instead of Next.js for simplicity
- Kept mock data in one file so it can be replaced by a real `fetch` without changing the components
- Used `--legacy-peer-deps` because of a typescript-eslint peer dependency conflict
- Installed `react-is`, which Recharts needs, separately

## Known Limitations

- Data is simulated; there is no backend, and the loading delay is artificial
- The JavaScript bundle is about 618 kB because of Recharts
- Charts have no text alternative or data table yet

## Next Improvements

- Code-split the charts with dynamic import
- Connect to a real REST API
- Add a date-range filter and CSV export
- Add a data table fallback for the charts
- Add automated tests
