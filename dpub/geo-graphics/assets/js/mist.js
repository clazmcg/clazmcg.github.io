  $( document ).ready(function() {
// start here    
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
  

// end here
});

