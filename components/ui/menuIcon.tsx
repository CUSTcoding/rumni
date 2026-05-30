import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  trigger: boolean;
  onFinish?: () => void;
};

export default function MenuIcon({ trigger, onFinish }: Props) {
  const bar1 = useRef<SVGLineElement | null>(null);
  const bar2 = useRef<SVGLineElement | null>(null);
  const bar3 = useRef<SVGLineElement | null>(null);


    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
    if (!bar1.current || !bar2.current || !bar3.current) return;

    tl.current = gsap.timeline({ paused: true });

    tl.current
        .to(bar1.current, { opacity: 0, x: 20, duration: 0.2 })
        .to(bar2.current, { opacity: 0, x: 20, duration: 0.2 }, "+=0.05")
        .to(bar3.current, { opacity: 0, x: 20, duration: 0.2 }, "+=0.05");
    }, []);

    useEffect(() => {
    if (!tl.current) return;

    if (trigger) {
        tl.current.play().eventCallback("onComplete", () => onFinish?.());
    } else {
        tl.current.reverse();
    }
    }, [trigger, onFinish]);


  return (
    <svg
        width="34" height="24"
        viewBox="0 0 24 24"
        className="transition-transform duration-100 group-hover:rotate-90 "
    >
      <line ref={bar1} x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth={2} />
      <line ref={bar2} x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={2} />
      <line ref={bar3} x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}
