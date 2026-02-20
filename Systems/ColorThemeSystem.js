// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Initialize theme based on saved preference or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        if (savedTheme === 'dark') {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    } else if (prefersDark) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Enable Dark Mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Light Mode';
    localStorage.setItem('theme', 'dark');
}

// Enable Light Mode
function enableLightMode() {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙 Dark Mode';
    localStorage.setItem('theme', 'light');
}

// Toggle Theme
function toggleTheme() {
    if (body.classList.contains('dark-mode')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

// Event Listener
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);
