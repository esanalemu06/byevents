// ===================================
// PRAYER REQUEST PAGE - JAVASCRIPT
// Save as: scripts/prayer.js
// ===================================

'use strict';

// Open modal function
function openModal(type) {
    const modal = document.getElementById('prayerModal');
    const prayerTypeInput = document.getElementById('prayerType');
    
    if (modal && prayerTypeInput) {
        prayerTypeInput.value = type;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('prayerModal');
    
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Reset form
        const form = document.getElementById('prayerForm');
        if (form) {
            form.reset();
        }
        
        // Hide success message and show form
        const formContainer = document.getElementById('formContainer');
        const successMessage = document.getElementById('successMessage');
        
        if (formContainer) {
            formContainer.style.display = 'block';
        }
        if (successMessage) {
            successMessage.classList.remove('active');
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Close modal when clicking outside
    const modal = document.getElementById('prayerModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('prayerModal');
            if (modal && modal.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // Handle form submission
    const prayerForm = document.getElementById('prayerForm');
    if (prayerForm) {
        prayerForm.addEventListener('submit', function(e) {
            // Don't prevent default - let Netlify handle it
            // But we can add client-side validation
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const category = document.getElementById('category');
            const request = document.getElementById('request');
            
            let isValid = true;
            let errorMessage = '';
            
            // Validate name
            if (name && !name.value.trim()) {
                isValid = false;
                errorMessage = 'Please enter your name.';
                name.focus();
            }
            
            // Validate email
            if (email && !email.value.trim()) {
                isValid = false;
                errorMessage = 'Please enter your email address.';
                email.focus();
            } else if (email && !isValidEmail(email.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
                email.focus();
            }
            
            // Validate category
            if (category && !category.value) {
                isValid = false;
                errorMessage = 'Please select a prayer category.';
                category.focus();
            }
            
            // Validate request
            if (request && !request.value.trim()) {
                isValid = false;
                errorMessage = 'Please enter your prayer request.';
                request.focus();
            }
            
            if (!isValid) {
                e.preventDefault();
                alert(errorMessage);
                return false;
            }
            
            // If validation passes, show success message
            // Note: For Netlify forms, you might want to set up a success redirect
            // in your Netlify form settings instead of using this JS approach
        });
    }
});

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Make functions available globally
window.openModal = openModal;
window.closeModal = closeModal;