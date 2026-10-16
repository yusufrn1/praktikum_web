"use client";

import { useEffect, useState } from "react";
import DaftarItem from "@/components/DaftarItem";
import type { Item } from "@/lib/tipe";

type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; items: Item[] };

export default function DaftarItemJson() {
  const [state, setState] = useState<LoadState>({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();

    async function loadItems() {
      try {
        const response = await fetch("/data/item.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Data katalog gagal dimuat");
        }

        const items = (await response.json()) as Item[];
        setState({ status: "ready", items });
      } catch {
        if (!controller.signal.aborted) {
          setState({ status: "error" });
        }
      }
    }

    void loadItems();
    return () => controller.abort();
  }, []);

  if (state.status === "loading") {
    return <p role="status">Memuat katalog...</p>;
  }

  if (state.status === "error") {
    return <p role="alert">Katalog gagal dimuat. Coba segarkan halaman.</p>;
  }

  return <DaftarItem items={state.items} />;
}
