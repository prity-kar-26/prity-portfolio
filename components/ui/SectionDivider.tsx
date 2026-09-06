export default function SectionDivider() {
  return (
    <div aria-hidden className="relative h-16 w-full overflow-hidden sm:h-20">
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="var(--color-accent)"
          fillOpacity="0.06"
        />
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
          stroke="var(--color-accent)"
          strokeOpacity="0.25"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}


// export default function SectionDivider() {
//   return (
//     <div
//       aria-hidden
//       className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent/25 to-transparent"
//     />
//   );
// }