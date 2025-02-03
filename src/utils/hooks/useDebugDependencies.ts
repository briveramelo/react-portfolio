import { useEffect, useRef } from "react";

// A custom hook to debug dependency changes.
export function useDebugDeps<T extends object>(deps: T, label: string) {
  const previousDeps = useRef<T | null>(null);

  useEffect(() => {
    if (previousDeps.current) {
      const changedDeps: Partial<Record<keyof T, { from: any; to: any }>> = {};
      for (const key in deps) {
        if (deps[key] !== previousDeps.current[key]) {
          changedDeps[key] = { from: previousDeps.current[key], to: deps[key] };
        }
      }
      if (Object.keys(changedDeps).length > 0) {
        console.log(`[${label}] Changed dependencies:`, changedDeps);
        console.log(JSON.stringify(changedDeps, null, 2));
      }
    }
    previousDeps.current = deps;
  }, [deps, label]);
}
