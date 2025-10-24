let tl = gsap.timeline();
tl.from("#left", {
  y: -50,
  duration: 0.5,
  delay: 0.3,
});
gsap.from("#center img", {
  y: -100,
  duration: 2.5,
});
tl.from("#center h5", {
  y: -50,
  duration: 0.2,
  stagger: 0.3,
});

tl.from("nav>i", {
  y: -50,
  duration: 0.2,
});
gsap.from("#line1", {
  x: -100,
  duration: 1,
});
gsap.from("#line2", {
  x: 100,
  duration: 1,
});
