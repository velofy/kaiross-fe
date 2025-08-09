import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    // In production, forward to monitoring here (e.g., Sentry)
    console.error("Unhandled error in UI:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="container mx-auto p-6">
            <h1 className="text-lg font-semibold">Something went wrong.</h1>
            <p className="text-sm text-muted-foreground">Please refresh the page and try again.</p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


