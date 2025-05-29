function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Update individual digits with flip animation
    updateDigit('hours1', hours[0]);
    updateDigit('hours2', hours[1]);
    updateDigit('minutes1', minutes[0]);
    updateDigit('minutes2', minutes[1]);
    updateDigit('seconds1', seconds[0]);
    updateDigit('seconds2', seconds[1]);
    
    // Update date
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

function updateDigit(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element.textContent !== newValue) {
        element.parentElement.classList.add('flip-animation');
        element.textContent = newValue;
        
        setTimeout(() => {
            element.parentElement.classList.remove('flip-animation');
        }, 600);
    }
}

// Initialize clock when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    
    // Update every second
    setInterval(updateClock, 1000);
});

// Add subtle parallax effect on mouse move
document.addEventListener('mousemove', (e) => {
    const clockContainer = document.querySelector('.clock-container');
    if (clockContainer) {
        const x = (e.clientX / window.innerWidth - 0.5) * 10;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;
        
        clockContainer.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
    const clockContainer = document.querySelector('.clock-container');
    if (clockContainer) {
        clockContainer.style.transform = 'translate(0px, 0px)';
    }
});