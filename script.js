

gsap.to(".imagepage2 img",{
    rotate:7,
    opacity:0.9,
    delay:2,
    duration: 2,
    scrollTrigger: {
        trigger:".imagepage2 img",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:5,
    }

})


gsap.from(".page3left img",{
    x:-100,
    opacity:0.4,
    scrollTrigger: {
        trigger:".page3left img",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:5,
    }
})


gsap.from(".page3right img",{
    x:100,
    opacity:0.4,
    scrollTrigger: {
        trigger:".page3right img",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:4,
    }
})

gsap.from(".page4 #w",{
    x:-50,
    stagger:2,
    opacity:0.4,
    delay:0.3,
    scrollTrigger: {
        trigger:".page4 #w",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:3,
    }
})
gsap.from(".page4 #o",{
    x:-50,
    stagger:2,
    opacity:0.4,
    delay:0.3,
    scrollTrigger: {
        trigger:".page4 #o",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:3,
    }
})
gsap.from(".page4 #r",{
    x:-50,
    stagger:2,
    opacity:0.4,
    delay:0.3,
    scrollTrigger: {
        trigger:".page4 #r",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:3,
    }
})
gsap.from(".page4 #k",{
    x:-50,
    stagger:2,
    opacity:0.4,
    delay:0.3,
    scrollTrigger: {
        trigger:".page4 #k",
        scroller:"body",
        start: "top 40%",
        end:"top 60%",
        markers:false,
        pin:true,
        scrub:3,
    }
})

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
