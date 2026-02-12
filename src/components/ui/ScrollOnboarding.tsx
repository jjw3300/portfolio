import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollOnboarding = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
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
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      fixedElements.forEach((el) => {
        (el as HTMLElement).style.paddingRight = "";
      });
      document.documentElement.style.scrollBehavior = "";
      document.body.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targetScroll = window.innerHeight * 0.3;

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
          const fixedElements = document.querySelectorAll("header, footer");
          fixedElements.forEach((el) => {
            (el as HTMLElement).style.paddingRight = "";
          });
          document.documentElement.style.scrollBehavior = "";
          document.body.style.scrollBehavior = "";
          setIsVisible(false);
        },
      });

      tl.to(mouseRef.current, {
        opacity: 1,
        duration: 0.5,
      })
        .to(wheelRef.current, {
          y: 12,
          opacity: 0,
          duration: 0.5,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut",
        })
        .to(mouseRef.current, {
          opacity: 0,
          duration: 0.4,
        })
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
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          pointerEvents: "none",
        });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={overlayRef} className="onboarding-overlay">
      <div ref={mouseRef} className="mouse-icon" style={{ opacity: 0 }}>
        <div ref={wheelRef} className="mouse-wheel" />
      </div>
      <p className="scroll-text">SCROLL TO EXPLORE</p>
    </div>
  );
};

export default ScrollOnboarding;
