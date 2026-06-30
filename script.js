document.addEventListener('DOMContentLoaded', () => {
    // Pobieranie referencji do elementów DOM
    const envelopeWrapper = document.getElementById('envelope');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    // Zabezpieczenie (zapobiega wielokrotnemu kliknięciu podczas animacji)
    let isOpened = false;

    envelopeWrapper.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        // 1. Dodajemy klasę, która w CSS uruchamia otwieranie koperty i wysuwanie listu
        envelopeWrapper.classList.add('is-open');

        // 2. Wystrzał konfetti! Używamy setTimeout, aby zsynchronizować to z wysunięciem listu
        if (typeof confetti === 'function') {
            setTimeout(() => {
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#c95c75', '#f1aebd', '#ffffff', '#fce4e9'] // Kolory zgrane z paletą
                });
            }, 400); // 400ms - list jest w połowie drogi
        }

        // 3. Zarządzanie przejściem ekranów (Fade-out intro, Fade-in main)
        setTimeout(() => {
            // A. Płynne wyciemnienie intra
            introScreen.style.opacity = '0';
            introScreen.style.visibility = 'hidden'; 
            
            setTimeout(() => {
                // B. Całkowite ukrycie intra z drzewa DOM (optymalizacja)
                introScreen.style.display = 'none';
                
                // C. Pokazanie struktury głównego contentu
                mainContent.classList.remove('hidden');
                
                // D. Hack wymuszający "reflow" przeglądarki, żeby animacja z opacity zadziałała
                void mainContent.offsetWidth; 
                
                // E. Animacja wjazdu zaproszenia
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
                
            }, 800); // Czas trwania animacji CSS opacity dla intro-screen

        }, 1800); // Tyle czasu użytkownik podziwia otwarty list i konfetti przed zmianą ekranu
    });
});
