const photo = document.getElementById("photo");

let isEnlarged = false;

photo.addEventListener("click", function() {
  if (!isEnlarged) {
    photo.classList.toggle("photo-enlarge");
    isEnlarged = true;
  } else {
    photo.classList.toggle("photo-reduce");
    isEnlarged = false;
  }
});

const sectionHeader = document.querySelectorAll('.header');
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let letterIndex = 0;

 for (let i = 0; i < sectionHeader.length; i++) {
  const header = sectionHeader[i];
  const letter = alphabet[letterIndex % alphabet.length].toUpperCase();
  letterIndex++;
 header.innerHTML = `<span class="header-letter">${letter}</span>${header.innerHTML}`;


document.addEventListener('keydown', function(event) {
   
    if (event.code === 'KeyA') {
        const section = document.querySelector('.summary');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyB') {
        const section = document.querySelector('.skills1');
        section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyC') {
        const section = document.querySelector('.work');
       section.scrollIntoView({behavior: 'smooth'});
    } else if (event.code === 'KeyD') {
       const section = document.querySelector('.education');
       section.scrollIntoView({behavior: 'smooth'});
    }
  });
  }