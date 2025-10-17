// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import gsap from "gsap";

// const ScrollHandler = ({ lenis }) => {
//   const location = useLocation();

//   useEffect(() => {
//     if (!lenis) return;

//     // Scroll to top or to anchor if id present in URL
//     const hash = window.location.hash; // e.g. #someId
//     if (hash) {
//       const el = document.querySelector(hash);
//       if (el) {
//         lenis.scrollTo(el, { offset: 0, immediate: false });
//       } else {
//         lenis.scrollTo(0);
//       }
//     } else {
//       lenis.scrollTo(0);
//     }

//     // Refresh GSAP ScrollTrigger to recalc positions
//     gsap.delayedCall(0.1, () => {
//       if (gsap.ScrollTrigger) {
//         gsap.ScrollTrigger.refresh();
//       }
//     });
//   }, [location, lenis]);

//   return null; // no UI
// };

// export default Scr