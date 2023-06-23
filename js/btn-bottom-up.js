//Кнопка bottom-up
const btnBottomUp = document.querySelector('.btn__bottom-up');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', turnBtn);
btnBottomUp.addEventListener('click', scrollPage);

let position = window.scrollY;
function turnBtn() {
   let scroll = window.scrollY;
   if (
      position > scroll ||
      Math.max(
         document.body.scrollHeight,
         document.documentElement.scrollHeight,
         document.body.offsetHeight,
         document.documentElement.offsetHeight,
         document.body.clientHeight,
         document.documentElement.clientHeight
      ) -
         Math.ceil(window.innerHeight + scroll) <=
         1
   ) {
      btnBottomUp.classList.add('btn__bottom-up_up');
      position = scroll;
   }
   if (position < scroll || scroll === 0) {
      btnBottomUp.classList.remove('btn__bottom-up_up');
      position = scroll;
   }
}

function scrollPage() {
   btnBottomUp.classList.contains('btn__bottom-up_up')
      ? header.scrollIntoView()
      : footer.scrollIntoView();
}
