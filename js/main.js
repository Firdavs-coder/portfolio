document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(container => {
        container.addEventListener('click', function() {
            const img = this.querySelector('img');
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    // Render project tags
    document.querySelectorAll('.project-tools').forEach(toolsEl => {
        const tags = toolsEl.textContent.trim().split(/\s+/)
            .map(t => t.replace(/^#/, ''))
            .filter(Boolean);
        toolsEl.innerHTML = tags.map(t => `<span class="project-tag">#${t}</span>`).join('');
    });

    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
