document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    
    let isOpened = false;

    envelopeWrapper.addEventListener('click', () => {
        if (isOpened) return;
        isOpened = true;

        // 1. Otwieramy kopertę
        envelopeWrapper.classList.add('is-open');

        // 2. Po krótkiej chwili ukrywamy czarny ekran
        setTimeout(() => {
            introScreen.style.opacity = '0';
            
            setTimeout(() => {
                // Usuwamy z drzewa DOM
                introScreen.style.display = 'none';
                
                // Pokazujemy główny kontent i ustawiamy tło na jasne
                mainContent.classList.remove('hidden');
                document.body.style.backgroundColor = '#f8f8f8'; // Zmiana bg dla reszty okna
                
                // ODBLOKOWANIE SCROLLA!
                document.body.classList.remove('locked-scroll');
                
                // Płynne pokazanie
                mainContent.style.opacity = '1';
                
                // INICJALIZACJA AOS (Animacje przy scrollu)
                // Uruchamiamy to dopiero tutaj, żeby skrypt policzył wysokości po odkryciu sekcji
                AOS.init({
                    once: false, // animacje odpalą się za każdym razem gdy scrollujesz góra-dół
                    offset: 50,  // wjeżdża nieco szybciej
                });
                
            }, 1000);
        }, 1000);
    });
});
