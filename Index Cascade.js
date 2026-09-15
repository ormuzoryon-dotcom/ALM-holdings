// Hidden Cascade Mechanism: Shifting Primary ALM into Secondary Cacatus/MRM View
let secretSequence = '';
const targetCode = 'vanguard';

document.addEventListener('keydown', (e) => {
  secretSequence += e.key.toLowerCase();
  if (secretSequence.length > targetCode.length) {
    secretSequence = secretSequence.slice(-targetCode.length);
  }
  
  if (secretSequence === targetCode) {
    triggerFlashCascade();
  }
});

function triggerFlashCascade() {
  // Flash white/slate overlay effect
  const flash = document.createElement('div');
  flash.style.position = 'fixed';
  flash.style.top = '0';
  flash.style.left = '0';
  flash.style.width = '100vw';
  flash.style.height = '100vh';
  flash.style.background = '#FFFFFF';
  flash.style.zIndex = '99999';
  flash.style.transition = 'opacity 0.4s ease';
  document.body.appendChild(flash);

  setTimeout(() => {
    flash.style.opacity = '0';
    // Redirect or render secondary MRM Consulting / Cacatus layout
    window.location.href = '/mrmconsulting?view=cacatus';
  }, 200);
}