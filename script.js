$(function(){
  var controller = new ScrollMagic.Controller();
  var animateElem1 = [".animate_1"];
  var left_show1 = [".left_show1"];
  var right_show1 = [".right_show1"];
  var left_show2 = [".left_show2"];
  var triggerElem1 = [".trigger_1"];

  var animateElem2 = [".animate_2"];
  var under_show1 = [".under_show1"];
  var triggerElem2 = [".trigger_2"];
  
  var animateElem3 = [".animate_3"];
  var triggerElem3 = [".trigger_3"];

  var animateElem4 = [".animate_4"];
  var triggerElem4 = [".trigger_4"];

/* =================================================================== */
  // 첫번째 페이지 효과
  var currentAnimateElem = animateElem1;
  var currentTriggerElem = triggerElem1;

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
    ease: SlowMo.ease.config(0.3, 0.7, false),
    y: 10,
  },
  {
    ease: SlowMo.ease.config(0.3, 0.7, false),
    y: -10,
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
  .to(left_show1, 3.5, {
    ease: SlowMo.ease.config(1, 1, false),
    opacity: 1,
    x: 1200
  })
  .to(right_show1, 3.5, {
    ease: SlowMo.ease.config(1, 1, false),
    opacity: 1,
    x: -1200
  })
  .to(left_show2, 3.5, {
    ease: SlowMo.ease.config(1, 1, false),
    opacity: 1,
    x: 1200
  })
  .to(currentAnimateElem, 1, {
    ease: SlowMo.ease.config(0.7, 1, false),
    opacity: 0,
  });

  timeline.add(tween_move, 0).add(tween_opacity, 0);
  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "1500px"
  })
    .setTween(timeline)
    .addTo(controller);
  
/* =================================================================== */

/* =================================================================== */
  // 두번째 페이지 효과
  var currentAnimateElem = animateElem2;
  var currentTriggerElem = triggerElem2;

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
    .to(under_show1, 3.5, {
      ease: Sine.ease,
      opacity: 1,
      y: -160
    })
    .to(currentAnimateElem, 0.3, {
        ease: SlowMo.ease.config(0.7, 1, false),
        opacity: 0,
      },
    );

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "1000px"
  })
    .setTween(timeline)
    .addTo(controller);
  
/* =================================================================== */

/* =================================================================== */
  // 세번째 페이지 효과
  var currentAnimateElem = animateElem3;
  var currentTriggerElem = triggerElem3;

  var timeline = new TimelineMax();

  var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
      ease: SlowMo.ease.config(0.1, 0.7, false),
      x: 200,
    },
    {
      ease: SlowMo.ease.config(0.1, 0.7, false),
      x: -100,
    }
  );

  var tween_opacity = new TimelineMax();
    tween_opacity.to(currentAnimateElem, 1, {
      ease: Sine.easeIn,
      opacity: 1,
      scale : 2
    })
    .to(currentAnimateElem, 2, {
      ease: Sine.easeIn,
      opacity: 0,
      scale : 1
    });

  timeline.add(tween_move, 0).add(tween_opacity, 0);

  var scene_main = new ScrollMagic.Scene({
    triggerElement: currentTriggerElem,
    duration: "900px"
  })
    .setTween(timeline)
    .addTo(controller);

/* =================================================================== */

/* =================================================================== */
  // 네번째 페이지 효과
  for (var i = 0; i < animateElem4.length; i++) {
    var currentAnimateElem = animateElem4[i];
    var currentTriggerElem = triggerElem4[i];

    var timeline = new TimelineMax();

    var tween_move = TweenMax.fromTo(currentAnimateElem, 1, {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        x: -100,
      },
      {
        ease: SlowMo.ease.config(0.7, 0.7, false),
        x: 100,
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
        "+=0.4"
      );

    timeline.add(tween_move, 0).add(tween_opacity, 0);

    var scene_main = new ScrollMagic.Scene({
      triggerElement: currentTriggerElem,
      duration: "900px"
    })
      .setTween(timeline)
      .addTo(controller);
  }
/* =================================================================== */
});
