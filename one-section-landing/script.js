document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor-glow');
    const heroContent = document.querySelector('.hero-content');
    
    // Custom Cursor Movement
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        
        // Update glow position
        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        
        // Subtle Parallax Effect for Hero Content
        const xOffset = (window.innerWidth / 2 - clientX) / 50;
        const yOffset = (window.innerHeight / 2 - clientY) / 50;
        
        heroContent.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });

    // Button Hover Interaction
    const ctaBtn = document.getElementById('cta-btn');
    ctaBtn.addEventListener('mouseenter', () => {
        cursor.style.width = '800px';
        cursor.style.height = '800px';
        cursor.style.background = 'radial-gradient(circle, rgba(187, 134, 252, 0.25) 0%, rgba(3, 218, 198, 0.1) 50%, transparent 70%)';
    });
    
    ctaBtn.addEventListener('mouseleave', () => {
        cursor.style.width = '600px';
        cursor.style.height = '600px';
        cursor.style.background = 'radial-gradient(circle, rgba(187, 134, 252, 0.15) 0%, rgba(3, 218, 198, 0.05) 50%, transparent 70%)';
    });
});
