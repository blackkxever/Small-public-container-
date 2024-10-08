#button-container {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    
}

@media (orientation: landscape) {
    #button-container {
        bottom: 10px;
        right: 10px;
        position: fixed;
    }
}    

        #music-button {
            width: 40px; 
            height: 40px;
            background-color: #1687EF;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;    -webkit-tap-highlight-color: transparent;
            
           q
        }

        #music-button img {
            width: 50%; 
            height: 50%;
            object-fit: contain;
        }

        #trophy-circle {
            width: 40px;
            height: 40px;
            background-color: #FFB521;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        #trophy-circle img {
            width: 50%;
            height: 50%;
            object-fit: contain;
        }

        .particle {
            position: fixed;
            width: 10px;
            height: 10px;
            background-image: url('https://i.ibb.co/FJD2vWH/estrella-1.png');
            background-size: cover;
            opacity: 0;
            pointer-events: none;
            animation: particleAnimation 1.5s ease-out forwards;
        }

        @keyframes particleAnimation {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(calc(150px * (var(--random-x))), calc(100px * (var(--random-y)))) scale(0.5);
            }
        
      #music-button {
    transition: opacity 0.5s ease-in-out;
}

.fade {
  transition: opacity 0.5s ease-in-out;
}