import React, { useState, useEffect } from 'react';

const ThemeToggleButton = () => {
    // 1. Initialize state for the current theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // 2. Function to update the theme on the HTML element
    const updateThemeOnHtmlEl = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
    };

    // 3. Function to update button text or styles based on the theme
    const updateButton = (isDark) => {
        // You can add button-specific styling or text changes here
        // For example, you can update the button's text or icon based on the theme
        console.log(isDark ? 'Dark mode enabled' : 'Light mode enabled');
    };

    // 4. On initial render, set the theme from localStorage
    useEffect(() => {
        updateThemeOnHtmlEl(theme);
        updateButton(theme === 'dark');
    }, [theme]);

    // 5. Toggle theme when button is clicked
    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        updateButton(newTheme === 'dark');
        updateThemeOnHtmlEl(newTheme);
    };

    return (
        <button
            type="button"
            data-theme-toggle
            className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
            onClick={handleThemeToggle}
        >
            Toggle Theme
        </button>
    );
};

export default ThemeToggleButton;
