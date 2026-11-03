type Props = {
  type: "loading" | "error";
  message?: string;
  onRetry?: () => void;
};

export default function StatusMessage({ type, message, onRetry }: Props) {
  if (type === "loading") {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{ padding: "60px", textAlign: "center", color: "#6b7280" }}
      >
        <p style={{ fontSize: "18px", margin: 0 }}>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div
      role="alert"
      style={{
        padding: "40px",
        textAlign: "center",
        backgroundColor: "#fef2f2",
        color: "#b91c1c",
        borderRadius: "12px",
      }}
    >
      <p style={{ fontSize: "18px", margin: "0 0 12px" }}>
        {message ?? "Something went wrong."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "8px 20px",
            backgroundColor: "#b91c1c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Retry
        </button>
      )}
    </div>
  );
}
