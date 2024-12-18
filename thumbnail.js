// Selecciona todos los elementos que quieres animar
  const elements = document.querySelectorAll('.game-card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Agrega la clase de animación
        observer.unobserve(entry.target); // Deja de observar el elemento una vez visible
      }
    });
  }, { threshold: 0.1 }); // Detecta cuando el 10% del elemento es visible

  // Aplica la clase "hidden" inicialmente y observa cada elemento
  elements.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
  
  // Agregar el texto del alt como superposición
    document.querySelectorAll('.game-card').forEach(card => {
      const img = card.querySelector('img');
      const altText = img.alt;
      const textOverlay = document.createElement('div');
      textOverlay.classList.add('image-text');
      textOverlay.textContent = altText;
      card.appendChild(textOverlay);
    });
    
    function toggleSearchBar() {
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.getElementById('search-icon');

    if (searchBar.classList.contains('open')) {
        // Ocultar barra de búsqueda
        searchBar.classList.remove('open');
        setTimeout(() => {
            searchBar.style.display = 'none'; // Ocultar después de la animación
        }, 400); // Duración de la animación
        searchIcon.style.display = 'flex'; // Mostrar ícono de búsqueda
    } else {
        // Mostrar barra de búsqueda
        searchBar.style.display = 'flex'; // Mostrar antes de la animación
        setTimeout(() => {
            searchBar.classList.add('open');
        }, 10); // Retraso para asegurar que display: flex se aplique antes
        searchIcon.style.display = 'none'; // Ocultar ícono de búsqueda
    }
}

        document.getElementById("custom-icon").addEventListener("click", function() {
    window.location.href = "http://action_profile";
});

document.getElementById("icon-desktop").addEventListener("click", function() {
    window.location.href = "http://action_notifications";
});

// Lista negra de juegos a ocultar
const blacklist = ["Alt"];
    
// Normaliza el texto (elimina espacios y usa minúsculas)
function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

// Filtrar juegos dinámicos
function filterDynamicImages() {
  const images = document.querySelectorAll('.game-card img');

  return Array.from(images)
    .map(img => {
      const alt = normalize(img.alt); // Normaliza el texto
      const link = img.closest('a')?.getAttribute('href') || '#'; // Obtén el enlace
      const url = https://www.marketjs.com/item/${alt}/${alt}.jpg; // Genera la URL dinámica
      return { alt, link, url };
    })
    .filter(data => !blacklist.includes(data.alt) && data.alt !== 'ludo' && data.alt !== 'Flip the knife'); // Excluye "Ludo" y los juegos bloqueados
}

// Configuración fija para "Ludo"
const ludoImage = {
  src: 'https://static.playhop.com/images/c1048_11374519_93257/af2b0988b/2a0000019360e363_d0f07c4/3b08a29fe4cd69124302_f024b2/default526x314',
  alt: 'ludo',
  link: 'go:ludo',
};

// Elementos dinámicos
const dynamicImage = document.getElementById('dynamic-image');
const dynamicLink = document.getElementById('dynamic-link');
const shineAnimation = document.getElementById('shine'); // Corregido aquí

// Cola cíclica de imágenes dinámicas
let queue = [];
let previousImages = []; // Historial de las últimas 5 imágenes mostradas
let previousIndex = -1; // Índice de la última imagen mostrada

// Función para inicializar la cola
function initializeQueue() {
  queue = filterDynamicImages();
}

// Función para verificar si la imagen existe
function checkImage(url, callback) {
  var img = new Image();
  img.onload = function() {
    callback(true); // La imagen existe
  };
  img.onerror = function() {
    callback(false); // La imagen no existe
  };
  img.src = url; // La URL de la imagen
}

// Función para actualizar la imagen
function updateImage() {
  // Asegúrate de tener imágenes en la cola
  if (queue.length === 0) {
    initializeQueue(); // Reinicia la cola si está vacía
  }

  let selectedImage;

  if (queue.length === 0 || previousImages.length === 5) {
    // Si no hay dinámicas o después de 5 imágenes, usa "Ludo"
    selectedImage = ludoImage;
    previousImages = []; // Reinicia el historial
  } else {
    // Seleccionar una imagen aleatoria distinta a las últimas 5
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * queue.length);
    } while (previousImages.includes(randomIndex));
    previousIndex = randomIndex;

    selectedImage = queue[randomIndex];
    previousImages.push(randomIndex);

    // Limitar el historial a las últimas 5 imágenes
    if (previousImages.length > 5) {
      previousImages.shift();
    }
  }

  // Verificar si la imagen existe antes de mostrarla
  checkImage(selectedImage.url, function(existe) {
    if (existe) {
      // Iniciar animación "shine"
      shineAnimation.classList.add('active');

      // Cambiar la imagen después de completar la animación
      setTimeout(() => {
        dynamicImage.src = selectedImage.src || selectedImage.url;
        dynamicImage.alt = selectedImage.alt;
        dynamicLink.href = selectedImage.link;

        // Finalizar la animación "shine"
        shineAnimation.classList.remove('active');
      }, 1000); // El tiempo coincide con la duración de la animación
    } else {
      // Si la imagen no existe, intenta con otra o muestra una predeterminada
      console.log('La imagen no existe, se seleccionará otra.');
      updateImage(); // Vuelve a intentar con otra imagen
    }
  });
}

// Inicialización: muestra "Ludo" como la imagen inicial
document.addEventListener('DOMContentLoaded', () => {
  dynamicImage.src = ludoImage.src;
  dynamicImage.alt = ludoImage.alt;
  dynamicLink.href = ludoImage.link;

  // Inicializa la cola de imágenes dinámicas
  initializeQueue();

  // Comienza el ciclo dinámico después de cargar
  setInterval(updateImage, 5000); // Cambia cada 5 segundos
});
</script>
