import { useEffect, useRef, useState } from "react";

const interactiveSelector = "a, button, input, textarea, select, label, [role='button'], [role='link'], .cursor-pointer";

export default function CursorEffect() {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      if (circleRef.current) {
        circleRef.current.style.left = `${x}px`;
        circleRef.current.style.top = `${y}px`;
      }
      setVisible(true);

      const target = event.target as Element | null;
      const isInteractive = target?.closest(interactiveSelector);
      setHovered(Boolean(isInteractive));
    };

    const hideCursor = () => setVisible(false);
    const onPointerDown = () => setHovered(true);
    const onPointerUp = () => setHovered(false);

    document.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerleave", hideCursor);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerleave", hideCursor);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className={`custom-cursor${visible ? "" : " custom-cursor--hidden"}${hovered ? " custom-cursor--hover" : ""}`}>
      <div ref={circleRef} className="custom-cursor--outer" />
    </div>
  );
}
