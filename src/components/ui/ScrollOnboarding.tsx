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
    document.documentElement.style.scrollBehavior = "auto";
    document.body.style.scrollBehavior = "auto";

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.body.style.overflow = "hidden";

      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const targetScroll = maxScroll > 0 ? maxScroll * 0.2 : window.innerHeight;

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsVisible(false);

          document.documentElement.style.scrollBehavior = "";
          document.body.style.scrollBehavior = "";
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
          duration: 0.5,
        })

        .to(window, {
          scrollTo: { y: targetScroll, autoKill: false },
          duration: 1.8,
          ease: "power2.inOut",
        })

        .to(window, {
          scrollTo: { y: 0, autoKill: false },
          duration: 1.5,
          ease: "power2.inOut",
        })

        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.8,
          pointerEvents: "none",
        });
    }, overlayRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div ref={overlayRef} className="onboarding-overlay">
      <div ref={mouseRef} className="mouse-icon">
        <div ref={wheelRef} className="mouse-wheel" />
      </div>
      <p className="scroll-text">SCROLL TO EXPLORE</p>
    </div>
  );
};

export default ScrollOnboarding;
