const menuIcon = document.querySelector('.menu-icon');
const mainMenu = document.querySelector('.main-menu');
const myLogo = document.querySelector('.mylogo');
const scroll = document.querySelector('#scrollable');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  mainMenu.classList.toggle('active');
  myLogo.classList.toggle('disappear');
});
document.querySelectorAll('.header-btn').forEach((n) => n.addEventListener('click', () => {
  menuIcon.classList.remove('active');
  mainMenu.classList.remove('active');
}));
scroll.addEventListener('wheel', preventScroll, { passive: false });
function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

// dynamic cards

const cards = [{
  id: 0,
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  img: 'attributes/workimage.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
},
{
  title: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  img: 'attributes/workimage.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
  id: 1,
  uniqueId: 'prcjt1'
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'attributes/prjct2.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
  id: 2,
  uniqueId: 'prcjt2'
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'attributes/prjct3.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
  id: 3,
  uniqueId: 'prcjt3'
},
{
  title: 'Profesional Art Printing Data More',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'attributes/workimage.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
  id: 4,
  uniqueId: 'prcjt4'
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'attributes/prjct2.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: 'See Project',
  id: 5,
  uniqueId: 'prcjt5'
},
{
  title: 'Multi-Post-Stories',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
  img: 'attributes/prjct3.png',
  tech1: 'HTML',
  tech2: 'Bootstrap',
  tech3: 'Ruby',
  btnText: ' Project',
  id: 6,
  uniqueId: 'prcjt6'
},
];

function displayCards() {
  let result = '';

  cards.filter((card) => card.id > 0).forEach((card) => {
    result += `

    <section class="project" id="${card.uniqueId}">
            <h3 class="project_descp1"}">${card.title}</h3>
            <p class="project_detail">${card.description}</p>
            <article class="lang_container_2">
                <ul style="list-style-type:none;" class="list">
                    <li id="lang1">${card.tech1}</li>
                    <li id="lang2">${card.tech2}</li>
                    <li id="lang3">${card.tech3}</li>
                </ul>
            </article>
            <button type="submit" class="checkout-button" id="projects-btn2" name="checkout-button"
                enable="disabled">${card.btnText}</button>
        </section>`;
  });
  document.querySelector('.desktop_projects').innerHTML = result;
}

displayCards();

//popup window
const btn = document.getElementsByClassName('checkout-button');
const popupWin = document.getElementById('popup-win');
cards.forEach((card) => {
  for(let i=0; i< btn.length; i += 1) {
    btn[i].addEventListener('click', () =>{
      if(i === ((card.id))) {
        popupWin.style.display= 'block';
        const show = `<div class="content-card-wrap">
        <div class="content-card">
         <div class="close-button card-x"><img src="Sources/Desktop/Icon - Cancel.png" alt="X"></div>
         <div class="cc-h-wrap">
           <h2 class="card-h">${card.title}</h2>
           <ul class="card-lang-wrapper">
             <li>${card.tech1}</li>
             <li>${card.tech2}</li>
             <li>${card.tech3}</li>
           </ul>
         </div>
         <div class="card-content">
           <div class="card-img-w">
             <img src="${card.img}" alt="card-preview" class="card-img">
           </div>
           <div class="card-cb-wrap">
             <p class="card-p">
             ${card.description}
             </p>
             <div class="card-b-wrap">
               <a class="card-link">
                 <button class="card-button">See Live<img src="Sources/Desktop/Frame.png" alt="" class="card-i"></button>
               </a>
               <a class="card-link">
                 <button class="card-button">See Source<img src="Sources/Desktop/Icon-see live.png" alt=""></button>
               </a>
             </div>
           </div>
        </div>
       </div>
       </div>`;

       popupWin.innerHTML = show;

       //close the popup
       const closePopup = document.getElementsByClassName('card-x');
       for (let j = 0; j < cardX.length; j += 1) {
        closePopup[j].addEventListener('click', () => {
           popUpWrapper.style.display = 'none';
         });
       }
      }
    })
  }
})