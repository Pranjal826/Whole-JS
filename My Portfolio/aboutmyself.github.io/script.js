const cursor = document.querySelector('.cursor');
const nameSvg = document.querySelector('.name-svg');
const textElement = nameSvg.querySelector('text');
let mouseX = 0;
let mouseY = 0;

// Handle cursor movement
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Animate the text stroke and color on mouseenter
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
    nameSvg.style.opacity = 1;

    // Animation for text stroke and fill
    gsap.fromTo(
        textElement,
        { stroke: '#ff6347', strokeWidth: 0, fill: 'transparent' },
        { stroke: 'transparent', strokeWidth: 2, fill: '#ff6347', duration: 0.5, ease: 'power2.out' }
    );

    // Animation for cursor scale
    gsap.to(cursor, { scale: 1.5, duration: 0.3, ease: 'power2.out' });
});

// Reset styles on mouseleave
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
    nameSvg.style.opacity = 0;

    gsap.to(textElement, { stroke: 'transparent', strokeWidth: 0, fill: 'transparent', duration: 0.3 });
    gsap.to(cursor, { scale: 1, duration: 0.3 });
});
