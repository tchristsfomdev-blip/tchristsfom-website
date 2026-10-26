import type { ReactNode } from "react";

type IconName =
  | "arrow-right"
  | "award"
  | "book"
  | "briefcase"
  | "chart"
  | "check"
  | "chevron-right"
  | "clock"
  | "envelope"
  | "globe"
  | "graduation"
  | "layers"
  | "map-pin"
  | "message"
  | "phone"
  | "search"
  | "settings"
  | "shield"
  | "sparkles"
  | "target"
  | "users"
  | "cpu"
  | "megaphone"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube";

const paths: Record<IconName, ReactNode> = {
  "arrow-right": (
    <path
      d="M5 12h14M13 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "chevron-right": (
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  award: (
    <>
      <circle
        cx="12"
        cy="9"
        r="5.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  book: (
    <path
      d="M4.5 5.5A2.5 2.5 0 0 1 7 3h12.5v16.5H7A2.5 2.5 0 0 0 4.5 22V5.5ZM7 3v16.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  briefcase: (
    <>
      <rect
        x="3.5"
        y="7.5"
        width="17"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </>
  ),
  chart: (
    <path
      d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  check: (
    <path
      d="M5 12.5 9.5 17 19 7.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  clock: (
    <>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 7.5V12l3.25 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  envelope: (
    <>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m4.5 7.5 7.5 5.5 7.5-5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  globe: (
    <>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M3.75 12h16.5M12 3.75c2.5 2.6 3.75 5.4 3.75 8.25S14.5 17.65 12 20.25C9.5 17.65 8.25 14.85 8.25 12S9.5 6.35 12 3.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </>
  ),
  graduation: (
    <>
      <path
        d="m3 9.5 9-4.5 9 4.5-9 4.5L3 9.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.75v4.25c0 1.5 2 2.75 4.5 2.75s4.5-1.25 4.5-2.75v-4.25M21 9.5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  layers: (
    <path
      d="m4 14 8 4 8-4M4 10l8 4 8-4M4 6l8 4 8-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "map-pin": (
    <>
      <path
        d="M12 21s6.5-5.1 6.5-10.25A6.5 6.5 0 0 0 5.5 10.75C5.5 15.9 12 21 12 21Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10.75"
        r="2.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </>
  ),
  message: (
    <path
      d="M5.5 18.5 4 21l3.25-1.1A8.25 8.25 0 1 0 5.5 18.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <path
      d="M8.5 4.5h3l1.25 3.25-2 1.5a10.5 10.5 0 0 0 4.5 4.5l1.5-2 3.25 1.25v3A2 2 0 0 1 18 18a13.5 13.5 0 0 1-13.5-13.5 2 2 0 0 1 2-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  ),
  search: (
    <>
      <circle
        cx="11"
        cy="11"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m16 16 4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </>
  ),
  settings: (
    <>
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 3.5v2.25M12 18.25V20.5M4.93 6.43l1.6 1.6M17.47 16.97l1.6 1.6M3.5 12h2.25M18.25 12H20.5M6.43 19.07l1.6-1.6M16.97 6.53l1.6-1.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </>
  ),
  shield: (
    <path
      d="M12 3.5 19.5 7v5.25c0 4.4-3 7.45-7.5 8.75-4.5-1.3-7.5-4.35-7.5-8.75V7L12 3.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  ),
  sparkles: (
    <path
      d="M12 3.5v3M12 17.5v3M4.5 12h3M16.5 12h3M6.6 6.6l2.1 2.1M15.3 15.3l2.1 2.1M17.4 6.6l-2.1 2.1M8.7 15.3l-2.1 2.1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  ),
  target: (
    <>
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="12"
        cy="12"
        r="4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" />
    </>
  ),
  users: (
    <path
      d="M16.5 19.5v-1.25A3.25 3.25 0 0 0 13.25 15h-6.5A3.25 3.25 0 0 0 3.5 18.25V19.5M10 11.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM20.5 19.5v-1.1a2.75 2.75 0 0 0-2-2.65M15.4 5.15a2.75 2.75 0 0 1 0 5.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  cpu: (
    <>
      <rect
        x="6.5"
        y="6.5"
        width="11"
        height="11"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <rect
        x="9.5"
        y="9.5"
        width="5"
        height="5"
        rx="0.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M9 3.5v3M15 3.5v3M9 17.5v3M15 17.5v3M3.5 9h3M3.5 15h3M17.5 9h3M17.5 15h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </>
  ),
  megaphone: (
    <path
      d="M3.5 11.5v1a2.5 2.5 0 0 0 2.5 2.5h1l6.5 3.5V6L7 9.5H6A2.5 2.5 0 0 0 3.5 11.5ZM18 8.5a4.5 4.5 0 0 1 0 7M7 14.5v3a1.75 1.75 0 0 0 2.6 1.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  facebook: (
    <path
      d="M14 9h2.5V6.5H14c-1.9 0-3.5 1.6-3.5 3.5v1.5H8.5V14H10.5v6h3v-6H15.5l.5-2.5H13.5V10c0-.55.45-1 1-1Z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="17.25" cy="6.75" r="1" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <path
        d="M6.5 9.5V18M6.5 6.75v.01"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M10.5 18v-5.25A2.75 2.75 0 0 1 13.25 10c1.5 0 2.75 1.2 2.75 2.75V18M10.5 10.5V18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  youtube: (
    <>
      <rect
        x="2.5"
        y="5.5"
        width="19"
        height="13"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M10.5 9.5v5l5-2.5-5-2.5Z" fill="currentColor" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  title?: string;
};

export function Icon({ name, className = "size-5", title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}

export type { IconName };

export const serviceIcons: Record<string, IconName> = {
  "corporate-leadership-academy": "graduation",
  "v-chro-5p-process-outsourcing": "users",
  "hr-organizational-audits": "search",
  "financial-management-consultancy": "chart",
  "marketing-consultancy": "megaphone",
  "it-consultancy": "cpu",
  "operations-strategies": "settings",
  "virtual-working-techniques": "globe",
};

export const pillarIcons: IconName[] = ["shield", "award", "clock", "layers"];

export const socialIcons: Record<string, IconName> = {
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
  YouTube: "youtube",
};
