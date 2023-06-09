"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
