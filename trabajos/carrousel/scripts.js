let slideIndex = 0; // Variable para almacenar el índice de la diapositiva actual


function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img'); // Selecciona todas las imágenes del carrusel
  
  // Oculta todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); // Remueve la clase 'active' para ocultar la imagen
  }

  slideIndex++; // Incrementa el índice de la diapositiva
  

  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }
  
  // Muestra la diapositiva actual agregando la clase 'active'
  slides[slideIndex - 1].classList.add('active'); 
  
  // Llama a la función showSlides para poner el tiempo
  setTimeout(showSlides, 2000); 
}

// Inicia la función showSlides()
showSlides();