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

    /* --- Progress Steps Animation Logic --- */
    const stepsSection = document.getElementById('beneficios-progreso');
    if (stepsSection) {
        const stepCards = stepsSection.querySelectorAll('.step-card');
        const stepsGrid = stepsSection.querySelector('.steps-grid');
        let currentStep = 0;
        let interval;

        const runProgressLoop = () => {
            // Reset visual state first
            stepCards.forEach(card => card.classList.remove('active'));
            if (stepsGrid) stepsGrid.style.setProperty('--progress-width', '0%');

            // Sequence
            let step = 0;
            const sequence = setInterval(() => {
                if (step >= 3) {
                    clearInterval(sequence);
                    // Wait a bit after full completion before resetting (loop gap)
                    setTimeout(() => {
                        runProgressLoop();
                    }, 2000);
                    return;
                }

                // Activate current step
                const card = stepCards[step];
                if (card) card.classList.add('active');

                // Update Progress Line
                // 0 -> 20%, 1 -> 60%, 2 -> 100% (logic visual)
                if (stepsGrid) {
                    const widthVal = ((step + 1) * 33);
                    stepsGrid.style.setProperty('--progress-width', `${widthVal}%`);
                }

                step++;
            }, 1000); // Time between steps activation (faster)
        };

        // Start animation when section is in view
        const stepsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    runProgressLoop();
                    stepsObserver.unobserve(entry.target); // Run loop once initiated (it handles its own repeat)
                }
            });
        }, { threshold: 0.3 });

        stepsObserver.observe(stepsSection);
    }
});
