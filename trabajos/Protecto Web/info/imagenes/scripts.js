
    // se inicializa en 0 una variable
    let slideIndex = 0;

    // Se llama a la función 
    showSlides();

    // funciom para ver las imagenes
    function showSlides() {
      // Se seleccionan todas las imágenes dentro del contenedor carrusel
      const slides = document.querySelectorAll('.carousel-content img');
      
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }

      // Se incrementa el índice de la diapositiva actual
      slideIndex++;
      
      // Si el índice de la diapositiva actual es mayor que la cantidad de diapositivas, se reinicia a 1
      if (slideIndex > slides.length) { slideIndex = 1; }
      
      // Se agrega la clase 'active' a la diapositiva actual para mostrarla
      slides[slideIndex - 1].classList.add('active');

      // Se llama a la función showSlides nuevamente después de 2000 milisegundos (2 segundos)
      setTimeout(showSlides, 2000);
    }

