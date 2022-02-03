import gsap from "gsap";

export const ceoLeftSlide1 = (refVal1) => {
  gsap.fromTo(
    refVal1.current,
    { opacity: 0, x: "-100vw" },
    { opacity: 1, x: "0vw", duration: 2, ease: "bounce" }
  );
};

export const ceoLeftSlide2 = (refVal2) => {
  gsap.fromTo(
    refVal2.current,
    { opacity: 0, x: "-100vw" },
    { opacity: 1, x: "0vw", duration: 1 }
  );
};
