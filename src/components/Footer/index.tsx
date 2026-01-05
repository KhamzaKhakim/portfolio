"use client";

export function Footer() {
  return (
    <div className="mt-18 mb-12 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
      <p className="text-xs opacity-70">&copy; 2026 Khamza Khakim.</p>
      <p className="text-xs">
        No bugs were <em className="italic opacity-80">intentionally</em>{" "}
        shipped.
      </p>
    </div>
  );
}
