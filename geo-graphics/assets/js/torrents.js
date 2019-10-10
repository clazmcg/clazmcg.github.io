var container = document.querySelector('.container');

var pulseLeft = document.querySelector('.pulseLeft');
var pulseMiddle = document.querySelector('.pulseMiddle');
var pulseRight = document.querySelector('.pulseRight');

var pulseRight = document.querySelector('.pulseRight');
var waveSVG = document.querySelector('.waveSVG');
var numItems = 8;
var beep = document.createElement('audio');
beep.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/heart_beep.mp3'

var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
TweenMax.set(container, {
    position: 'absolute',
    top: '50%',
    left: '50%',
    xPercent: -50,
    yPercent: -50
})

TweenMax.set(pulseMiddle, {
  scaleX:-1,
  transformOrigin:'50% 50%'
})
var ease = Linear.easeNone;

var mainPulseTimeline = new TimelineMax({repeat:-1});
mainPulseTimeline.timeScale(1);
for(var i = 0; i < numItems; i++){
  
  //pulse timelines
  var pulseRightClone = pulseRight.cloneNode(true);
  var pulseMiddleClone = pulseMiddle.cloneNode(true);
  var pulseLeftClone = pulseLeft.cloneNode(true);
  waveSVG.appendChild(pulseRightClone)
  waveSVG.appendChild(pulseLeftClone);  
  waveSVG.appendChild(pulseMiddleClone);  
  TweenMax.set([pulseLeftClone, pulseMiddleClone, pulseRightClone], {
    drawSVG:'-1% -1%'
  })  
  
  TweenMax.set([pulseLeftClone, pulseMiddleClone, pulseRightClone], {
    alpha:1- (i/numItems),
    filter:(isDevice || isFirefox) ? '' : 'url(#glow)'
    
  });
 
  mainPulseTimeline.add(getPulseTimeline(pulseLeftClone, pulseMiddleClone, pulseRightClone), i/(numItems*6));  
  
}

waveSVG.removeChild(pulseLeft);
waveSVG.removeChild(pulseMiddle);
waveSVG.removeChild(pulseRight);
mainPulseTimeline.addCallback(playBeep, 0.91)


function getPulseTimeline(pulseLeftClone, pulseMiddleClone, pulseRightClone){
  var pulseTimeline = new TimelineMax();
  
  pulseTimeline.to(pulseLeftClone, 0.2, {
    drawSVG:'0% 20%',
    ease:ease
  })
  .to(pulseLeftClone, 0.6, {
    drawSVG:'80% 100%',
    ease:ease
  })
  .to(pulseLeftClone, 0.2, {
    drawSVG:'100% 100%',
    ease:ease
  })

  .to(pulseMiddleClone, 0.08, {
    drawSVG:'0% 10%',
    ease:ease
  },'-=0.1')
  .to(pulseMiddleClone, 0.2, {
    drawSVG:'80% 100%',
    ease:ease
  })
  .to(pulseMiddleClone, 0.08, {
    drawSVG:'100% 100%',
    ease:ease
  })
  .to(pulseRightClone, 0.06, {
    drawSVG:'0% 20%',
    ease:ease
  },'-=0.1')
  .to(pulseRightClone, 0.6, {
    drawSVG:'80% 100%',
    ease:ease
  })
  .to(pulseRightClone, 0.2, {
    drawSVG:'100% 100%',
    ease:ease
  });
  
  return pulseTimeline;
}

function playBeep(){
  beep.play();  
}
