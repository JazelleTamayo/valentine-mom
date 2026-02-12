/**
 * Valentine's Day Card for Mom - Main Page
 * Creates a beautiful landing page that navigates to the secret garden
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('❤️ Valentine\'s Day card for Mom loaded! ❤️');
    
    // Initialize floating hearts background
    createFloatingHearts();
    
    // Initialize the open button
    initOpenButton();
    
    // Add mouse move effect for hearts
    initMouseEffect();
});

/**
 * Creates floating hearts in the background - VISIBLE ANIMATION
 */
function createFloatingHearts() {
    const floatingHeartsContainer = document.getElementById('floatingHearts');
    if (!floatingHeartsContainer) return;
    
    // Clear existing hearts
    floatingHeartsContainer.innerHTML = '';
    
    // Create 30 floating hearts (faster, more visible)
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        
        // Random properties - FASTER and MORE VISIBLE
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 8; // CHANGED: 15-35s → 6-14s (faster)
        const delay = Math.random() * 5; // CHANGED: 0-15s → 0-5s (less waiting)
        const size = 1 + Math.random() * 2; // CHANGED: 0.8-2.6rem → 1-3rem (bigger)
        
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.fontSize = `${size}rem`;
        
        // Random starting position
        heart.style.top = `${Math.random() * 100}%`;
        
        floatingHeartsContainer.appendChild(heart);
    }
}

/**
 * Initialize the open button to navigate to surprise page
 */
function initOpenButton() {
    const openBtn = document.getElementById('openCardBtn');
    
    if (openBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Create celebration effect
            createButtonCelebration();
            
            // Navigate to surprise page
            setTimeout(() => {
                window.location.href = 'pages/surprise.html';
            }, 500);
        });
        
        console.log('✅ Open button initialized');
    } else {
        console.error('❌ Open button not found');
    }
}

/**
 * Creates a mini celebration when button is clicked
 */
function createButtonCelebration() {
    const button = document.getElementById('openCardBtn');
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'fixed';
        heart.style.color = '#ff4d6d';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1.2rem';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.opacity = '0.8';
        
        document.body.appendChild(heart);
        
        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        const duration = 800 + Math.random() * 500;
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 0.8 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
        ], {
            duration: duration,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => {
            heart.remove();
        }, duration);
    }
}

/**
 * Mouse movement effect for hearts
 */
function initMouseEffect() {
    document.addEventListener('mousemove', function(e) {
        // Only create hearts occasionally for performance
        if (Math.random() > 0.1) return;
        
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'fixed';
        heart.style.color = 'rgba(255, 107, 139, 0.3)';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '0.8rem';
        heart.style.zIndex = '9998';
        heart.style.pointerEvents = 'none';
        
        document.body.appendChild(heart);
        
        heart.animate([
            { transform: 'translateY(0) scale(1)', opacity: 0.3 },
            { transform: 'translateY(-50px) scale(0)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
}

/**
 * Preload the surprise page for faster navigation
 */
window.addEventListener('load', function() {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'pages/surprise.html';
    document.head.appendChild(link);
});