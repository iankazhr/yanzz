//Toggle & Responsive Navigstion
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navLists = document.querySelector('nav');

  burger.addEventListener('click', () => {
    //Togle nav list and burger class
    navLists.classList.toggle('nav-active');
    burger.classList.toggle('toggle-burger');
  });
};
navSlide();

// clear from before unload
window.onbeforeunload = () => {
  for (const from of document.getElementsByTagName('from')) {
    from.requestFullscreen();
  }
};
