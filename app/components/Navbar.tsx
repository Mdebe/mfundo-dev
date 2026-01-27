"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          Mfundo Sithole
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md border px-3 py-1 text-xs"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}