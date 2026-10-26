"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm, type InterestOption } from "@/components/contact/ContactForm";

/**
 * Reads ?service= / ?course= inside a Suspense boundary so the contact
 * page shell can still prerender under Cache Components.
 */
export function ContactFormLoader({ options }: { options: InterestOption[] }) {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const course = searchParams.get("course");
  const initialInterest = service
    ? `service:${service}`
    : course
      ? `course:${course}`
      : "";

  return <ContactForm initialInterest={initialInterest} options={options} />;
}
