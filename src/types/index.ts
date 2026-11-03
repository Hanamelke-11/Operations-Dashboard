export type Kpi = {
  id: number;
  title: string;
  value: string;
  change: number;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
  orders: number;
};

export type CategoryPoint = {
  category: string;
  sales: number;
};

export type OrderStatus = "Completed" | "Pending" | "Cancelled";

export type Order = {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: OrderStatus;
  date: string;
};

export type AlertItem = {
  id: number;
  level: "critical" | "warning" | "info";
  message: string;
  time: string;
};
