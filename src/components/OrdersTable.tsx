import { useState } from "react";
import { orders } from "../data/mockData";
import type { OrderStatus } from "../types";

const badge: Record<OrderStatus, { backgroundColor: string; color: string }> = {
  Completed: { backgroundColor: "#dcfce7", color: "#166534" },
  Pending: { backgroundColor: "#fef9c3", color: "#854d0e" },
  Cancelled: { backgroundColor: "#fee2e2", color: "#991b1b" },
};

type SortKey = "id" | "customer" | "product" | "amount" | "status" | "date";
type SortDir = "asc" | "desc";

const columns: { key: SortKey; label: string }[] = [
  { key: "id", label: "Order" },
  { key: "customer", label: "Customer" },
  { key: "product", label: "Product" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "date", label: "Date" },
];

const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export default function OrdersTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"All" | OrderStatus>("All"); // applied
  const [from, setFrom] = useState(""); // applied
  const [to, setTo] = useState(""); // applied
  const [open, setOpen] = useState(false);
  const [draftStatus, setDraftStatus] = useState<"All" | OrderStatus>("All");
  const [draftFrom, setDraftFrom] = useState("");
  const [draftTo, setDraftTo] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(1); // number of batches loaded

  // Dates are ISO strings (YYYY-MM-DD), so string comparison is correct.
  const filtered = orders.filter(
    (o) =>
      (status === "All" || o.status === status) &&
      (o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase())) &&
      (!from || o.date >= from) &&
      (!to || o.date <= to),
  );

  const sorted = [...filtered].sort((a, b) => {
    const x = a[sortKey];
    const y = b[sortKey];
    const result =
      typeof x === "number" && typeof y === "number"
        ? x - y
        : String(x).localeCompare(String(y));
    return sortDir === "asc" ? result : -result;
  });

  const visibleCount = page * pageSize;
  const pageRows = sorted.slice(0, visibleCount);
  const remaining = sorted.length - pageRows.length;

  const toggleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };

  const applyFilters = () => {
    setStatus(draftStatus);
    setFrom(draftFrom);
    setTo(draftTo);
    setPage(1);
    setOpen(false);
  };

  const clearFilters = () => {
    setDraftStatus("All");
    setDraftFrom("");
    setDraftTo("");
    setStatus("All");
    setFrom("");
    setTo("");
    setPage(1);
  };

  const cell = {
    padding: "12px",
    textAlign: "left" as const,
    fontSize: "14px",
    borderBottom: "1px solid #e5e7eb",
  };

  const input = {
    padding: "8px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
  };

  const pageButton = (disabled: boolean) => ({
    padding: "8px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    backgroundColor: "white",
    color: disabled ? "#9ca3af" : "#111827",
    cursor: disabled ? "not-allowed" : "pointer",
  });

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
          alignItems: "center",
          marginBottom: "16px",
          position: "relative",
        }}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      >
        <label>
          <span style={{ position: "absolute", left: "-9999px" }}>
            Search orders
          </span>
          <input
            type="search"
            placeholder="Search by customer or order ID"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            style={{ ...input, minWidth: "240px" }}
          />
        </label>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="orders-filter-panel"
          onClick={() => setOpen(!open)}
          style={pageButton(false)}
        >
          Filter
        </button>

        {open && (
          <div
            id="orders-filter-panel"
            role="dialog"
            aria-label="Filter orders"
            style={{
              position: "absolute",
              top: "48px",
              left: "260px",
              zIndex: 10,
              width: "300px",
              maxWidth: "100%",
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
              padding: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <strong style={{ color: "#111827" }}>Filter orders</strong>
              <button
                type="button"
                aria-label="Close filter"
                onClick={() => setOpen(false)}
                style={{ ...pageButton(false), padding: "2px 10px" }}
              >
                ✕
              </button>
            </div>

            <label style={{ fontSize: "12px", color: "#6b7280" }}>
              Status
              <select
                value={draftStatus}
                onChange={(e) =>
                  setDraftStatus(e.target.value as "All" | OrderStatus)
                }
                style={{ ...input, width: "100%", marginBottom: "12px" }}
              >
                <option value="All">All statuses</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </label>

            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <label style={{ fontSize: "12px", color: "#6b7280", flex: 1 }}>
                Start Date
                <input
                  type="date"
                  value={draftFrom}
                  max={draftTo || undefined}
                  onChange={(e) => setDraftFrom(e.target.value)}
                  style={{ ...input, width: "100%", boxSizing: "border-box" }}
                />
              </label>
              <label style={{ fontSize: "12px", color: "#6b7280", flex: 1 }}>
                End Date
                <input
                  type="date"
                  value={draftTo}
                  min={draftFrom || undefined}
                  onChange={(e) => setDraftTo(e.target.value)}
                  style={{ ...input, width: "100%", boxSizing: "border-box" }}
                />
              </label>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <button
                type="button"
                onClick={clearFilters}
                style={{ ...pageButton(false), flex: 1 }}
              >
                Clean Filter
              </button>
              <button
                type="button"
                onClick={applyFilters}
                style={{
                  ...pageButton(false),
                  flex: 1,
                  backgroundColor: "#166534",
                  color: "white",
                  borderColor: "#166534",
                }}
              >
                Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {sorted.length === 0 ? (
        <p role="status" style={{ color: "#6b7280" }}>
          No orders match your filters.
        </p>
      ) : (
        <>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {columns.map((c) => (
                    <th
                      key={c.key}
                      scope="col"
                      aria-sort={
                        sortKey === c.key
                          ? sortDir === "asc"
                            ? "ascending"
                            : "descending"
                          : "none"
                      }
                      style={{ ...cell, color: "#6b7280", fontWeight: 600 }}
                    >
                      <button
                        type="button"
                        onClick={() => toggleSort(c.key)}
                        style={{
                          background: "none",
                          border: "none",
                          padding: 0,
                          font: "inherit",
                          color: "inherit",
                          cursor: "pointer",
                        }}
                      >
                        {c.label}
                        {sortKey === c.key
                          ? sortDir === "asc"
                            ? " ▲"
                            : " ▼"
                          : ""}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageRows.map((o) => (
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            <label
              style={{
                fontSize: "14px",
                color: "#374151",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Rows per page:
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setPage(1);
                }}
                style={input}
              >
                {PAGE_SIZE_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
            <span
              aria-live="polite"
              style={{ fontSize: "14px", color: "#6b7280" }}
            >
              Showing {pageRows.length} of {sorted.length} orders
            </span>
            {remaining > 0 && (
              <button
                type="button"
                onClick={() => setPage(page + 1)}
                style={{
                  ...pageButton(false),
                  backgroundColor: "#166534",
                  color: "white",
                  borderColor: "#166534",
                }}
              >
                Load {pageSize} more
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
