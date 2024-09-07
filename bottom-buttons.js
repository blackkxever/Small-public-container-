const musicButton = document.getElementById('music-button');
        const bgMusic = document.getElementById('bg-music');
        let isPlaying = false;

        function toggleMusic() {
            if (isPlaying) {
                bgMusic.pause();
                musicButton.querySelector('img').src = "https://i.ibb.co/BLhQHCC/barra-de-volumen.png";
            } else {
                bgMusic.play();
                musicButton.querySelector('img').src = "https://i.ibb.co/rskdnWw/volumen-3.png";
            }
            isPlaying = !isPlaying;
        }

        musicButton.addEventListener('click', toggleMusic);

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                bgMusic.pause();
                musicButton.querySelector('img').src = "https://i.ibb.co/BLhQHCC/barra-de-volumen.png";
                isPlaying = false;
            }
        });
        
        function createParticle(x, y, direction = 'up') {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.setProperty('--random-x', Math.random() * 2 - 1);
            particle.style.setProperty('--random-y', direction === 'up' ? Math.random() * -1 : Math.random());
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            document.body.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 1500);
        }

        const trophyCircle = document.getElementById('trophy-circle');
        trophyCircle.addEventListener('click', (e) => {
            const rect = trophyCircle.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            for (let i = 0; i < 10; i++) {
                createParticle(centerX, centerY, 'up');
            }
        });

        setInterval(() => {
            const rect = trophyCircle.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 3;
            
            for (let i = 0; i < 5; i++) {
                createParticle(centerX, centerY, 'up');
            }
        }, 5000);

        function startBounceAnimation() {
            const musicButton = document.getElementById('music-button');
            musicButton.style.animation = 'bounce 2s ease';

            setTimeout(() => {
                musicButton.style.animation = 'none';
            }, 2000);
        }

        startBounceAnimation();
        setInterval(startBounceAnimation, 17000);

        window.addEventListener('scroll', () => {
    const musicButton = document.getElementById('music-button');
    const trophyCircle = document.getElementById('trophy-circle');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > 0 && scrollPosition + windowHeight < documentHeight) {
        musicButton.style.opacity = '0.7';
        trophyCircle.style.opacity = '0.7';  // Reduce opacidad para el trofeo también
    } else {
        musicButton.style.opacity = '1';
        trophyCircle.style.opacity = '1';  // Vuelve a opacidad completa
        startBounceAnimation();  // Inicia animación de salto del botón de música
        startTrophyAnimation();  // Inicia la animación automática de partículas del trofeo
    }
});

// Función para iniciar la animación automática de partículas del trofeo
function startTrophyAnimation() {
    const trophyCircle = document.getElementById('trophy-circle');
    const rect = trophyCircle.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 3;
    
    for (let i = 0; i < 5; i++) {
        createParticle(centerX, centerY, 'up');
    }
}

// Intervalo para repetir la animación automática del trofeo cada 7 segundos
setInterval(startTrophyAnimation, 7000);

// Función de animación de rebote del botón de música (ya existente)
function startBounceAnimation() {
    const musicButton = document.getElementById('music-button');
    musicButton.style.animation = 'bounce 2s ease';

    setTimeout(() => {
        musicButton.style.animation = 'none';
    }, 2000);
}

// Llama la animación inicial de rebote del botón de música y la del trofeo
startBounceAnimation();
startTrophyAnimation();

// Repite la animación de rebote del botón de música cada 17 segundos
setInterval(startBounceAnimation, 17000);