/* ==========================
NAVBAR SCROLL
========================== */

const navbar =
document.getElementById(
"navbar"
);

window.addEventListener(

"scroll",

()=>{

if(

window.scrollY>60

){

navbar.classList.add(
"scrolled"
);

}

else{

navbar.classList.remove(
"scrolled"
);

}

}

);





/* ==========================
HERO SLIDES
========================== */

const slides =

document.querySelectorAll(
".slide"
);

let current = 0;

function heroSlideshow(){

slides.forEach(

slide=>{

slide.classList.remove(
"active"
);

}

);

current++;

if(

current>=slides.length

){

current=0;

}

slides[
current
]

.classList.add(
"active"
);

}

setInterval(

heroSlideshow,

5000

);






/* ==========================
SECTION REVEAL
========================== */

const observer =

new IntersectionObserver(

entries=>{

entries.forEach(

entry=>{

if(

entry.isIntersecting

){

entry.target.style.opacity=
1;

entry.target.style.transform=

"translateY(0)";

}

}

);

},

{

threshold:.15

}

);



document

.querySelectorAll(
"section"
)

.forEach(

section=>{

section.style.opacity=0;

section.style.transform=

"translateY(80px)";

section.style.transition=

".9s";

observer.observe(
section
);

}

);







/* ==========================
SMOOTH SCROLL LINKS
========================== */

document

.querySelectorAll(

'a[href^="#"]'

)

.forEach(

anchor=>{

anchor.addEventListener(

"click",

function(e){

e.preventDefault();

const target=

document.querySelector(

this.getAttribute(
"href"
)

);

if(target){

target.scrollIntoView({

behavior:
"smooth"

});

}

}

);

}

);







/* ==========================
CATEGORY FILTER
========================== */

const filters =

document.querySelectorAll(
".filter"
);

const categories =

document.querySelectorAll(
".category"
);

filters.forEach(btn=>{

btn.addEventListener(

"click",

()=>{

filters.forEach(

b=>

b.classList.remove(
"active"
)

);

btn.classList.add(
"active"
);

const selected=

btn.dataset.filter;

categories.forEach(cat=>{

const title=

cat
.querySelector(
"h3"
)

.innerText
.trim();

if(

selected==="all"

||

selected===title

){

cat.style.display=
"block";

}

else{

cat.style.display=
"none";

}

});

}

);

});








/* ==========================
LIGHTBOX
========================== */

const cards =

document.querySelectorAll(
".card"
);

const lightbox =

document.querySelector(
".lightbox"
);

const preview =

document.getElementById(
"preview"
);

const close =

document.querySelector(
".close"
);



cards.forEach(card=>{

card.addEventListener(

"click",

()=>{

preview.src=

card.dataset.preview;

lightbox.style.display=

"flex";

document.body.style.overflow=

"hidden";

}

);

});



close.addEventListener(

"click",

()=>{

lightbox.style.display=

"none";

document.body.style.overflow=

"auto";

}

);



lightbox.addEventListener(

"click",

e=>{

if(

e.target===lightbox

){

lightbox.style.display=

"none";

document.body.style.overflow=

"auto";

}

}

);








/* ==========================
BUTTONS WORKING
========================== */

const showreel =

document.getElementById(
"showreelBtn"
);

if(showreel){

showreel.onclick=()=>{

document

.getElementById(
"portfolio"
)

.scrollIntoView({

behavior:
"smooth"

});

};

}



const featured =

document.getElementById(
"featuredBtn"
);

if(featured){

featured.onclick=()=>{

document

.getElementById(
"contact"
)

.scrollIntoView({

behavior:
"smooth"

});

};

}



const about =

document.getElementById(
"aboutBtn"
);

if(about){

about.onclick=()=>{

document

.getElementById(
"portfolio"
)

.scrollIntoView({

behavior:
"smooth"

});

};

}



const cta =

document.getElementById(
"ctaBtn"
);

if(cta){

cta.onclick=()=>{

document

.getElementById(
"contact"
)

.scrollIntoView({

behavior:
"smooth"

});

};

}