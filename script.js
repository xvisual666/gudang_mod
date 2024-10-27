document.addEventListener('DOMContentLoaded', () => {
    const guideBtn = document.getElementById('guideBtn');
    const guideModal = document.getElementById('guideModal');
    const closeBtn = document.querySelector('.modal .close');

    guideBtn.onclick = () => {
        guideModal.classList.add('show');
        guideModal.style.display = 'flex'; // Ensure modal is visible for transition
    };

    closeBtn.onclick = () => {
        guideModal.classList.remove('show');
        setTimeout(() => {
            guideModal.style.display = 'none';
        }, 300); // Match the duration of the CSS transition
    };

    window.onclick = (event) => {
        if (event.target === guideModal) {
            guideModal.classList.remove('show');
            setTimeout(() => {
                guideModal.style.display = 'none';
            }, 300); // Match the duration of the CSS transition
        }
    };
});

window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 3000); // Durasi animasi loading 3 detik
  });
  
  function copyText(element) {
    const text = element.querySelector('.value').innerText;
    navigator.clipboard.writeText(text).then(() => {
      const tooltip = element.querySelector('.tooltip');
      tooltip.innerText = "Tersalin!";
      
      setTimeout(() => {
        tooltip.innerText = "Klik untuk copy";
      }, 1500);
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
    });
  }
