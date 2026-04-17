import type { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send a message to ParikhHealth in Sunnyvale, CA. Questions, appointment requests, or general inquiries — we respond within one business day.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
