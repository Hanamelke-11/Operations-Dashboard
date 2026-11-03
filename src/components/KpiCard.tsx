import { TrendingUp, TrendingDown } from "lucide-react";
import type { Kpi } from "../types";

type Props = { kpi: Kpi };

export default function KpiCard({ kpi }: Props) {
  const positive = kpi.change >= 0;

  return (
    <article
      aria-label={`${kpi.title}: ${kpi.value}`}
      style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <p style={{ color: "#6b7280", fontSize: "14px", margin: 0 }}>
        {kpi.title}
      </p>
      <p
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#111827",
          margin: "8px 0",
        }}
      >
        {kpi.value}
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          margin: 0,
          fontSize: "13px",
          fontWeight: 600,
          color: positive ? "#16a34a" : "#dc2626",
        }}
      >
        {positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
        {positive ? "+" : ""}
        {kpi.change}% vs last month
      </p>
    </article>
  );
}
