const icons = {
  menu: "M4 5h16M4 12h16M4 19h16",
  x: "M18 6L6 18M6 6l12 12",
  landmark: "M10 18v-7m1.119-8.795a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7",
  globe: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20",
  briefcase: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  brain: "M12 18V5m3 8a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
  target: "",
  check: "M20 6L9 17l-5-5",
  "check-check": "M18 6L7 17l-5-5m20-2-7.5 7.5L13 16",
  clock: "M12 6v6l4 2",
  "map-pin": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  "external-link": "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  info: "M12 16v-4m0-4h.01",
  "trending-up": "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17",
  handshake: "m11 17 2 2a1 1 0 1 0 3-3",
  "life-buoy": "M4.9 4.9 9 9m0 6-4.1 4.1M14.1 9l4 4.1m0-9L15 9",
  "shield-check": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  "building-2": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18H6zM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4",
  "user-round-search": "M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM2 21a8 8 0 0 1 10.3-7.7M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M21 21l-1.5-1.5",
  "arrow-left": "m12 19-7-7 7-7M19 12H5",
  download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3",
  lock: "M5 11V7a7 7 0 0 1 14 0v4M5 11h14v10H5z",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.13a4 4 0 0 1 0 7.75M22 21v-2a4 4 0 0 0-3-3.87",
  wallet: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
  crown: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14",
  "chart-column": "M3 3v16a2 2 0 0 0 2 2h16M18 17V9M13 17V5M8 17v-3",
  "calendar-check": "M8 2v4M16 2v4M3 10h18M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM9 16l2 2 4-4",
  laptop: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
  plus: "M5 12h14M12 5v14",
  "chevron-down": "m6 9 6 6 6-6",
  "arrow-up-right": "M7 7h10v10M7 17 17 7",
};

const extras = {
  globe: <circle cx="12" cy="12" r="10" />,
  briefcase: <rect width="20" height="14" x="2" y="6" rx="2" />,
  target: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  clock: <circle cx="12" cy="12" r="10" />,
  "map-pin": <circle cx="12" cy="10" r="3" />,
  info: <circle cx="12" cy="12" r="10" />,
  "life-buoy": (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  "shield-check": <path d="m9 12 2 2 4-4" />,
  users: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    </>
  ),
};

export function Icon({ name, className = "size-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {extras[name]}
      {icons[name] ? <path d={icons[name]} /> : null}
    </svg>
  );
}
