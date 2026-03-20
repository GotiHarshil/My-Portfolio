import { useEffect, useRef } from "react";

/**
 * Custom hook — adds the `.visible` class when
 * the element scrolls into the viewport.
 */
const useReveal = (threshold = 0.1) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

export default useReveal;
