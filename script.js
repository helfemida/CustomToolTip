// script.js

const tooltipContainer = document.querySelector('.tooltip-container');
const customTooltip = document.getElementById('custom-tooltip');

tooltipContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('element')) {
        const tooltipText = e.target.getAttribute('data-tooltip');
        customTooltip.textContent = tooltipText;
        customTooltip.style.display = 'block';
        customTooltip.style.left = e.target.offsetLeft + 'px';
        customTooltip.style.top = e.target.offsetTop + e.target.offsetHeight + 'px';
    }
});

tooltipContainer.addEventListener('mouseout', () => {
    customTooltip.style.display = 'none';
});
