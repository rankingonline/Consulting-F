document.addEventListener('DOMContentLoaded', () => {

    /* --- FAQ Accordion Logic --- */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    /* --- Smooth Scroll for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    /* --- Animated Counter Logic (40 Aniversario) --- */
    const counters = document.querySelectorAll('.count-up');
    const speed = 100; // Ajustado para ser fluido (menor numero = más lento el incremento por frame, pero ajustaremos la lógica)

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');

                // Función de animación simple
                const updateCount = () => {
                    const count = +counter.innerText;
                    // Incremento dinámico para que termine rápido
                    const inc = target / speed;

                    // Asegurar avance mínimo de 1 para números pequeños
                    const increment = inc < 1 ? 1 : Math.ceil(inc);

                    if (count < target) {
                        counter.innerText = count + increment;
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
                observer.unobserve(counter); // Solo animar una vez (desactivar observer)
            }
        });
    }, { threshold: 0.5 }); // Empezar cuando se vea el 50% del elemento

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

});
