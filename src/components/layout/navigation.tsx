"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@/data/navigation";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/lib/motion";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { reduce: reduceMotion, mounted: motionMounted } = useReducedMotionSafe();
  const isReduced = !motionMounted || reduceMotion;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId = "";
        let bestRatio = 0;
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId && bestRatio > 0) {
          setActiveSection(bestId);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Focus first menu item when mobile menu opens
  useEffect(() => {
    if (isMobileOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector<HTMLAnchorElement>("a");
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isMobileOpen]);

  const closeMenu = useCallback(() => {
    setIsMobileOpen(false);
    triggerRef.current?.focus();
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        closeMenu();
      }
    },
    [isMobileOpen, closeMenu]
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Let native anchor scroll happen, then suppress observer briefly
      isClickScrolling.current = true;
      setActiveSection(href.slice(1));

      // Re-enable observer after scroll settles
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);

      if (isMobileOpen) {
        closeMenu();
      }
    },
    [isMobileOpen, closeMenu]
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-200",
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Brand — XEVRYN identity */}
          <motion.a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-medium tracking-widest text-foreground transition-colors hover:text-accent"
            aria-label="Xevryn - Daffa Alfie portfolio"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* X mark */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4 4 L14 16 L4 28"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 4 L18 16 L28 28"
                stroke="var(--accent-primary)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Wordmark — hidden on mobile, visible on desktop */}
            <span className="hidden sm:inline">XEVRYN</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden items-center gap-8 md:flex"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "nav-link text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-fg hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={`https://github.com/${SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-[13px] font-medium uppercase tracking-[0.08em] text-muted-fg transition-colors hover:text-foreground"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            ref={triggerRef}
            className="flex items-center justify-center p-2 md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block h-px w-5 bg-foreground"
                animate={isMobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: isReduced ? 0 : 0.2 }}
              />
              <motion.span
                className="block h-px w-5 bg-foreground"
                animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: isReduced ? 0 : 0.1 }}
              />
              <motion.span
                className="block h-px w-5 bg-foreground"
                animate={isMobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: isReduced ? 0 : 0.2 }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onKeyDown={handleKeyDown}
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "transition-colors",
                      isActive ? "text-2xl text-accent" : "text-2xl text-foreground hover:text-accent"
                    )}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : i * 0.1, duration: reduceMotion ? 0 : 0.3 }}
                    style={{
                      transform: isActive && !reduceMotion ? "scale(1.08)" : "scale(1)",
                      transformOrigin: "center",
                      transition: reduceMotion
                        ? "color 0.2s"
                        : "color 0.2s, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <motion.a
                href={`https://github.com/${SITE.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-foreground transition-colors hover:text-accent"
                onClick={closeMenu}
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : NAV_ITEMS.length * 0.1,
                  duration: reduceMotion ? 0 : 0.3,
                }}
              >
                GitHub
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
