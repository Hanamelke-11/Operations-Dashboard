import type {
  Kpi,
  RevenuePoint,
  CategoryPoint,
  Order,
  AlertItem,
} from "../types";

export const kpis: Kpi[] = [
  { id: 1, title: "Total Revenue", value: "$84,250", change: 12.5 },
  { id: 2, title: "Total Orders", value: "1,284", change: 8.2 },
  { id: 3, title: "Active Users", value: "5,630", change: -2.4 },
  { id: 4, title: "Conversion Rate", value: "3.8%", change: 1.1 },
];

export const revenueData: RevenuePoint[] = [
  { month: "Jan", revenue: 42000, orders: 610 },
  { month: "Feb", revenue: 48000, orders: 690 },
  { month: "Mar", revenue: 51000, orders: 720 },
  { month: "Apr", revenue: 58000, orders: 830 },
  { month: "May", revenue: 63000, orders: 910 },
  { month: "Jun", revenue: 71000, orders: 1020 },
  { month: "Jul", revenue: 84250, orders: 1284 },
];

export const categoryData: CategoryPoint[] = [
  { category: "Electronics", sales: 34000 },
  { category: "Clothing", sales: 26000 },
  { category: "Books", sales: 12000 },
  { category: "Home", sales: 18000 },
];

export const orders: Order[] = [
  {
    id: "ORD-1001",
    customer: "Alice Johnson",
    product: "Wireless Headphones",
    amount: 59.99,
    status: "Completed",
    date: "2026-11-01",
  },
  {
    id: "ORD-1002",
    customer: "Brian Otieno",
    product: "Smart Watch",
    amount: 129.99,
    status: "Pending",
    date: "2026-11-01",
  },
  {
    id: "ORD-1003",
    customer: "Chloe Smith",
    product: "Running Shoes",
    amount: 89.99,
    status: "Completed",
    date: "2026-10-31",
  },
  {
    id: "ORD-1004",
    customer: "David Kim",
    product: "Leather Jacket",
    amount: 199.99,
    status: "Cancelled",
    date: "2026-10-31",
  },
  {
    id: "ORD-1005",
    customer: "Eden Tesfaye",
    product: "Laptop Backpack",
    amount: 49.99,
    status: "Completed",
    date: "2026-10-30",
  },
  {
    id: "ORD-1006",
    customer: "Fatima Ali",
    product: "Sunglasses",
    amount: 34.99,
    status: "Pending",
    date: "2026-10-30",
  },
  {
    id: "ORD-1007",
    customer: "George Mwangi",
    product: "React Programming Book",
    amount: 29.99,
    status: "Completed",
    date: "2026-10-29",
  },
  {
    id: "ORD-1008",
    customer: "Hana Bekele",
    product: "Bluetooth Speaker",
    amount: 45.99,
    status: "Cancelled",
    date: "2026-10-29",
  },
  {
    id: "ORD-1009",
    customer: "Ian Kamau",
    product: "Mechanical Keyboard",
    amount: 89.5,
    status: "Completed",
    date: "2026-10-28",
  },
  {
    id: "ORD-1010",
    customer: "Jemal Ahmed",
    product: "USB-C Hub",
    amount: 39.99,
    status: "Pending",
    date: "2026-10-27",
  },
  {
    id: "ORD-1011",
    customer: "Kidist Alemu",
    product: "Yoga Mat",
    amount: 24.99,
    status: "Completed",
    date: "2026-10-25",
  },
  {
    id: "ORD-1012",
    customer: "Liam Brown",
    product: "Desk Lamp",
    amount: 54.0,
    status: "Cancelled",
    date: "2026-10-22",
  },
  {
    id: "ORD-1013",
    customer: "Maya Patel",
    product: "Winter Coat",
    amount: 149.99,
    status: "Completed",
    date: "2026-10-20",
  },
  {
    id: "ORD-1014",
    customer: "Nathan Girma",
    product: "Wireless Mouse",
    amount: 27.49,
    status: "Pending",
    date: "2026-10-18",
  },
  {
    id: "ORD-1015",
    customer: "Olivia Chen",
    product: "Water Bottle",
    amount: 19.99,
    status: "Completed",
    date: "2026-10-15",
  },
];

export const alerts: AlertItem[] = [
  {
    id: 1,
    level: "critical",
    message: "Payment gateway latency above 3s",
    time: "5 min ago",
  },
  {
    id: 2,
    level: "warning",
    message: "Stock low: Bluetooth Speaker (2 left)",
    time: "1 hour ago",
  },
  {
    id: 3,
    level: "info",
    message: "Monthly report is ready to download",
    time: "3 hours ago",
  },
];
