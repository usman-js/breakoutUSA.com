"use client";

import { useSyncExternalStore } from "react";

// Renders the current year on the client, so the statically prerendered
// page does not depend on the build date.
const subscribe = () => () => {};

export default function CopyrightYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year ?? ""}</>;
}
