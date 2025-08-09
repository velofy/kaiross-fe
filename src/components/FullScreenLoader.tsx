import React from "react";

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 grid place-items-center">
      <div className="flex flex-col items-center gap-3">
        <div
          aria-label="Loading"
          role="status"
          className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary"
        />
        <span className="text-sm text-muted-foreground">Loading…</span>
      </div>
    </div>
  );
};

export default FullScreenLoader;


