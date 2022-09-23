$(function(){
  var controller = new ScrollMagic.Controller();
  var animateElem1 = [".animate_1"];
  var left_show1 = [".left_show1"];
  var right_show1 = [".right_show1"];
  var left_show2 = [".left_show2"];
  var triggerElem1 = [".trigger_1"];

  var animateElem2 = [".animate_2"];
  var under_show1 = [".under_show1"];
  var under_show2 = [".under_show2"];
  var triggerElem2 = [".trigger_2"];
  
  var animateElem3 = [".animate_3"];
  var fade_show1 = [".fade_show1"];
  var fade_show2 = [".fade_show2"];
  var fade_show3 = [".fade_show3"];
  var triggerElem3 = [".trigger_3"];

  var animateElem4 = [".animate_4"];
  var triggerElem4 = [".trigger_4"];

/* =================================================================== */
  // 첫번째 페이지 효과
  for (var i = 0; i < animateElem1.length; i++) {
    var currentAnimateElem = animateElem1[i];
    var currentTriggerElem = triggerElem1[i];

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
      ease: SlowMo.ease.config(0.3, 0.7, false),
      y: 1,
    },
    {
      ease: SlowMo.ease.config(0.3, 0.7, false),
      y: -1,
    });

    var tween_opacity = new TimelineMax();
    tween_opacity.to(currentAnimateElem, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 1
    })
    .to(left_show1, 1, {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      opacity: 0,
    })
    .to(right_show1, 1, {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      opacity: 0,
    })
    .to(left_show2, 1, {
      ease: SlowMo.ease.config(0.7, 0.7, false),
      opacity: 0,
    })
    .add('start')
    .to(left_show1, 3.5, {
      ease: SlowMo.ease.config(1, 1, false),
      opacity: 1,
      x: 100

    })
    .to(right_show1, 3.5, {
      ease: SlowMo.ease.config(1, 1, false),
      opacity: 1,
      x : -100

    }, 'start')
    .to(left_show2, 3.5, {
      ease: SlowMo.ease.config(1, 1, false),
      opacity: 1,

    }, 'start')
    .to(currentAnimateElem, 1, {
      ease: SlowMo.ease.config(0.7, 1, false),
      opacity: 0,
    },
  );

    timeline.add(tween_move, 0).add(tween_opacity, 0);
    var scene_main = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "1500px"
    })
      .setTween(timeline)
      .addTo(controller);
  }
/* =================================================================== */

/* =================================================================== */
  // 두번째 페이지 효과
  for (var i = 0; i < animateElem2.length; i++) {
    var currentAnimateElem = animateElem2[i];
    var currentTriggerElem = triggerElem2[i];

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
        ease: SlowMo.ease.config(0.3, 0.7, false),
        y: 10,
      },
      {
        ease: SlowMo.ease.config(0.3, 0.7, false),
        y: -10,
      }
    );

    var tween_opacity = new TimelineMax();
      tween_opacity.to(currentAnimateElem, 0.3, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 1,
      })
      .to(under_show1, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 0,
      })
      .to(under_show2, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 0,
      })
      .to(under_show1, 3.5, {
        ease: Sine.ease,
        opacity: 1,
        y: -160
      })
      .to(under_show2, 5, {
        ease: Sine.ease,
        opacity: 1,
        y: -160
      })
      .to(currentAnimateElem, 5, {
          ease: SlowMo.ease.config(0.1, 1, false),
          opacity: 0,
        },
      );

    timeline.add(tween_move, 0).add(tween_opacity, 0);

    var scene_main = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "1200px"
    })
      .setTween(timeline)
      .addTo(controller);
  }
/* =================================================================== */

/* =================================================================== */
  // 세번째 페이지 효과
  for (var i = 0; i < animateElem3.length; i++) {
    var currentAnimateElem = animateElem3[i];
    var currentTriggerElem = triggerElem3[i];

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y : 0
      },
      {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y : 0
      }
    );

    var tween_opacity = new TimelineMax();
    tween_opacity
      .to(currentAnimateElem, 3, {
        ease: Circ.easeOut,
        opacity: 0,
      })
      .to(fade_show1, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 0,
      })
      .to(fade_show2, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 0,
      })
      .to(fade_show3, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 0,
      })
      .to(currentAnimateElem, 6, {
        ease: Circ.easeOut,
        opacity: 1,
      })
      .to(fade_show1, 4, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 1,
      })
      .to(fade_show2, 4, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 1,
      })
      .to(fade_show3, 4, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        opacity: 1,
      })
      .to(currentAnimateElem, 3, {
        ease: Circ.easeOut,
        opacity: 0,
      });

    timeline.add(tween_move, 0).add(tween_opacity, 0);

    var scene_main = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "1500px"
    })
      .setTween(timeline)
      .addTo(controller);
  }
/* =================================================================== */

/* =================================================================== */
  // 네번째 페이지 효과
  for (var i = 0; i < animateElem4.length; i++) {
    var currentAnimateElem = animateElem4[i];
    var currentTriggerElem = triggerElem4[i];

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y: 10,
      },
      {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        y: -10,
      }
    );

    var tween_opacity = new TimelineMax();
    tween_opacity
      .to(currentAnimateElem, 0.3, {
        ease: Linear.easeNone,
        opacity: 1
      })
      .to(currentAnimateElem, 0.3, {
          ease: Linear.easeNone,
          opacity: 0
        },
      );

    timeline.add(tween_move, 0).add(tween_opacity, 0);

    var scene_main = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "1500px"
    })
      .setTween(timeline)
      .addTo(controller);
  }
/* =================================================================== */

/* =================================================================== */
// 돌아가는 원
  const html = document.querySelector("html");

  const target = document.querySelector(".circle_svg");
  let center = {
      x : target.getBoundingClientRect().left + (target.clientWidth/2),
      y : target.getBoundingClientRect().top + (target.clientHeight/2)
  }

  window.addEventListener('resize', ()=>{
      center = {
          x : target.getBoundingClientRect().left + (target.clientWidth/2),
          y : target.getBoundingClientRect().top + (target.clientHeight/2)
      }
  })

  html.addEventListener('mousemove', (e)=>{
      
      const x = center.x - e.clientX;
      const y = center.y - e.clientY;
      
      const radian = Math.atan2(y, x);
      const degree = (radian * 180 / Math.PI).toFixed(0);
      // info.innerHTML = 'mouse(x/y) : ' + e.clientX + '/' + e.clientY + '<br>target : rotate ' + degree + 'deg';
      target.style.transform = 'translate(-50%, -50%) rotate(' + degree + 'deg)';

  });
/* =================================================================== */

  // swiper
  var length = $(".sec2 .swiper-slide").length;
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: false,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function(){        
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
        // if(this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
        // if(length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
        console.log('즉시 : ' + idx);
      },  
      slideChangeTransitionEnd: function(){
        var idx = this.activeIndex;
        // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
        // if(idx == 0 || idx >= length-1) $.fn.fullpage.setAllowScrolling(true);
        console.log('전환후 : ' + idx);     
      },
      touchMove: function(e) {        
        var startY = e.touches.startY;
        setTimeout(function(){
          if(startY > e.touches.currentY) swiper.slideNext();  
          else swiper.slidePrev();
        },100);        
      },
    }, 
  });            
});