"use client";

import { track } from "@vercel/analytics";

// Only fixed event names, channel and path: never send form contents or contact details.
export function trackContactEvent(name: "contact_click" | "form_submit_attempt" | "generate_lead", channel: "whatsapp" | "phone" | "email" | "form" | "booking") {
  try {
    track(name, { channel, page: window.location.pathname });
  } catch {
    // Analytics must never interrupt navigation or contact delivery.
  }
}
