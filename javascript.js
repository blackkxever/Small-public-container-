<script>
    const gameNames = [
      "Flip The Knife", "Math vs Bat", "Chroma Challenge", "Basketball Legend", "Rise Higher", "Koala Sling", 
      "Stack The Pancakes", "Flip Jump", "Knife Dart", "Ant Smash", "Flick Basketball", "Don't Mess Up", 
      "Giant Rabbit Run", "City Ball Dunkin", "Flip The Bottle", "Bill The Bowman", "Tennis is War", "Sky High", 
      "Muay Thai Training", "Fill The Gap", "Oil Hunt", "Lock Master", "Drift Boss", "Snowboard Hero", "Ski Hero", 
      "Santa City Run", "Candy Christmas", "Teen Patti", "Pocket Pac", "Penalty Kick", "Knock Down Cans", "Bricked", 
      "Jewels Blocks Puzzle", "Spore Hunter", "Block Wood Puzzle", "Tripoly", "Jewel Crush", "Hop Stars", "Sky Castle", 
      "Piano Tile Reflex", "Megacity Hop", "Cam & Leon Donut Hop", "Captain Snowball", "Sheep Fight", "Spiral Stairs", "Speed Pinball",
      "Jumping Burger", "Classic Pinball", "Pro Bowling 3D", "Tic Tac Toe", "Airplane Survival", "Unicorn Blast", 
      "Jump and Splat", "Color Pipes", "Puzzle Ball", "Mango Piggy Hero", "Super Jump", "Rugby Extreme", "Ships & Monsters", 
      "2048 Dragon Island", "Leave Me Alone", "Zero Collision", "Mini Golf Adventure", "Piggy vs Bad Veggies", "Stack The Burger", 
      "Karate Chop Kick", "Santa Airlines", "Christmas Tree Fun", "Monsters and Cake", "Cross The Bridge", "Whack A Mole", 
      "Brick Breaker", "Mummy Hunter", "Flappy Unicorn", "Escape from Aztec", "Echo Simon", "Pro Cricket Champion", "Hexable", 
      "Jetpack Blast", "Count Faster!", "Duck Carnival Shoot", "Paper Planes", "Numbers Challenge", "Laddu Champion", 
      "Curiosa vs Robots", "Expert Goalkeeper", "Sushi Sensei", "Street Shooter", "Santa Chimney", "Soccer Pro", "Dinosaur Run", 
      "Alpha Space Invasion", "Catch the Tiger", "Wham-O Slide Party", "Fast Lane Racing", "Duck Hunter", "Hangman", 
      "Dodgeball Battle", "Gravity Kid", "Boat Dash", "Ice Hockey Shootout", "Pepperoni Gone Wild", "Finger Spinner", 
      "Swing Forward", "Flappy Lamp", "Trixology", "Zombie Survival", "Pro Wrestling Action"
    ]; 

  function toggleVolumeImage() {
    const volumeIcon = document.getElementById('volume-icon');
    const backgroundMusic = document.getElementById('background-music');
    
    if (volumeIcon.src === 'https://i.ibb.co/rskdnWw/volumen-3.png') {
      volumeIcon.src = 'https://i.ibb.co/BLhQHCC/barra-de-volumen.png';
      backgroundMusic.play();
    } else {
      volumeIcon.src = 'https://i.ibb.co/rskdnWw/volumen-3.png';
      backgroundMusic.pause();
    }
  }

  // Agregar un event listener para el clic en el círculo de volumen
  const volumeCircle = document.getElementById('volume-circle');
  volumeCircle.addEventListener('click', toggleVolumeImage);

let touchstartX = 0;
let touchendX = 0;Y = 0;
let touchstartY = 0;
let touchendY = 0;

function handleGesture() {
  const deltaX = touchendX - touchstartX;
  const deltaY = touchendY - touchstartY;

  // Solo ejecutar si el deslizamiento es mayor en el eje X que en el eje Y
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      toggleActive('multijugador'); // Deslizamiento hacia la izquierda
    }
    if (deltaX > 0) {
      toggleActive('para-ti'); // Deslizamiento hacia la derecha
    }
  }
}

document.addEventListener('touchstart', (event) => {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY; // Guarda la posición Y al iniciar el toque
});

document.addEventListener('touchend', (event) => {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY; // Guarda la posición Y al finalizar el toque
  handleGesture();
});

// Animación de imágenes 1882822828828383838383838383737378338383838388383838388383

// Función para aplicar eventos a las imágenes
function applyImageEvents() {
  document.querySelectorAll('img').forEach(img => {
    let pressTimer;
    let currentImg = null;

    img.addEventListener('touchstart', (event) => {
      currentImg = event.target;
      pressTimer = setTimeout(() => {
        currentImg.style.transform = 'scale(1.1)';
        // Prevenir el desplazamiento solo después de iniciar la animación
        document.body.style.overflow = 'hidden';
      }, 200);  // Esperar 5 segundos para iniciar la animación
    });

    img.addEventListener('touchend', () => {
      clearTimeout(pressTimer);
      if (currentImg) {
        currentImg.style.transform = 'scale(1)';
      }
      currentImg = null;  // Reiniciar la imagen actual después de que termine la presión
      
      // Permitir el desplazamiento
      document.body.style.overflow = '';
    });

    img.addEventListener('touchmove', (event) => {
      clearTimeout(pressTimer);
      let touchedImg = document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY);

      if (touchedImg && touchedImg.tagName === 'IMG' && touchedImg !== currentImg) {
        if (currentImg) {
          currentImg.style.transform = 'scale(1)';  // Reiniciar la imagen anterior
        }
        currentImg = touchedImg;
        currentImg.style.transform = 'scale(1.1)';  // Escalar la nueva imagen
        
        // Prevenir el desplazamiento al cambiar de imagen
        document.body.style.overflow = 'hidden';
      }
    });

    img.addEventListener('touchcancel', () => {
      clearTimeout(pressTimer);
      if (currentImg) {
        currentImg.style.transform = 'scale(1)';
      }
      currentImg = null;  // Reiniciar la imagen actual si se cancela el toque

      // Permitir el desplazamiento
      document.body.style.overflow = '';
    });
  });
}

// Aplicar eventos a las imágenes existentes
applyImageEvents();

// Configurar un MutationObserver para detectar nuevas imágenes y aplicar eventos
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      applyImageEvents();
    }
  });
});

// Iniciar la observación del documento para cambios en los nodos hijos
observer.observe(document.body, { childList: true, subtree: true });

 window.addEventListener('resize', () => {
  const activeTitle = document.querySelector('.header-title.active');
  const indicator = document.querySelector('.indicator');
  indicator.style.left = activeTitle.offsetLeft + 'px';
  indicator.style.width = activeTitle.offsetWidth + 'px';
});
    
    document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('a, img, span').forEach((element) => {
      element.style.outline = 'none';
      element.style.boxShadow = 'none';
    });
  });

    const gameGrid = document.getElementById('game-grid');

    gameNames.forEach((game, index) => {
      const promoNumber = index + 1;
      const imageUrl = `https://imgs1.e-droid.net/android-app-creator/game/promo${promoNumber}/media/graphics/promo/icons/96x96.png`;
      const linkUrl = `go:${promoNumber}`;

      const gameDiv = document.createElement('div');
      gameDiv.classList.add('flex');

      const link = document.createElement('a');
      link.href = linkUrl;

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = game;
      img.classList.add('rounded-lg');

      const span = document.createElement('span');
      span.classList.add('mt-2', 'text-center', 'font-bold', 'title');
      span.textContent = game;

      link.appendChild(img);
      link.appendChild(span);

      gameDiv.appendChild(link);
      gameGrid.appendChild(gameDiv);
    });

    function toggleActive(tab) {
      const paraTiGrid = document.getElementById('game-grid');
      const multijugadorGrid = document.getElementById('multijugador-grid');
      const paraTiTitle = document.querySelector('.header-title.para-ti');

const multijugadorTitle = document.querySelector('.header-title.multijugador');
      const indicator = document.querySelector('.indicator');

      if (tab === 'para-ti') {
        paraTiGrid.style.display = 'grid';
        multijugadorGrid.style.display = 'none';
        paraTiTitle.classList.add('active');
        multijugadorTitle.classList.remove('active');
        paraTiTitle.style.color = '#1687EF';
        multijugadorTitle.style.color = '#53636E';
        indicator.style.left = paraTiTitle.offsetLeft + 'px';
        indicator.style.width = paraTiTitle.offsetWidth + 'px';
      } else {
        paraTiGrid.style.display = 'none';
        multijugadorGrid.style.display = 'grid';
        paraTiTitle.classList.remove('active');
        multijugadorTitle.classList.add('active');
        paraTiTitle.style.color = '#53636E';
        multijugadorTitle.style.color = '#1687EF';
        indicator.style.left = multijugadorTitle.offsetLeft + 'px';
        indicator.style.width = multijugadorTitle.offsetWidth + 'px';
      }
    }

    // Initialize the indicator position
    window.onload = () => {
      const paraTiTitle = document.querySelector('.header-title.para-ti');
      const indicator = document.querySelector('.indicator');
      indicator.style.left = paraTiTitle.offsetLeft + 'px';
      indicator.style.width = paraTiTitle.offsetWidth + 'px';
    };
    
    const music = document.getElementById('background-music');

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      music.pause();
    } else {
      music.play();
    }
  });

  window.addEventListener('blur', () => {
    music.pause();
  });

  window.addEventListener('focus', () => {
    music.play();
  });
    
    function startBounceAnimation() {
  const circle = document.getElementById('volume-circle');
  circle.style.animation = 'bounce 2s ease';
  
  // Remove animation after it finishes to reset it
  setTimeout(() => {
    circle.style.animation = 'none';
  }, 2000); // 2s is the duration of the bounce animation
}

// Initial animation start
startBounceAnimation();

// Repeat animation every 15 seconds
setInterval(startBounceAnimation, 17000); // 2s animation + 15s wait

window.addEventListener('scroll', () => {
  const volumeCircle = document.getElementById('volume-circle');
  const volumeIcon = document.getElementById('volume-icon');
  
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  if (scrollPosition > 0 && scrollPosition + windowHeight < documentHeight) {
    volumeCircle.style.opacity = '0.7';
    volumeIcon.style.opacity = '0.5';
  } else {
    volumeCircle.style.opacity = '1';
    volumeIcon.style.opacity = '1';
    startBounceAnimation();
  }
});
</script>
</body>
</html>