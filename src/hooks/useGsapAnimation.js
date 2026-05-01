import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * useGsapAnimation — reusable hook for GSAP animations.
 *
 * @param {Function} animationFn - receives { gsap, ScrollTrigger, ctx } args.
 *   Use ctx.add() to scope animations and enable automatic cleanup.
 * @param {Array} deps - dependency array (like useEffect)
 *
 * Usage example:
 *   const containerRef = useGsapAnimation(({ gsap, ctx }) => {
 *     ctx.add(() => {
 *       gsap.from('.my-element', { opacity: 0, y: 30, duration: 1 });
 *     });
 *   });
 *   return <div ref={containerRef}>...</div>
 */
export function useGsapAnimation(animationFn, deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP context scopes all animations to the container,
    // and automatically reverts them on cleanup — no memory leaks.
    const ctx = gsap.context(() => {
      animationFn({ gsap, ScrollTrigger });
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
