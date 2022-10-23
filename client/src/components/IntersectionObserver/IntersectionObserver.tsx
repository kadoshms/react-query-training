import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface IntersectionObserverProps {
  onIntersect(): void;
}

export function IntersectionObserver({
  onIntersect,
}: IntersectionObserverProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 2000,
  });

  useEffect(() => {
    if (inView) {
      onIntersect();
    }
  }, [inView, onIntersect]);

  return <div ref={ref} style={{ height: 100, visibility: 'hidden' }} />
}
