gsap.registerPlugin(ScrollTrigger);

const dd2 = document.querySelector('.dd2');

setTimeout(() => {
    dd2.style.opacity = "1";
}, 490)

ScrollTrigger.create({
    start : "top 80%",
    end : 99999,
    trigger : '#h2',
    toggleClass : "h2-fadeIn"
})

ScrollTrigger.create({
    start : "top 73%",
    end : 99999,
    trigger : '.pic1',
    toggleClass : "pic1-fadeIn"
})
ScrollTrigger.create({
    start : "top 70%",
    end : 99999,
    trigger : '.pic1-2',
    toggleClass : "pic1-fadeIn"
})
ScrollTrigger.create({
    start : "top 67%",
    end : 99999,
    trigger : '.pic1-3',
    toggleClass : "pic1-fadeIn"
})
ScrollTrigger.create({
    start : "top 65%",
    end : 99999,
    trigger : '.pic1-4',
    toggleClass : "pic1-fadeIn"
})
