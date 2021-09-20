$(window).bind('scroll',function(){ parallaxScroll(); } );

const color1 = new String("bff4f2");
const color2 = new String("c1a8ff");
const color3 = new String("ffb3de");

const color4 = new String("03d5c4");
const color5 = new String("9631bc");
const color6 = new String("ffd6ae");


const color1_rgb = colorHex_toRGB(color1);
const color2_rgb = colorHex_toRGB(color2);
const color3_rgb = colorHex_toRGB(color3);

const color4_rgb = colorHex_toRGB(color4);
const color5_rgb = colorHex_toRGB(color5);
const color6_rgb = colorHex_toRGB(color6);


function parallaxScroll(){
   var scrolled = $(window).scrollLeft();
   $('#layer1').css('left',0+(scrolled*0.38)+'px');
   $('.sky').css('left',0+(scrolled*0.38)+'px');
   $('#layer2').css('left',0+(scrolled*0.2)+'px');
   $('#layer4').css('left',0-(scrolled*0.38)+'px');
   $('#layer5').css('left',(0-(scrolled*0.748))+'px');

   if (scrolled < 1920 ) {
     $('.back').css('background-color', getRGB_transition(0,1920,color1_rgb,color2_rgb,scrolled));
     $('.filter').css('background-color', getRGB_transition(0,1920,color4_rgb,color5_rgb,scrolled));

   }
   else {
     $('.back').css('background-color', getRGB_transition(1920,3857,color2_rgb,color3_rgb,scrolled));
     $('.filter').css('background-color', getRGB_transition(1920,3857,color5_rgb,color6_rgb,scrolled));

   }


   $('.layer').css('filter', 'brightness('+get_eq(0,3857,1,0.3,scrolled)+')');
   $('.back').css('filter', 'brightness('+get_eq(0,3857,1,0.3,scrolled)+')');

   $('.sky').css('opacity', get_eq(0,3857,0.15,1,scrolled));

}

function colorHex_toRGB(c){
  return [parseInt(c.substr(0,2), 16),parseInt(c.substr(2,2), 16),parseInt(c.substr(4,2), 16)];
}

/**
A simple linear function calculator. outputs y of a given x following a
linear equation described by 2 points a , b
@param {int} x1 - a.x
@param {int} x2 - b.x
@param {int} y1 - a.y
@param {int} y2 - b.y
@param {int} x - x value
@return y result
*/
function get_eq(x1, x2,y1,y2 , x) {
  a = (y2-y1)/(x2-x1);
  b = y1 - (a * x1);

  y = a * x + b;
  return y;
}

/**
  Provides a transition function from color1 to color2 based on
  the a given x-range : [a , b]

  @param {int} a - starting point
  @param {int} b - ending point
  @param {array[3]} - RGB values of first color
  @param {array[3]} - RGB values of second color
  @return a string in form of " rgb ( R , G , B , 1)" with uppercase
  letters being the transition variables.
*/
function getRGB_transition(a,b,color1,color2,sc){
  res = 'rgb('
  +get_eq(a,b,color1[0],color2[0], sc )+','
  +get_eq(a,b,color1[1],color2[1], sc )+','
  +get_eq(a,b,color1[2],color2[2], sc )+',1)';

return res;
}
