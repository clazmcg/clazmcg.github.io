var w = window, 
    cnv, ctx, wx, wy, mx, my,
    rad = 0, 
    ud = true, 
    i = 20, no = 0;

init();
animate();

function init() {
	cnv = document.createElement('canvas'),
    wx = w.innerWidth,
    wy = w.innerHeight,
    ctx = cnv.getContext('2d');
    cnv.width = wx;
    cnv.height = wy;
    document.body.appendChild(cnv);
}

function animate() {
  	i = i < wx/1.9 ? i + 1 : 20;
  	no++;
  	window.requestAnimationFrame(animate);
		draw();
}

function draw(){ 
  if(no % 2 === 0 ){
    ctx.translate(wx/2, wy/2);
    ctx.rotate(Math.PI/240);
    ctx.translate(-wx/2, -wy/2); 
  }
  
		mx = (i*Math.sin(i)) + wx/2;
		my = (i*Math.cos(i)) + wy/2;
  	modRad = Math.random()*16;
  	rad = i;  

  // create radial gradient
      var grd = ctx.createRadialGradient(mx, my, modRad/6, mx, my, modRad);

      grd.addColorStop(0, 'rgba(255,255,255,1)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');  
  
		ctx.beginPath(); 
    ctx.fillStyle = grd;
  	ctx.arc(mx, my, modRad, 0, 3*Math.PI, false);
    ctx.fill();     
}

// facebook

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 6000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function()
c = document.getElementById 'c'
ctx = c.getContext '2d'
divider = 4
cw = c.width = window.innerWidth/divider
ch = c.height = window.innerHeight/divider
pi2 = Math.PI * 2
blips = []
initialBlips = 30
globalTick = 0
rand = (min, max) ->
  Math.floor( (Math.random() * (max - min + 1) ) + min)
  
Blip = (x, y) ->
  this.x = x
  this.y = y
  this.r = .1
  this.rGrowthBase = 1
  this.rGrowth = this.rGrowthBase
  this.rMax = (cw + ch)/7
  this.alpha = 1
    
Blip.prototype.update = (i) ->
  percent = (this.rMax - this.r) / this.rMax
  this.rGrowth = .1 + this.rGrowthBase * percent
  this.r += this.rGrowth
  this.alpha = percent
  if this.r > this.rMax
    blips.splice(i, 1)
      
Blip.prototype.render = (i) ->
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.r, 0, pi2, false)  
  ctx.fillStyle = 'hsla('+rand(globalTick - 80, globalTick + 80)+', 50%, 1%, '+this.alpha+')'
  ctx.fill()
  

clear = ->
  ctx.globalCompositeOperation = 'destination-out'
  ctx.fillStyle = 'hsla(0, 0%, 0%, .05)'
  ctx.fillRect(0, 0, cw, ch)
  ctx.globalCompositeOperation = 'lighter'
    
run = ->
  window.requestAnimationFrame(run, c)
  clear()
  i = blips.length
  blips[i].update(i) while i--
  i = blips.length
  blips[i].render(i) while i--
  blips.push(new Blip(rand(0, cw), rand(0, ch)))
  globalTick++

$(window).on('resize', ->
  cw = c.width = window.innerWidth/divider
  ch = c.height = window.innerHeight/divider
)
             
window.requestAnimationFrame ||= 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  (callback, element) ->
    window.setTimeout( ->
      callback(+new Date())
    , 1000 / 60)
          
run()          