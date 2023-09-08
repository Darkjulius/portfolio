const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-gauche");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
    ligne.classList.toggle("active")
    nav.classList.toggle("menu-visible")
})

if(window.matchMedia("(max-width: 1300px)")){
    allItemNav.forEach(item =>{
        item.addEventListener("click", () =>{
            nav.classList.toggle("menu-visible")
            ligne.classList.toggle("active")
        })
    })
}

//ANIMATION ECRITURE
const txtAnim = document.querySelector(".txt-animation");
let typewriter = new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})
typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString("Moi, c'est Brice THIBAULT")
.pauseFor(300)
.typeString("<strong>, Développeur Web</strong> !")
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #27ae60"> CSS</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: midnightblue"> Vue.js</span> !')
.start()

/**
 * ANIMATION CONTACT
 * Si j'écris dans les input, je peux cliquer ailleurs sur la page. L'input n'écrasera pas le label donc ce que j'écris dans le formulaire !!!
 */
const input_fields = document.querySelectorAll("input");
for(let input = 0; input < input_fields.length; input++){
    let field = input_fields[input];
    field.addEventListener("input", (evenement) => {
        if(evenement.target.value !== ""){
            evenement.target.parentNode.classList.add("animation")
        }else if(evenement.target.value == ""){
            evenement.target.parentNode.classList.remove("animation")
        }
    })
}

/**
 * Anim GSAP + ScrollMagic
 */

//Affichage de la barre de navigation au chargement de la page car dans le CSS -> left: -300px.
//La logique est pareil pour les autres constantes.
const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btn-rond')


const TL1 = gsap.timeline({paused: true});

TL1 
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease: Power3.easeOut, duration: 0.4}, '-=1')

window.addEventListener('load', () => {
    TL1.play();
})

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche')
const listePres = document.querySelectorAll('.item-liste')

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
// .addIndicators()
.addTo(controller)

// Anim portfolio

const portfolioContainer = document.querySelector('.portfolio')
const titrePortfolio = document.querySelector('.titre-port')
const itemPortfolio = document.querySelectorAll('.vague1')

const tlPortfolio = new TimelineMax();

tlPortfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5')

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlPortfolio)
// .addIndicators()
.addTo(controller)


// Vague 2 

const itemPortfolio2 = document.querySelectorAll('.vague2')

const tlPortfolio2 = new TimelineMax();

tlPortfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5')

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio2)
// .addIndicators()
.addTo(controller)


// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3')

const tlPortfolio3 = new TimelineMax();

tlPortfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5')

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(tlPortfolio3)
// .addIndicators()
.addTo(controller)


// Animation range

const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill')
const allPourcent = document.querySelectorAll('.number-skill')
const allBarres = document.querySelectorAll('.barre-skill')
const allShadowBarres = document.querySelectorAll('.barre-grises')

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);
