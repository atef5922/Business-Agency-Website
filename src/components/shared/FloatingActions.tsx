"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const whatsappNumber = "8801700000000";
const whatsappMessage = "Hello Inovexa, I want to discuss a project.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function FloatingActions() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const [isPopupPaused, setIsPopupPaused] = useState(false);

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

  const hidePopup = useCallback(() => {
    setIsPopupVisible(false);
  }, []);

  const schedulePopupCycle = useCallback(() => {
    clearTimers();
    if (isPopupPaused) return;

    showTimeoutRef.current = setTimeout(() => {
      setIsPopupVisible(true);
      hideTimeoutRef.current = setTimeout(() => {
        hidePopup();
      }, 5000);
    }, 3000);

    cycleTimeoutRef.current = setTimeout(() => {
      schedulePopupCycle();
    }, 25000);
  }, [clearTimers, hidePopup, isPopupPaused]);

  const pausePopup = useCallback(() => {
    setIsPopupPaused(true);
    clearTimers();
    setIsPopupVisible(true);
  }, [clearTimers]);

  const resumePopup = useCallback(
    (immediateRestart = false) => {
      setIsPopupPaused(false);
      clearTimers();

      if (immediateRestart) {
        if (isPopupVisible) {
          hideTimeoutRef.current = setTimeout(() => {
            setIsPopupVisible(false);
          }, 5000);
          return;
        }
        setIsPopupVisible(false);
      }

      schedulePopupCycle();
    },
    [clearTimers, isPopupVisible, schedulePopupCycle]
  );

  useEffect(() => {
    schedulePopupCycle();
    return () => clearTimers();
  }, [clearTimers, schedulePopupCycle]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrollTopVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPopupEnter = () => {
    setIsPopupPaused(true);
    setIsPopupVisible(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
      showTimeoutRef.current = null;
    }
  };

  const onPopupLeave = () => {
    setIsPopupPaused(false);
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
      <div className="fixed bottom-[82px] right-4 z-[9999] flex flex-col items-center gap-3 sm:bottom-[90px] sm:right-6">
        <div
          className="relative"
          onMouseEnter={onPopupEnter}
          onMouseLeave={onPopupLeave}
          onTouchStart={onPopupEnter}
          onTouchEnd={onPopupLeave}
        >
          <AnimatePresence>
            {isPopupVisible ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-16 right-0 w-[220px] max-w-[220px] rounded-xl bg-white px-4 py-3 text-[#111827] shadow-[0_12px_28px_rgba(0,0,0,0.20)] sm:bottom-20"
                onMouseEnter={pausePopup}
                onMouseLeave={() => resumePopup(true)}
                onTouchStart={pausePopup}
                onTouchEnd={() => resumePopup(true)}
              >
                <p className="text-[13px] font-semibold leading-5 text-[#111827] sm:text-sm">
                  <span className="hidden sm:inline">Need help?</span>
                  <span className="sm:hidden">Chat with us</span>
                </p>
                <p className="mt-0.5 text-[13px] leading-5 text-[#111827] sm:text-sm">Chat with us on WhatsApp</p>
                <span className="pointer-events-none absolute -right-2 bottom-[-8px] h-3 w-3 rotate-45 rounded-sm bg-white shadow-[1px_1px_4px_rgba(0,0,0,0.1)]" />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition duration-300 hover:-translate-y-1 hover:scale-[1.04] sm:h-[58px] sm:w-[58px]"
          onMouseEnter={pausePopup}
          onMouseLeave={() => resumePopup(true)}
          onTouchStart={pausePopup}
          onTouchEnd={() => resumePopup(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              fill="#FFFFFF"
              d="M20.52 3.48a11.91 11.91 0 0 0-9.48-3.95 12.01 12.01 0 0 0-10.42 6.07A11.98 11.98 0 0 0 3.95 19.5L3 21l1.57-.41a11.95 11.95 0 0 0 5.7 1.45h.01a11.98 11.98 0 0 0 10.42-18.55Zm-7.06 17.04h-.01a9.9 9.9 0 0 1-5.04-1.36l-.36-.21-3.38.88.9-3.3-.23-.34A9.94 9.94 0 1 1 12 21.52Zm5.62-7.44c-.31-.16-1.84-.91-2.12-1.01-.29-.11-.5-.16-.71.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.53a9.18 9.18 0 0 1-1.7-2.1c-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.56.16-.2.21-.34.31-.57.11-.22.06-.41-.03-.57-.08-.16-.71-1.72-.97-2.37-.25-.6-.5-.52-.69-.53-.18-.01-.4-.01-.61-.01-.2 0-.52.07-.79.36-.27.3-1.06 1.03-1.06 2.52 0 1.48 1.07 2.91 1.22 3.11.15.2 2.1 3.21 5.08 4.45a18.66 18.66 0 0 1 1.91.82c.27.11.48.16.65.22.45.15.86.13 1.18.08.36-.05 1.11-.45 1.27-.88.16-.43.16-.8.11-.88-.05-.08-.18-.13-.38-.22Z"
            />
          </svg>
        </a>
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
