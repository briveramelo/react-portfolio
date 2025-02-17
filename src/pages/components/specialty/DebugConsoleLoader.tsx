import React, { Suspense } from "react";

const DebugConsole =
  process.env.NODE_ENV === "development"
    ? React.lazy(() => import("./DebugConsole"))
    : () => null;

const DebugConsoleLoader: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <DebugConsole />
    </Suspense>
  );
};

export default DebugConsoleLoader;
