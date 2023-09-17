gsap.to("#div1", {
  x: 700,
  y: 200,
  duration: 3,
  delay: 2,
  backgroundColor: "red",
  rotate: 360,
  scale: 1.5,
  yoyo: true,
  //   repeat: -1,
});

// gsap.from("#div1", {
//   x: 700,
//   y: 200,
//   duration: 3,
//   delay: 6,
//   backgroundColor: red,
// });

gsap.from(".fa-angle-down", {
  opacity: 1,
  duration: 1,
  yoyo: true,
  repeat: -1,
  scale: 1.5,
});

var ta = gsap.timeline();

ta.from(".mtext", {
  opacity: 0,
  duration: 0.8,

  right: 100,
});

ta.from(".tbtn", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});

ta.from(".img1", {
  opacity: 0,
  duration: 0.8,
  left: 1110,
});

ta.from(".img2", {
  opacity: 0,
  duration: 0.8,
  bottom: 100,
});

ta.from(".img3", {
  opacity: 0,
  duration: 0.8,
  bottom: 100,
  scale: 1.4,
});

ta.from(".mtxt2", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});

ta.from(".scroll", {
  opacity: 0,
  duration: 0.6,

  right: 100,
});
