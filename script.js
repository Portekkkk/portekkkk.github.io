document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    let isOpened = false;

    envelopeWrapper.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        envelopeWrapper.classList.add('is-open');

        if (typeof confetti === 'function') {
            setTimeout(() => {
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#c95c75', '#f1aebd', '#ffffff', '#ffd700']
                });
            }, 400);
        }

        setTimeout(() => {
            introScreen.style.opacity = '0';
            
            setTimeout(() => {
                introScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                document.body.classList.remove('locked-scroll');
                
                mainContent.style.opacity = '1';
                
                // URUCHOMIENIE ANIMACJI PRZY SCROLLU (AOS)
                AOS.init({
                    once: false, // Animacje powtarzają się przy przewijaniu góra/dół
                    offset: 50,  // Czułość pojawiania się elementów
                });
                
            }, 1000);
        }, 1200);
    });
});
