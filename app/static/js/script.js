// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', savedTheme || 'dark');
});
    
// Toggle theme and save to localStorage
const toggleButton = document.getElementById('input');

toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    console.log(`Theme changed to ${newTheme}`);
});

document.addEventListener("DOMContentLoaded", function () {
    // Initialize the skills carousel for each section
    initializeSkillsCarousel();

    // Initialize particle background if it exists
    if (typeof createParticles === 'function') {
        createParticles();
    }

    // Add animation delay for staggered entrance of initially visible cards
    animateInitialCards();
});

/**
 * Initialize the carousel for each skills section
 */
function initializeSkillsCarousel() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, sectionIndex) => {
        const cards = section.querySelectorAll('.my-cards');
        const cardsContainer = section.querySelector('.cards-container');
        const prevButton = section.querySelector('.slider-prev');
        const nextButton = section.querySelector('.slider-next');
        const indicatorsContainer = section.querySelector('.slider-indicators');
        
        // Calculate how many cards to show based on viewport width
        const visibleCards = getVisibleCardsCount();
        let currentIndex = 0;
        
        // Create indicators based on the number of "pages" of cards
        const pageCount = Math.ceil(cards.length / visibleCards);
        createIndicators(indicatorsContainer, pageCount, sectionIndex);
        
        // Set up initial display
        updateCardsVisibility(cards, currentIndex, visibleCards);
        updateIndicators(indicatorsContainer, currentIndex);
        
        // Add event listeners to navigation buttons
        prevButton.addEventListener('click', () => {
            navigateCards(cards, -1, currentIndex, visibleCards, sectionIndex);
            currentIndex = (currentIndex - 1 + pageCount) % pageCount;
            updateIndicators(indicatorsContainer, currentIndex);
        });
        
        nextButton.addEventListener('click', () => {
            navigateCards(cards, 1, currentIndex, visibleCards, sectionIndex);
            currentIndex = (currentIndex + 1) % pageCount;
            updateIndicators(indicatorsContainer, currentIndex);
        });
        
        // Add click handlers to indicators
        const indicators = indicatorsContainer.querySelectorAll('.slider-indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                const direction = index > currentIndex ? 1 : -1;
                navigateCards(cards, direction, currentIndex, visibleCards, sectionIndex);
                currentIndex = index;
                updateIndicators(indicatorsContainer, currentIndex);
            });
        });
        
        // Add resize listener to handle responsive changes
        window.addEventListener('resize', debounce(() => {
            const newVisibleCards = getVisibleCardsCount();
            if (newVisibleCards !== visibleCards) {
                // Recalculate based on new viewport
                location.reload(); // Simple approach - could be more sophisticated
            }
        }, 250));
    });
}

/**
 * Calculate how many cards should be visible based on viewport width
 */
function getVisibleCardsCount() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
}

/**
 * Create indicator dots for the carousel
 */
function createIndicators(container, count, sectionIndex) {
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'slider-indicator';
        indicator.dataset.index = i;
        indicator.dataset.section = sectionIndex;
        container.appendChild(indicator);
    }
    
    // Set first indicator as active
    if (container.firstChild) {
        container.firstChild.classList.add('active');
    }
}

/**
 * Update which indicator is active
 */
function updateIndicators(container, activeIndex) {
    const indicators = container.querySelectorAll('.slider-indicator');
    indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

/**
 * Update which cards are visible based on current index
 */
function updateCardsVisibility(cards, currentIndex, visibleCards) {
    const startIdx = currentIndex * visibleCards;
    const endIdx = Math.min(startIdx + visibleCards, cards.length);
    
    cards.forEach((card, index) => {
        if (index >= startIdx && index < endIdx) {
            card.style.display = 'block';
            card.style.opacity = '1';
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
}

/**
 * Animate between card pages
 */
function navigateCards(cards, direction, currentIndex, visibleCards, sectionIndex) {
    const startIdx = currentIndex * visibleCards;
    const endIdx = Math.min(startIdx + visibleCards, cards.length);
    const pageCount = Math.ceil(cards.length / visibleCards);
    
    // Calculate next index with wrapping
    const nextIndex = (currentIndex + direction + pageCount) % pageCount;
    const nextStartIdx = nextIndex * visibleCards;
    const nextEndIdx = Math.min(nextStartIdx + visibleCards, cards.length);
    
    // Remove any existing transition classes
    cards.forEach(card => {
        card.classList.remove('slide-in', 'slide-out');
    });
    
    // Hide current cards with animation
    for (let i = startIdx; i < endIdx; i++) {
        const card = cards[i];
        card.classList.add('slide-out');
    }
    
    // Show new cards with animation after a short delay
    setTimeout(() => {
        // Hide all cards first
        cards.forEach(card => {
            card.style.display = 'none';
            card.classList.remove('slide-out');
        });
        
        // Show and animate in the new cards
        for (let i = nextStartIdx; i < nextEndIdx; i++) {
            const card = cards[i];
            card.style.display = 'block';
            card.classList.add('slide-in');
        }
    }, 300);
}

/**
 * Animate the initial visible cards with a staggered entrance
 */
function animateInitialCards() {
    const sections = document.querySelectorAll('.section');
    const visibleCards = getVisibleCardsCount();
    
    sections.forEach(section => {
        const cards = section.querySelectorAll('.my-cards');
        
        cards.forEach((card, index) => {
            // Set animation delay only for initially visible cards
            if (index < visibleCards) {
                card.style.setProperty('--card-index', index);
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/**
 * Simple debounce function to limit how often a function runs
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Intersection Observer for scroll animations
 */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const visibleCards = getVisibleCardsCount();
                const cards = section.querySelectorAll('.my-cards');
                
                // Reset and apply animations only to visible cards
                cards.forEach((card, index) => {
                    if (index < visibleCards) {
                        card.style.animation = 'none';
                        card.offsetHeight; // Trigger reflow
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                        card.style.animationDelay = `${index * 0.1}s`;
                    }
                });
            }
        });
    }, { threshold: 0.2 }); // 20% of the element is visible

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
});


document.getElementById('demo-submit').addEventListener('click', function() {
    const username = document.getElementById('demo-username').value;
    const password = document.getElementById('demo-password').value;
    let resultArea = document.getElementById('demo-result');
    
    // Simulate vulnerable SQL query
    const insecureQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    
    // Check for SQL injection patterns
    if (username.includes("'") || password.includes("'")) {
        resultArea.innerHTML = `
            <p><span class="danger">SQL Injection Detected!</span></p>
            <p>Vulnerable Query:</p>
            <pre>${insecureQuery}</pre>
            <p>In a vulnerable system, this query would be executed directly, potentially allowing attackers to:</p>
            <ul>
                <li>Bypass authentication</li>
                <li>Access sensitive data</li>
                <li>Modify or delete database content</li>
            </ul>
        `;
        
        // Show specific explanations for common attacks
        if (username.includes("--")) {
            resultArea.innerHTML += `
                <p><span class="danger">Comment Attack:</span> The -- syntax comments out the rest of the query, bypassing the password check.</p>
            `;
        }
        
        if (username.includes("OR '1'='1")) {
            resultArea.innerHTML += `
                <p><span class="danger">Always True Condition:</span> The OR '1'='1' condition always evaluates to true, bypassing authentication.</p>
            `;
        }
        
        if (username.includes("DROP TABLE") || password.includes("DROP TABLE")) {
            resultArea.innerHTML += `
                <p><span class="danger">Destructive Command:</span> This attempts to execute a DROP TABLE command, which could delete data.</p>
            `;
        }
    } else {
        // Show the safe approach
        resultArea.innerHTML = `
            <p><span class="success">Safe Query Example:</span></p>
            <pre>$stmt = $connection->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", "${username}", "${password}");
$stmt->execute();</pre>
            <p>With prepared statements, user input is treated as data values rather than executable code, preventing SQL injection.</p>
        `;
    }
});