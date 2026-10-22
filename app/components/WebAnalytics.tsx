"use client";

import { Analytics } from "@vercel/analytics/react";
import type { BeforeSendEvent } from "@vercel/analytics";
import { useEffect } from "react";
import { trackContactEvent } from "./analytics-events";

function withoutQuery(event: BeforeSendEvent): BeforeSendEvent {
  const url = new URL(event.url);
  url.search = "";
  url.hash = "";
  return { ...event, url: url.toString() };
}

export default function WebAnalytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      let channel: "whatsapp" | "phone" | "email" | "booking" | undefined;
      if (href === "https://calendar.app.google/3Eoja5Ur5Paewsb8A") channel = "booking";
      else if (href.startsWith("https://wa.me/")) channel = "whatsapp";
      else if (href.startsWith("tel:")) channel = "phone";
      else if (href.startsWith("mailto:")) channel = "email";
      if (channel) trackContactEvent("contact_click", channel);
    }
    document.addEventListener("click", onClick, { passive: true });
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <Analytics beforeSend={withoutQuery} />;
}
