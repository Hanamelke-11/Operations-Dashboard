import { useEffect, useState } from "react";
import KpiCard from "./components/KpiCard";
import RevenueChart from "./components/RevenueChart";
import CategoryChart from "./components/CategoryChart";
import AlertsPanel from "./components/AlertsPanel";
import OrdersTable from "./components/OrdersTable";
import StatusMessage from "./components/StatusMessage";
import { kpis } from "./data/mockData";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      // To test the error state, change false to true below
      setError(false);
    }, 1200);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <h1 style={{ marginTop: 0, color: "#111827" }}>Operations Dashboard</h1>

      {loading && <StatusMessage type="loading" />}
      {error && (
        <StatusMessage
          type="error"
          message="Failed to load dashboard data."
          onRetry={load}
        />
      )}

      {!loading && !error && (
        <>
          <section
            aria-label="Key performance indicators"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </section>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <RevenueChart />
            <CategoryChart />
          </section>

          <section style={{ marginTop: "16px" }}>
            <AlertsPanel />
          </section>

          <OrdersTable />
        </>
      )}
    </div>
  );
}

export default App;
