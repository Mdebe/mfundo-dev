import { useTransform, useScroll } from "framer-motion";

export function useParallax(value = 100) {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 500], [0, -value]);
}