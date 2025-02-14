const noBtn = document.querySelector('.no-btn');
let clickCount = 0; // Add counter

noBtn.addEventListener('click', () => {
    clickCount++; // Increment counter
    
    if (clickCount >= 3) {
        // Redirect after 3 attempts
        window.location.href = 'how-dare-you.html';
        return;
    }
    
    // Reduce size by 10%
    const currentScale = parseFloat(getComputedStyle(noBtn).transform.split(',')[3]) || 1;
    const newScale = currentScale * 0.9;
    noBtn.style.transform = `scale(${newScale})`;
    
    // Move to random position
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}); 