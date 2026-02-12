/**
 * Valentine's Secret Garden - For Mom
 * Interactive garden with pre-set images of Mom
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 Mom\'s Secret Garden is blooming! 🌸');
    
    // Initialize all features
    initNavigation();
    initMagicalFlower();
    initPreSetImages();
    initMemoryNavigation();
    initSendButton();
    createPetalRain();
    initFrameDecorations();
    checkAndLoadImages();
});

/**
 * Navigation between pages
 */
function initNavigation() {
    const backBtn = document.getElementById('backToHomeBtn');
    
    if (backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Navigate back home
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 300);
        });
        
        console.log('✅ Navigation initialized');
    }
}

/**
 * Check and load all pre-set images
 */
function checkAndLoadImages() {
    const imageIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
    const imageNames = ['1stpic.jpg', '2ndpic.jpg', '3rdpic.jpg', '4thpic.jpg', '5thpic.jpg', '6thpic.jpg'];
    
    imageIds.forEach((id, index) => {
        const img = document.getElementById(id);
        if (img) {
            // Check if image loads successfully
            img.onload = function() {
                console.log(`✅ ${imageNames[index]} loaded successfully`);
                addHeartToLoadedImage(img);
            };
            
            img.onerror = function() {
                console.warn(`⚠️ ${imageNames[index]} not found - using placeholder`);
                // Create placeholder with mom theme
                createImagePlaceholder(img, index + 1);
            };
        }
    });
}

/**
 * Add floating heart to loaded image
 */
function addHeartToLoadedImage(img) {
    const photoFrame = img.closest('.photo-frame');
    if (photoFrame) {
        // Add subtle heart animation
        setInterval(() => {
            if (photoFrame.matches(':hover')) {
                const heart = document.createElement('i');
                heart.className = 'fas fa-heart';
                heart.style.position = 'absolute';
                heart.style.color = 'rgba(255, 255, 255, 0.8)';
                heart.style.left = Math.random() * 80 + 10 + '%';
                heart.style.top = Math.random() * 80 + 10 + '%';
                heart.style.fontSize = '1rem';
                heart.style.zIndex = '25';
                heart.style.pointerEvents = 'none';
                heart.style.animation = 'floatUp 2s ease-out';
                
                photoFrame.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 2000);
            }
        }, 1000);
    }
}

/**
 * Create placeholder if image not found
 */
function createImagePlaceholder(img, memoryNumber) {
    const photoContainer = img.closest('.photo-container');
    if (photoContainer) {
        // Hide the broken image icon
        img.style.display = 'none';
        
        // Create placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'memory-placeholder';
        placeholder.innerHTML = `
            <div class="placeholder-content">
                <i class="fas fa-heart-circle"></i>
                <h3>Memory ${memoryNumber}</h3>
                <p>Mom's beautiful moment</p>
                <span class="placeholder-hint">❤️ Love you, Mom ❤️</span>
            </div>
        `;
        
        // Style the placeholder
        placeholder.style.width = '100%';
        placeholder.style.height = '100%';
        placeholder.style.background = 'linear-gradient(145deg, #ffb3c6, #ff8eae)';
        placeholder.style.display = 'flex';
        placeholder.style.justifyContent = 'center';
        placeholder.style.alignItems = 'center';
        placeholder.style.flexDirection = 'column';
        placeholder.style.color = 'white';
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '20px';
        
        photoContainer.appendChild(placeholder);
        
        console.log(`🌸 Placeholder created for memory ${memoryNumber}`);
    }
}

/**
 * Initialize pre-set images with animations
 */
function initPreSetImages() {
    const photoFrames = document.querySelectorAll('.photo-frame');
    
    photoFrames.forEach((frame, index) => {
        // Add entrance animation
        frame.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
        
        // Add click effect on photos
        const photoContainer = frame.querySelector('.photo-container');
        if (photoContainer) {
            photoContainer.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create heart burst effect
                createHeartBurst(this);
                
                // Highlight the memory dot
                const memoryNumber = frame.dataset.memory;
                highlightMemoryDot(memoryNumber);
                
                // Show memory caption
                showMemoryMessage(memoryNumber);
            });
        }
    });
    
    console.log('✅ Pre-set images initialized');
}

/**
 * Create heart burst effect when clicking on photo
 */
function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'fixed';
        heart.style.color = '#ff4d6d';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1.2rem';
        heart.style.zIndex = '10000';
        heart.style.pointerEvents = 'none';
        heart.style.filter = 'drop-shadow(0 0 5px rgba(255,77,109,0.5))';
        
        document.body.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 100;
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

/**
 * Show memory message when photo is clicked
 */
function showMemoryMessage(memoryNumber) {
    const messages = {
        1: "The most beautiful smile in the world! ❤️",
        2: "Your love has shaped my life 🌹",
        3: "Every moment with you is precious 💝",
        4: "Thank you for always being there 🌸",
        5: "Your strength inspires me every day 💪",
        6: "My forever Valentine, Mom! 🌟"
    };
    
    const message = messages[memoryNumber] || "Love you, Mom! ❤️";
    
    // Create toast message
    const toast = document.createElement('div');
    toast.className = 'memory-toast';
    toast.innerHTML = `
        <i class="fas fa-heart"></i>
        <span>${message}</span>
        <i class="fas fa-heart"></i>
    `;
    
    // Style toast
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'linear-gradient(145deg, #ff4d6d, #c9184a)';
    toast.style.color = 'white';
    toast.style.padding = '15px 30px';
    toast.style.borderRadius = '50px';
    toast.style.boxShadow = '0 10px 30px rgba(201, 24, 74, 0.3)';
    toast.style.zIndex = '10001';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '15px';
    toast.style.fontSize = '1.1rem';
    toast.style.fontWeight = 'bold';
    toast.style.animation = 'slideUp 0.3s ease-out';
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease-out';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * Initialize memory navigation dots
 */
function initMemoryNavigation() {
    const memoryDots = document.querySelectorAll('.memory-dot');
    
    memoryDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get memory number
            const memoryNumber = this.dataset.memory;
            
            // Remove active class from all dots
            memoryDots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            this.classList.add('active');
            
            // Scroll to the corresponding photo
            const photoFrame = document.querySelector(`.photo-frame[data-memory="${memoryNumber}"]`);
            if (photoFrame) {
                photoFrame.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                
                // Highlight the photo frame
                photoFrame.style.boxShadow = '0 0 0 5px #ff4d6d, 0 25px 50px rgba(201, 24, 74, 0.3)';
                
                setTimeout(() => {
                    photoFrame.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                }, 1000);
                
                // Create mini celebration
                createHeartBurst(photoFrame.querySelector('.photo-container'));
            }
        });
    });
}

/**
 * Highlight memory dot
 */
function highlightMemoryDot(memoryNumber) {
    const memoryDot = document.querySelector(`.memory-dot[data-memory="${memoryNumber}"]`);
    if (memoryDot) {
        memoryDot.classList.add('active');
        
        // Remove active from others
        document.querySelectorAll('.memory-dot').forEach(dot => {
            if (dot.dataset.memory !== memoryNumber) {
                dot.classList.remove('active');
            }
        });
    }
}

/**
 * Magical flower that grows and responds to clicks
 */
function initMagicalFlower() {
    const flower = document.getElementById('magicalFlower');
    
    if (!flower) return;
    
    // Initial bloom animation
    flower.style.animation = 'flowerGrow 2s ease-out';
    
    // Click interaction - flower blooms more
    flower.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Reset and replay animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'flowerGrow 1.5s ease-out';
        }, 10);
        
        // Create sparkles around flower
        createFlowerSparkles();
        
        // Make petals glow
        const petals = this.querySelectorAll('.flower-petal');
        petals.forEach((petal, index) => {
            petal.style.background = 'linear-gradient(145deg, #ffb3c6, #ff6b8b)';
            petal.style.boxShadow = '0 0 30px rgba(255, 77, 109, 0.5)';
            petal.style.transition = 'all 0.3s';
            
            setTimeout(() => {
                petal.style.background = 'linear-gradient(145deg, #ffb3c6, #ff8eae)';
                petal.style.boxShadow = '0 8px 20px rgba(255, 77, 109, 0.2)';
            }, 500);
        });
        
        // Create floating hearts from flower
        createFloatingHeartsFromFlower();
        
        // Randomly highlight a memory
        const randomMemory = Math.floor(Math.random() * 6) + 1;
        highlightMemoryDot(randomMemory.toString());
    });
    
    console.log('✅ Magical flower initialized');
}

/**
 * Create sparkles around the flower
 */
function createFlowerSparkles() {
    const flower = document.getElementById('magicalFlower');
    if (!flower) return;
    
    const rect = flower.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = centerX + 'px';
        sparkle.style.top = centerY + 'px';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.zIndex = '9999';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.opacity = '0.8';
        sparkle.style.textShadow = '0 0 10px gold';
        
        document.body.appendChild(sparkle);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 150;
        
        sparkle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 0.8 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

/**
 * Create floating hearts from flower
 */
function createFloatingHeartsFromFlower() {
    const flower = document.getElementById('magicalFlower');
    if (!flower) return;
    
    const rect = flower.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'fixed';
        heart.style.color = '#ff4d6d';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '1.2rem';
        heart.style.zIndex = '9999';
        heart.style.pointerEvents = 'none';
        heart.style.filter = 'drop-shadow(0 0 5px rgba(255,77,109,0.5))';
        
        document.body.appendChild(heart);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 200;
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1500 + Math.random() * 1000,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
        });
        
        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}

/**
 * Initialize send button
 */
function initSendButton() {
    const sendBtn = document.getElementById('sendToMomBtn');
    
    if (sendBtn) {
        sendBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Button animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Show sending state
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Love to Mom... <i class="fas fa-heart"></i>';
            this.disabled = true;
            
            // Simulate sending
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Sent with Love! <i class="fas fa-heart"></i>';
                
                // Show success modal
                showSuccessModal();
                
                // Create big celebration
                createBigCelebration();
                
                // Reset button
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.disabled = false;
                }, 3000);
            }, 2000);
        });
        
        console.log('✅ Send button initialized');
    }
}

/**
 * Show success modal
 */
function showSuccessModal() {
    // Remove existing modals
    const existingModals = document.querySelectorAll('.success-modal');
    existingModals.forEach(modal => modal.remove());
    
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <i class="fas fa-heart-circle"></i>
        <h3>Sent with Love! 💝</h3>
        <p style="font-size: 1.2rem; color: #4a4e69; margin: 15px 0;">Your secret garden has been sent to Mom!</p>
        <p style="font-size: 1rem; color: #6c757d;">All your beautiful memories of her are now a forever garden ❤️</p>
        <button class="modal-btn" onclick="this.closest('.success-modal').remove()">
            <i class="fas fa-smile"></i> Close
        </button>
    `;
    
    document.body.appendChild(modal);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 5000);
}

/**
 * Create big celebration for send button
 */
function createBigCelebration() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart';
            heart.style.position = 'fixed';
            heart.style.color = ['#ff4d6d', '#ff8eae', '#ffb3c6', '#c9184a'][Math.floor(Math.random() * 4)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '50%';
            heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
            heart.style.zIndex = '10000';
            heart.style.pointerEvents = 'none';
            heart.style.filter = 'drop-shadow(0 0 10px rgba(255,77,109,0.5))';
            heart.style.animation = 'floatUp 3s ease-out';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 50);
    }
}

/**
 * Create falling petal rain effect
 */
function createPetalRain() {
    const petalRain = document.getElementById('petalRain');
    if (!petalRain) return;
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.innerHTML = ['🌸', '🌹', '🌺', '🌸', '🌷'][Math.floor(Math.random() * 5)];
        
        const left = Math.random() * 100;
        const duration = 6 + Math.random() * 7;
        const size = 0.8 + Math.random() * 1.2;
        
        petal.style.left = `${left}%`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.fontSize = `${size}rem`;
        petal.style.opacity = '0.6';
        petal.style.position = 'absolute';
        petal.style.top = '-50px';
        petal.style.animation = `petalFall ${duration}s linear infinite`;
        
        petalRain.appendChild(petal);
        
        // Remove after animation
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }, 500);
}

/**
 * Initialize frame decorations
 */
function initFrameDecorations() {
    const frames = document.querySelectorAll('.photo-frame');
    
    frames.forEach(frame => {
        frame.addEventListener('mouseenter', function() {
            const decorations = this.querySelectorAll('.frame-decoration');
            decorations.forEach(dec => {
                dec.style.background = 'linear-gradient(145deg, #ff6b8b, #ff4d6d)';
                dec.style.transform = 'scale(1.2)';
                dec.style.transition = 'all 0.3s';
            });
        });
        
        frame.addEventListener('mouseleave', function() {
            const decorations = this.querySelectorAll('.frame-decoration');
            decorations.forEach(dec => {
                dec.style.background = 'linear-gradient(145deg, #ffb3c6, #ff8eae)';
                dec.style.transform = 'scale(1)';
            });
        });
    });
}

console.log('🌸 Mom\'s Secret Garden is fully loaded and ready! 🌸');