/**
 * Set pop culture animation
 */
export function animation() {
    const element = document.querySelectorAll('[data-animate]');
    if (element === null) return;

    const intersectionObserverScroll = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            rootMargin: '0px',
        },
    );

    element.forEach(animateElement => intersectionObserverScroll.observe(animateElement));
}
