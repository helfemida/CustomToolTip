
const tooltipContainer = document.querySelector('.tooltip-container');
const customTooltip = document.getElementById('custom-tooltip');
var cursor = document.getElementById('cursor-bg');

tooltipContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('element')) {
        const tooltipText = e.target.getAttribute('data-tooltip');
        customTooltip.textContent = tooltipText;
        customTooltip.style.display = 'block';
        
        customTooltip.style.top = e.pageY + 10 + 'px';
        customTooltip.style.left = e.pageX + 5 + 'px';
    }
});

tooltipContainer.addEventListener('mouseout', () => {
    customTooltip.style.display = 'none';
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX-30 + 'px';
    cursor.style.top = e.clientY-30 + 'px';

});

