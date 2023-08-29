var tl = gsap.timeline()

tl.from(".nav i, .nav h3, .nav h4, .nav button",{
    y: -100, 
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})
tl.from(".main h1",{
    y: 120, 
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.3
})
tl.from(".image",{
    scale: 0,
    opacity: 0,
    stagger: 0.3
})
tl.from(".sd h4",{
    scale: 0,
    opacity: 0
})
tl.to(".sd h4",{
    y: 40,
    repeat: -1,
    duration: 1,
    yoyo: true
})

