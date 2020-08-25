/*
//! -----------------------------------DOM-----------------------------------

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
     console.log(document.getSelection().toString());
}, 6000);

document.write('<h2>Hola mundo en javascript</h2>')
console.clear();

//! -----------------------------------Nodos elementos y selectores-----------------------------------

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementById('menu'));
console.log(document.querySelector('#menu'));
console.log(document.querySelector('a'));
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
document.querySelectorAll('a').forEach((el) => console.log(el));
console.log(document.querySelector('.card'));
console.log(document.querySelectorAll('.card'));
console.log(document.querySelectorAll('.card')[2]);
console.log(document.querySelectorAll('#menu li'))
console.clear();

//! -----------------------------------Atributos y Data-atributes-----------------------------------

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute('lang'));

console.log(document.querySelector('.link-dom').href);
console.log(document.querySelector('.link-dom').getAttribute('href'));

document.documentElement.lang = '中文';
console.log(document.documentElement.lang);
document.documentElement.setAttribute('lang', 'es-MX');
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector('.link-dom');

$linkDOM.setAttribute('target', '_blank');
$linkDOM.setAttribute('rel', 'noopener');
$linkDOM.setAttribute('href', 'https://youtube.com/jonmircha');
console.log($linkDOM.hasAttribute('rel'));
$linkDOM.removeAttribute('rel');
console.log($linkDOM.hasAttribute('rel'));

//? --------------------Data-atributes--------------------
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset);
$linkDOM.setAttribute('data-description', 'Modelo de Objeto del documento');
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = 'Prueba';
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute('data-id'));

console.clear();

//! -----------------------------------DOM Estilos y variables-----------------------------------
//TODO const $linkDOM = document.querySelector('.link-dom');

console.log($linkDOM.style);
console.log($linkDOM.getAttribute('style'));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue('color'));

$linkDOM.style.setProperty('text-decoration', 'none');
$linkDOM.style.setProperty('display', 'block');
$linkDOM.style.width = '50%';
$linkDOM.style.textAlign = 'center'
$linkDOM.style.setProperty('margin-left', 'auto');
$linkDOM.style.setProperty('margin-right', 'auto')
$linkDOM.style.setProperty('background-color', '#F7DF1E')
$linkDOM.style.padding = '1rem';
$linkDOM.style.borderRadius = '1rem';
//? --------------------Variables CSS--------------------
const $html = document.documentElement,
     $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
     varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty('--dark-color', '#000'); //! No funciona solo lo agrega al elemento style
varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color');

$body.style.setProperty('background-color', varDarkColor);


//! -----------------------------------DOM Clases CSS-----------------------------------

const $card = document.querySelector('.card');

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains('rotate-45'));
$card.classList.add('rotate-45');
console.log($card.classList.contains('rotate-45'));
console.log($card.className);
console.log($card.classList);
$card.classList.remove('rotate-45')
console.log($card.classList.contains('rotate-45'))
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.add('rotate-45');
$card.classList.replace('rotate-45','rotate-135');
$card.classList.add('opacity-80','sepia');
$card.classList.remove('rotate-135');

console.clear();

//! -----------------------------------DOM Texto HTML-----------------------------------
const $whatIsDOM = document.querySelector('.que-es')

let text =`
     <p>
     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un
     API para documentos HTML y XML.
     </p>
     <p>
     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
     </p>
     <p>
          <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
     </p>
`
//$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

//! -----------------------------------DOM Traversing-----------------------------------
const $cards = document.querySelector('.cards');

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest('div'));
console.log($cards.closest('body'));
console.log($cards.children[3].closest('section'));
console.clear();

//! -----------------------------------DOM Creando Elementos-----------------------------------
const $figure = document.createElement('figure'),
     $img = document.createElement('img'),
     $figcaption = document.createElement('figcaption'),
     $figcaptionText = document.createTextNode('Animals'),
     $cards = document.querySelector('.cards');
     $figure2 = document.createElement('figure');

$img.setAttribute('src','https://placeimg.com/200/200/animals');
$img.setAttribute('alt','Animals');
$figure.classList.add('card')

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
     <img src="https://placeimg.com/200/200/people" alt="People">
     <figcaption>People</figcaption>
`

$figure2.classList.add('card');
$cards.appendChild($figure2);

const estaciones = ['Primavera','Verano','Otoño','Invierno'];
     $ul = document.createElement('ul');

document.write('<h3>Estaciones del año</h3>');

document.body.appendChild($ul);

estaciones.forEach(el => {
     const $li = document.createElement('li');
     $li.textContent = el;
     $ul.appendChild($li);
});

const continentes = ['Africa','América','Asia','Europa','Oceanía'],
     $ul2 = document.createElement('li');

document.write('<h3>Continentes</h3>');
document.body.appendChild($ul2);
$ul2.innerHTML = '';
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = ['Enero'
     ,'Febrero'
     ,'Marzo'
     ,'Abril'
     ,'Mayo'
     ,'Junio'
     ,'Julio'
     ,'Agosto'
     ,'Septiembre'
     ,'Octubre'
     ,'Noviembre'
     ,'Diciembre'];
const $ul3 = document.createElement('ul'),
     $fragment = document.createDocumentFragment();

meses.forEach(el => {
     const $li = document.createElement('li');
     $li.textContent = el
     $fragment.appendChild($li)
});

document.write('<h3>Meses del Año</h3>');
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/
//! -----------------------------------DOM Creando Elementos-----------------------------------
const $cards = document.querySelector('.cards'),
     $template = document.getElementById("template-card").content,
     $fragment = document.createDocumentFragment(),
     cardContent = [
          {
               title: "Tecnología",
               img: "https://placeimg.com/200/200/tech"
          },
          {
               title: "Animales",
               img: "https://placeimg.com/200/200/animals"
          },
          {
               title: "Arquitectura",
               img: "https://placeimg.com/200/200/arch"
          },
          {
               title: "Gente",
               img: "https://placeimg.com/200/200/people"
          },
          {
               title: "Naturaleza",
               img: "https://placeimg.com/200/200/nature"
          }
     ]
cardContent.forEach(el =>{
     $template.querySelector('img').setAttribute('src',el.img);
     $template.querySelector('img').setAttribute('alt',el.title);
     $template.querySelector('figcaption').textContent = el.title;

     let $clone = document.importNode($template,true);
     $fragment.appendChild($clone);
});

$cards.appendChild($fragment);