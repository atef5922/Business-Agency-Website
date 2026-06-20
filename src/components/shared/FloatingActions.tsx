"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const whatsappNumber = "8801700000000";
const whatsappMessage = "Hello Inovexa, I want to discuss a project.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function FloatingActions() {
  const [isLabelVisible, setIsLabelVisible] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cycleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (cycleTimeoutRef.current) {
      clearTimeout(cycleTimeoutRef.current);
      cycleTimeoutRef.current = null;
    }
  }, []);

  const hideLabel = useCallback(() => {
    setIsLabelVisible(false);
  }, []);

  const scheduleLabelCycle = useCallback(() => {
    clearTimers();
    if (isLabelHovered) return;

    showTimeoutRef.current = setTimeout(() => {
      setIsLabelVisible(true);
      hideTimeoutRef.current = setTimeout(() => {
        hideLabel();
      }, 5000);
    }, 3000);

    cycleTimeoutRef.current = setTimeout(() => {
      scheduleLabelCycle();
    }, 20000);
  }, [clearTimers, hideLabel, isLabelHovered]);

  const pausePopup = useCallback(() => {
    setIsLabelHovered(true);
    clearTimers();
    setIsLabelVisible(true);
  }, [clearTimers]);

  const resumePopup = useCallback(
    (immediateRestart = false) => {
      setIsLabelHovered(false);
      clearTimers();

      if (immediateRestart) {
        if (isLabelVisible) {
          setIsLabelVisible(true);
          hideTimeoutRef.current = setTimeout(() => {
            hideLabel();
          }, 5000);
          return;
        }
        setIsLabelVisible(false);
      }

      scheduleLabelCycle();
    },
    [clearTimers, isLabelVisible, hideLabel, scheduleLabelCycle]
  );

  useEffect(() => {
    scheduleLabelCycle();
    return () => clearTimers();
  }, [clearTimers, scheduleLabelCycle]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrollTopVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onButtonEnter = () => {
    pausePopup();
  };

  const onButtonLeave = () => {
    setIsLabelHovered(false);
    setIsLabelVisible(false);
    resumePopup(true);
  };

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="fixed right-4 bottom-[84px] z-[9999] flex items-center gap-2.5 sm:bottom-[96px] sm:right-6">
        <AnimatePresence>
          {isLabelVisible ? (
            <motion.span
              initial={{ opacity: 0, x: 8, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-none whitespace-nowrap rounded-full border border-[#E5E7EB] bg-white px-3.5 py-2 text-[14px] font-bold text-[#111827] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              onMouseEnter={onButtonEnter}
              onMouseLeave={onButtonLeave}
            >
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">Chat on WhatsApp</span>
            </motion.span>
          ) : null}
        </AnimatePresence>

        <div
          className="relative h-[58px] w-[58px] sm:h-[58px] sm:w-[58px]"
          onMouseEnter={onButtonEnter}
          onMouseLeave={onButtonLeave}
          onTouchStart={onButtonEnter}
          onTouchEnd={onButtonLeave}
        >
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full"
            style={{ backgroundColor: "rgba(37, 211, 102, 0.25)" }}
            initial={{ scale: 1, opacity: 0.45 }}
            animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeOut" }}
          />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[3px] border-[#FFFFFF] bg-[#25D366] shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.05]"
            onMouseEnter={onButtonEnter}
            onMouseLeave={onButtonLeave}
            onTouchStart={onButtonEnter}
            onTouchEnd={onButtonLeave}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                fill="#FFFFFF"
                d="M20.52 3.48a11.91 11.91 0 0 0-9.48-3.95 12.01 12.01 0 0 0-10.42 6.07A11.98 11.98 0 0 0 3.95 19.5L3 21l1.57-.41a11.95 11.95 0 0 0 5.7 1.45h.01a11.98 11.98 0 0 0 10.42-18.55Zm-7.06 17.04h-.01a9.9 9.9 0 0 1-5.04-1.36l-.36-.21-3.38.88.9-3.3-.23-.34A9.94 9.94 0 1 1 12 21.52Zm5.62-7.44c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.53a9.18 9.18 0 0 1-1.7-2.1c-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.56.16-.2.21-.34.31-.57.11-.22.06-.41-.03-.57-.08-.16-.71-1.72-.97-2.37-.25-.6-.5-.52-.69-.53-.18-.01-.4-.01-.61-.01-.2 0-.52.07-.79.36-.27.3-1.06 1.03-1.06 2.52 0 1.48 1.07 2.91 1.22 3.11.15.2 2.1 3.21 5.08 4.45a18.66 18.66 0 0 1 1.91.82c.27.11.48.16.65.22.45.15.86.13 1.18.08.36-.05 1.11-.45 1.27-.88.16-.43.16-.8.11-.88-.05-.08-.18-.13-.38-.22Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isScrollTopVisible ? (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            onClick={onScrollTop}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 bottom-4 z-[9998] grid h-[44px] w-[44px] place-items-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[#073B32] text-white shadow-[0_10px_25px_rgba(7,59,50,0.25)] transition duration-300 hover:-translate-y-[3px] hover:bg-[#0B4A42] sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </>
  );
}
