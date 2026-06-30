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
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#c95c75', '#f1aebd', '#ffffff', '#ffd700'] // Różowe i złote
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
                
                AOS.init({
                    once: false,
                    offset: 50,
                });
            }, 1000);
        }, 1200);
    });
});
