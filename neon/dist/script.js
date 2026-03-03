jk1 = ['J','e','s','p','e','r'];
jk2 = ['K','r','o','n'];
jk3 = ['h','o','l','m'];
jk = ['<span class="first">'];
for (i = 0; i < jk1.length; i++) {
	jk.push('<span class="out">'+jk1[i]+'</span>');
}
jk.push('</span><!-- br --><span class="sec">');
for (i = 0; i < jk2.length; i++) {
	jk.push('<span class="out">'+jk2[i]+'</span>');
}
jk.push('</span><!-- br --><span class="third">');
for (i = 0; i < jk3.length; i++) {
	jk.push('<span class="out">'+jk3[i]+'</span>');
}
jk.push('</span>');
jk = jk.join('');
title = 'Graphic Designer &bull; Web Developer';
copy = '<span class="copyright"><a class="icon" href="http://jesperkronholm.se" target="_blank">&copy; Jesper Kronholm 2018</a></span>';

li = '<a class="icon" href="https://www.linkedin.com/in/jesperkronholm/" target="_blank">LinkedIn</a>';
$('article').html('<h1>'+jk+'</h1><h2>'+title+'</h2><span class="tag">'+copy+' | '+li+'</span>');

R = Math.floor(Math.random() * 255) + 1;
G = Math.floor(Math.random() * 255) + 1;
B = Math.floor(Math.random() * 255) + 1;

R2 = Math.floor(Math.random() * 255) + 1;
G2 = Math.floor(Math.random() * 255) + 1;
B2 = Math.floor(Math.random() * 255) + 1;

RGBvals = [R,G,B,'1'];
RGBvals = ['255','50','200','1'];

neonColor = 'rgba('+RGBvals[0]+','+RGBvals[1]+','+RGBvals[2]+','+RGBvals[3]+')';
neonOut = 'rgba('+(RGBvals[0]/5)+','+(RGBvals[1]/5)+','+(RGBvals[2]/5)+','+RGBvals[3]+')';
neonShadow = 'rgba('+RGBvals[0]+','+RGBvals[1]+','+RGBvals[2]+','+(RGBvals[3]*.9)+')';

RGBvals2 = ['40','170','255','1'];
neonColor2 = 'rgba('+RGBvals2[0]+','+RGBvals2[1]+','+RGBvals2[2]+','+RGBvals2[3]+')';
neonOut2 = 'rgba('+(RGBvals2[0]/5)+','+(RGBvals2[1]/5)+','+(RGBvals2[2]/5)+','+RGBvals2[3]+')';
neonShadow2 = 'rgba('+RGBvals2[0]+','+RGBvals2[1]+','+RGBvals2[2]+','+(RGBvals2[3]*.9)+')';

RGBvals3 = ['40','170','255','1'];
neonColor3 = 'rgba('+RGBvals3[0]+','+RGBvals3[1]+','+RGBvals3[2]+','+RGBvals3[3]+')';
neonOut3 = 'rgba('+(RGBvals3[0]/5)+','+(RGBvals3[1]/5)+','+(RGBvals3[2]/5)+','+RGBvals3[3]+')';
neonShadow3 = 'rgba('+RGBvals3[0]+','+RGBvals3[1]+','+RGBvals3[2]+','+(RGBvals3[3]*.9)+')';

neonOutShadow = 'rgba(0,0,0,1)';

winW = window.innerWidth;
winH = window.innerHeight;
if (winW > winH) {
	h1px = winH/5;
	articlePadding = winH/8;
}
else {
	h1px = winW/5;
	articlePadding = winH/2-h1px*2;
	console.log(winH/2-h1px*2);
}
lightSpill = h1px/5;
shadowSpill = h1px/12;
// h1px = h1px*100;
// h1px = 135;

function isOdd(num) { return num % 2;}

percent = [0,5,10,17,23,25,30,40,43,50,55,68,72,75,80,83,90,95,100];
		// i o i  o  i  o  i  o  i  o  i  o  i  o  i  o  i  o  i
flickrCSS = ['@-webkit-keyframes turnOnFirst {'];
function aniPercent(colorOut,colorOutShadow,colorIn,colorInShadow) {
	flikrOut = 'color:'+colorOut+'; text-shadow:0px 0px '+shadowSpill+'px '+colorOutShadow;
	flikrIn = 'color:'+colorIn+'; text-shadow:0px 0px '+lightSpill+'px '+colorInShadow;
	for (i = 0; i < percent.length; i++) {
		if (isOdd(i)) { flickrCSS.push(percent[i]+'%{'+flikrOut+';}'); }
		else { flickrCSS.push(percent[i]+'%{'+flikrIn+';}'); }
	}
}
aniPercent(neonOut,neonOutShadow,neonColor,neonShadow);
flickrCSS.push('}@keyframes turnOnFirst {');
aniPercent(neonOut,neonOutShadow,neonColor,neonShadow);
flickrCSS.push('}');

flickrCSS.push('@-webkit-keyframes turnOnSecond {');
aniPercent(neonOut2,neonOutShadow,neonColor2,neonShadow2);
flickrCSS.push('}@keyframes turnOnSecond {');
aniPercent(neonOut2,neonOutShadow,neonColor2,neonShadow2);
flickrCSS.push('}');


noOfTimes = 1;
aniLength = 4;
flickrCSS.push('h1 .flicker {-webkit-animation: turnOnFirst '+aniLength+'s; animation: turnOnFirst '+aniLength+'s; -webkit-animation-iteration-count: '+noOfTimes+'; animation-iteration-count: '+noOfTimes+';}');
flickrCSS.push('h1 .sec .flicker, h1 .third .flicker {-webkit-animation: turnOnSecond '+aniLength+'s; animation: turnOnSecond '+aniLength+'s; -webkit-animation-iteration-count: '+noOfTimes+'; animation-iteration-count: '+noOfTimes+';}');
flickrCSS = flickrCSS.join('');


CSS = '<style>';
CSS = CSS+'h1 {font-size:'+h1px+'px; line-height:'+(h1px-5)+'px;}';
CSS = CSS+'h1 .out {color:'+neonOut+'; text-shadow:0px 0px '+shadowSpill+'px '+neonOutShadow+';}';
CSS = CSS+'h1 .on, h1 .flicker {color:'+neonColor+'; text-shadow:0px 0px '+lightSpill+'px '+neonShadow+';}';
CSS = CSS+'h1 .sec .out {color:'+neonOut2+';}';
CSS = CSS+'h1 .sec .on, h1 .sec .flicker {color:'+neonColor2+'; text-shadow:0px 0px '+lightSpill+'px '+neonShadow2+';}';
CSS = CSS+'h1 .third .out {color:'+neonOut3+';}';
CSS = CSS+'h1 .third .on, h1 .third .flicker {color:'+neonColor3+'; text-shadow:0px 0px '+lightSpill+'px '+neonShadow3+';}';
CSS = CSS+'h1 .first, h1 .sec, h1 .third {display:block;}';
CSS = CSS+'h1 .sec, h1 .third {font-size:'+(h1px*1.23)+'px;line-height:'+(h1px-5)*1.23+'px;}';
CSS = CSS+'h1 .third {letter-spacing:'+(h1px/19.28)+'px;margin-left:'+(h1px/19.28)+'px;}';
CSS = CSS+'h1 .on, h1 .out { transition: all 1s ease-out;}';
CSS = CSS+'h2 {font-size: '+(h1px/7)+'px; letter-spacing: '+(h1px/21)+'px; margin-left: '+(h1px/21)+'px;}';
CSS = CSS+'article { padding-top: '+articlePadding+'px; }';
CSS = CSS+'article { padding-top: '+articlePadding+'px; }';
CSS = CSS+'.tag {font-size: '+(h1px/4)+'px; bottom: '+(h1px/4)+'px; right: '+(h1px/10)+'px; left: '+(h1px/10)+'px;}';

CSS = CSS+flickrCSS;
CSS = CSS+'</style>';
document.write(CSS);



var allOuts = document.getElementsByClassName('out');

jkIndex = [];
for (i = 0; i < allOuts.length; i++) {
	jkIndex.push(i);
}
function flickerLights() {
	var allLit = document.getElementsByClassName('lit');
	rLight = Math.floor(Math.random() * allLit.length) + 1;
	rLight = rLight-1;
	rTime = Math.floor(Math.random() * 1500) + 500;
	rTime2 = Math.floor(Math.random() * 5000) + 1;
	if (!$(allLit[rLight]).hasClass('lightFlicker')) {
		$(allLit[rLight]).addClass('lightFlicker');
		setTimeout(function() {
			$(allLit[rLight]).removeClass('lightFlicker');
		}, rTime); 
	}
	setTimeout(function() {
		flickerLights();
	}, rTime2); 
}
function turnOnLights() {
	rLight = Math.floor(Math.random() * jkIndex.length) + 1;
	rLight = rLight-1;
	rFlicker = Math.floor(Math.random() * 10) + 1;
	// $(allOuts[rLight]).toggleClass('out').toggleClass('on');
	if (rFlicker == 1) {
		$(allOuts[rLight]).toggleClass('lit').toggleClass('flicker').toggleClass('out');
		console.log('flicker');
	}
	else $(allOuts[rLight]).toggleClass('lit').toggleClass('on').toggleClass('out');
	jkIndex.splice(rLight, 1);

	rTime = Math.floor(Math.random() * 400) + 1;

	if (jkIndex.length > 0) {
		setTimeout(function() {
			turnOnLights();
		}, rTime); 
		console.log(jkIndex);
	}
	else {
		flickerLights();
		console.log('all on');
	}
}
setTimeout(function() {
	turnOnLights();
}, 500); 
$(document).on('click', '.flicker', function () {
	$(this).toggleClass('on').toggleClass('flicker');
});