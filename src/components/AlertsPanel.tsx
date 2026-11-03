import { AlertTriangle, Info, XCircle } from "lucide-react";
import { alerts } from "../data/mockData";

const styles = {
  critical: { bg: "#fef2f2", color: "#b91c1c", Icon: XCircle },
  warning: { bg: "#fffbeb", color: "#b45309", Icon: AlertTriangle },
  info: { bg: "#eff6ff", color: "#1d4ed8", Icon: Info },
};

export default function AlertsPanel() {
  return (
    <section
      aria-label="Alerts"
      style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "18px", color: "#111827" }}>
        Alerts
      </h2>

      {alerts.length === 0 ? (
        <p role="status" style={{ color: "#6b7280" }}>
          No alerts right now.
        </p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {alerts.map((a) => {
            const { bg, color, Icon } = styles[a.level];
            return (
              <li
                key={a.id}
                role={a.level === "critical" ? "alert" : undefined}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  backgroundColor: bg,
                  color,
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <Icon size={20} aria-hidden="true" />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: "14px" }}>
                    {a.message}
                  </p>
                  <p style={{ margin: 0, fontSize: "12px", opacity: 0.8 }}>
                    {a.time}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
