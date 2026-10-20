/**
 * Universal smooth scrolling navigation utility that ensures all section transitions
 * maintain clean, valid URL paths without '#' hash fragments (e.g. '/projects', '/contact').
 * 
 * Synchronizes with Lenis smooth scroll engine, native browser smooth scrolling,
 * fixed header height offset, and sessionStorage for active navigation state.
 */

export function scrollToCleanSection(sectionId: string, e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const cleanId = sectionId.replace(/^\/?#?/, "");
  const targetPath = cleanId === "home" || !cleanId ? "/" : `/${cleanId}`;

  if (typeof window === "undefined") return;

  const el = cleanId === "home" || !cleanId ? null : document.getElementById(cleanId);

  // Check if we are on a standalone subpage where home sections do not exist in current DOM
  const isSubpage =
    window.location.pathname.startsWith("/blog/") ||
    window.location.pathname.startsWith("/preview/") ||
    window.location.pathname.startsWith("/education/") ||
    window.location.pathname.startsWith("/privacy") ||
    window.location.pathname.startsWith("/terms") ||
    window.location.pathname.startsWith("/sitemap");

  // If on a subpage or the element isn't in current DOM:
  if (isSubpage || (!el && cleanId !== "home" && cleanId !== "")) {
    sessionStorage.setItem("portfolio_active_section", cleanId);
    sessionStorage.setItem("portfolio_target_scroll", cleanId);
    window.location.href = targetPath;
    return;
  }

  // Element exists on the page (or scrolling to home)
  if (cleanId === "home" || !cleanId || el) {
    const navOffset = 80;
    const targetTop =
      cleanId === "home" || !cleanId
        ? 0
        : el
        ? Math.max(0, el.getBoundingClientRect().top + window.scrollY - navOffset)
        : 0;

    // Lenis smooth scroll integration
    const lenisInstance = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: number,
            opts?: { offset?: number; duration?: number; force?: boolean }
          ) => void;
          resize?: () => void;
        };
      }
    ).__lenis;

    if (lenisInstance && typeof lenisInstance.scrollTo === "function") {
      try {
        if (typeof lenisInstance.resize === "function") lenisInstance.resize();
        lenisInstance.scrollTo(targetTop, { offset: 0, duration: 0.9, force: true });
      } catch {
        // Fallback to window.scrollTo below
      }
    }

    // Native browser smooth scroll
    window.scrollTo({ top: targetTop, behavior: "smooth" });

    // Clean URL replacement - strictly NO '#' in the URL path
    window.history.replaceState(null, "", targetPath);
    sessionStorage.setItem("portfolio_active_section", cleanId || "home");
    sessionStorage.setItem("portfolio_scroll_y", String(targetTop));
  } else {
    window.location.href = targetPath;
  }
}
