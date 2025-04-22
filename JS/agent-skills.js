document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll('.buttons');
    const skillVideo = document.querySelector('.skill-video');
    const skillName = document.querySelector('.skill-name');
    const skillDesc = document.querySelector('.skill-desc');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active dari semua button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        
            // Ambil data dari tombol
            const videoUrl = btn.dataset.video;
            const name = btn.dataset.name;
            const desc = btn.dataset.desc;
        
            // Update video
            const videoElement = skillVideo.querySelector('source');
            videoElement.src = videoUrl;
            skillVideo.load();
            skillVideo.play();
        
            // Update teks
            skillName.textContent = name;
            skillDesc.textContent = desc;
        });
    });

    buttons[0].classList.add('active');
    skillVideo.src = videos[0];
    skillVideo.load();
    skillVideo.play();
});

