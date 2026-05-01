import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once at module level
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
