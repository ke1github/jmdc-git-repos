// app/(root)/layout.tsx or app/layout.tsx
"use client";
import "@/app/globals.css";
import React from "react";

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors position="top-right" />
        {/* 👈 Required for toast to work */}
      </body>
    </html>
  );
}
