// slider 1
const heroSection = document.querySelector('.hero_section');
const heroComponents = document.querySelectorAll('.hero_components, .components_house');
const slideWidth = heroComponents[0].offsetWidth + parseInt(getComputedStyle(heroComponents[0]).marginRight);

let slideIndex = 0;

function nextSlide() {
  slideIndex++;
  heroSection.style.transform = `translateX(-${slideWidth * slideIndex}px)`;

  if (slideIndex === heroComponents.length - 1) {
    setTimeout(() => {
      heroSection.style.transition = 'none';
      heroSection.style.transform = 'translateX(0)';
      slideIndex = 0;
      setTimeout(() => {
        heroSection.style.transition = '';
      }, 10);
    }, 500);
  }
}

setInterval(nextSlide, 3000);

//фильтр и слайдер



//слайдер 3 секция 

//slider 4 


// validation
function validateForm() {
  let emailInput = document.getElementById('email');
  let email = emailInput.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false; // Відміна відправки форми
  }
  
  return true; // Відправка форми
}