
const tooltipContainer = document.querySelector('.tooltip-container');
const customTooltip = document.getElementById('custom-tooltip');
var cursor = document.getElementById('cursor-bg');

tooltipContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('element')) {
        const tooltipText = e.target.getAttribute('data-tooltip');
        customTooltip.textContent = tooltipText;
        customTooltip.style.display = 'block';
        
        customTooltip.style.top = e.pageY + 'px';
        customTooltip.style.left = e.pageX + 'px';

    }
});



tooltipContainer.addEventListener('mouseout', () => {
    customTooltip.style.display = 'none';

});
