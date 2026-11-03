import { useState } from "react";
import { orders } from "../data/mockData";
import type { OrderStatus } from "../types";

const badge: Record<OrderStatus, { backgroundColor: string; color: string }> = {
  Completed: { backgroundColor: "#dcfce7", color: "#166534" },
  Pending: { backgroundColor: "#fef9c3", color: "#854d0e" },
  Cancelled: { backgroundColor: "#fee2e2", color: "#991b1b" },
};

export default function OrdersTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | OrderStatus>("All");

  const filtered = orders.filter(
    (o) =>
      (status === "All" || o.status === status) &&
      (o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase())),
  );

  const cell = {
    padding: "12px",
    textAlign: "left" as const,
    fontSize: "14px",
    borderBottom: "1px solid #e5e7eb",
  };

  return (
    <section
      aria-label="Recent orders"
      style={{
        backgroundColor: "white",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        marginTop: "16px",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "18px", color: "#111827" }}>
        Recent Orders
      </h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "16px",
        }}
      >
        <label>
          <span style={{ position: "absolute", left: "-9999px" }}>
            Search orders
          </span>
          <input
            type="search"
            placeholder="Search by customer or order ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              minWidth: "240px",
            }}
          />
        </label>
        <label>
          <span style={{ position: "absolute", left: "-9999px" }}>
            Filter by status
          </span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "All" | OrderStatus)}
            style={{
              padding: "8px 12px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
            }}
          >
            <option value="All">All statuses</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p role="status" style={{ color: "#6b7280" }}>
          No orders match your filters.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {[
                  "Order",
                  "Customer",
                  "Product",
                  "Amount",
                  "Status",
                  "Date",
                ].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    style={{ ...cell, color: "#6b7280", fontWeight: 600 }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id}>
                  <td style={cell}>{o.id}</td>
                  <td style={cell}>{o.customer}</td>
                  <td style={cell}>{o.product}</td>
                  <td style={cell}>${o.amount.toFixed(2)}</td>
                  <td style={cell}>
                    <span
                      style={{
                        ...badge[o.status],
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        fontWeight: 600,
                      }}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td style={cell}>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
