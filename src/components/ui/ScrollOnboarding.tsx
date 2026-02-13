import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollOnboarding = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const isSkippingRef = useRef(false);

  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("onboarding_shown");
  });

  const restoreStyles = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    const fixedElements = document.querySelectorAll("header, footer");
    fixedElements.forEach((el) => {
      (el as HTMLElement).style.paddingRight = "";
    });

    document.documentElement.style.scrollBehavior = "";
    document.body.style.scrollBehavior = "";
  }, []);

  const handleSkip = useCallback(() => {
    if (isSkippingRef.current) return;
    isSkippingRef.current = true;

    gsap.killTweensOf(window);
    gsap.killTweensOf([mouseRef.current, wheelRef.current]);

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        restoreStyles();
        setIsVisible(false);
        sessionStorage.setItem("onboarding_shown", "true");
      },
    });
  }, [restoreStyles]);

  useEffect(() => {
    if (!isVisible) return;

    const handleUserInteraction = () => {
      handleSkip();
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchstart", handleUserInteraction, {
      passive: true,
    });
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isVisible, handleSkip]);

  useLayoutEffect(() => {
    if (!isVisible) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const fixedElements = document.querySelectorAll("header, footer");

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    fixedElements.forEach((el) => {
      (el as HTMLElement).style.paddingRight = `${scrollbarWidth}px`;
    });

    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      restoreStyles();
    };
  }, [isVisible, restoreStyles]);

  useEffect(() => {
    if (!isVisible) return;

    const ctx = gsap.context(() => {
      const targetScroll = window.innerHeight * 0.3;

      const tl = gsap.timeline({
        onComplete: () => {
          handleSkip();
        },
      });

      tl.to(mouseRef.current, { opacity: 1, duration: 0.5 })
        .to(wheelRef.current, {
          y: 12,
          opacity: 0,
          duration: 0.5,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut",
        })
        .to(mouseRef.current, { opacity: 0, duration: 0.4 })
        .to(window, {
          scrollTo: { y: targetScroll, autoKill: false },
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(window, {
          scrollTo: { y: 0, autoKill: false },
          duration: 1.0,
          ease: "power2.inOut",
          delay: 0.1,
        });
    }, overlayRef);

    return () => ctx.revert();
  }, [isVisible, handleSkip]);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="onboarding-overlay"
      onClick={handleSkip}
      style={{ cursor: "pointer" }}
    >
      <div ref={mouseRef} className="mouse-icon" style={{ opacity: 0 }}>
        <div ref={wheelRef} className="mouse-wheel" />
      </div>
      <p className="scroll-text">SCROLL TO EXPLORE</p>
    </div>
  );
};

export default ScrollOnboarding;
