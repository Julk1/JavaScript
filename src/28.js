

function simulateClick(photo, isEnlarged) {
    if (!isEnlarged) {
      photo.classList.toggle("photo-enlarge");
      isEnlarged = true;
    } else {
      photo.classList.toggle("photo-reduce");
      isEnlarged = false;
    }
    return isEnlarged;
  }
  
  
  
function scrollIntoView(event) {
    if (event.code === 'KeyA') {
      return '.summary';
    } else if (event.code === 'KeyB') {
      return '.skills1';
    } else if (event.code === 'KeyC') {
      return '.work';
    } else if (event.code === 'KeyD') {
      return '.education';
    }
  }