// script.js - Ameer Land and Properties

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Load properties from Google Sheets (placeholder for now)
    loadProperties();
});

// Properties data - This will be replaced with Google Sheets integration
const sampleProperties = [
    {
        name: "Prime Residential Estate",
        type: "House",
        price: "₦25,000,000",
        location: "Zoo Road, Kano",
        bedrooms: "4",
        bathrooms: "3",
        image: "https://via.placeholder.com/400x300/0A2463/FFFFFF?text=Prime+Estate"
    },
    {
        name: "Greenfield Commercial Plot",
        type: "Land",
        price: "₦15,000,000",
        location: "Nassarawa, Kano",
        bedrooms: "-",
        bathrooms: "-",
        image: "https://via.placeholder.com/400x300/D4AF37/0A2463?text=Commercial+Land"
    },
    {
        name: "Riverside Luxury Villa",
        type: "House",
        price: "₦45,000,000",
        location: "GRA, Kano",
        bedrooms: "5",
        bathrooms: "4",
        image: "https://via.placeholder.com/400x300/061A40/FFFFFF?text=Luxury+Villa"
    }
];

function loadProperties() {
    const propertiesGrid = document.getElementById('propertiesGrid');
    
    if (!propertiesGrid) return;
    
    // Clear loading message
    propertiesGrid.innerHTML = '';
    
    // Add property cards
    sampleProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
    });
}

function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = 'property-card';
    
    card.innerHTML = `
        <div class="property-image">
            <img src="${property.image}" alt="${property.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div class="property-info">
            <h3>${property.name}</h3>
            <div class="property-price">${property.price}</div>
            <div class="property-location">📍 ${property.location}</div>
            <div class="property-features">
                ${property.bedrooms !== '-' ? `<span>🛏️ ${property.bedrooms} Bed</span>` : ''}
                ${property.bathrooms !== '-' ? `<span>🚿 ${property.bathrooms} Bath</span>` : ''}
                <span>${property.type}</span>
            </div>
            <div class="property-actions">
                <a href="tel:09033051292" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Inquire Now</a>
            </div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.textContent = 'Loading...';
    return loading;
}

// Google Sheets integration placeholder
function connectGoogleSheets() {
    console.log('Google Sheets integration ready to be implemented');
    // This will connect to your Google Sheets later
}

// Current year for copyright
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
});
