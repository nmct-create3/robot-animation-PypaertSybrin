// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

gsap.to('#Robot', {
    duration: 2,
    ease: 'elastic.out(2.5,0.1)',
    x: 50,
  })

let tl = gsap.timeline()

tl.fromTo('#Robot',{
    y: 2.5,
  },{
    duration: .75,
    y: -2.5,
  }).to('#Shadow', {
    duration: .75,
    scale: 0.75,
  })