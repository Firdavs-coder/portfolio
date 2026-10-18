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

    // Project tag filters
    const filtersEl = document.getElementById('projectFilters');
    const cards = document.querySelectorAll('.project-card');
    const emptyMsg = document.getElementById('projectEmpty');

    if (filtersEl && cards.length) {
        const counts = {};

        cards.forEach(card => {
            const toolsEl = card.querySelector('.project-tools');
            const tags = toolsEl.textContent.trim().split(/\s+/)
                .map(t => t.replace(/^#/, ''))
                .filter(Boolean);
            card.dataset.tags = tags.join(' ');
            tags.forEach(t => counts[t] = (counts[t] || 0) + 1);
            toolsEl.innerHTML = tags.map(t => `<span class="project-tag">#${t}</span>`).join('');
        });

        // Only show tags shared by 2+ projects, most common first
        const tags = Object.keys(counts)
            .filter(t => counts[t] > 1)
            .sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));

        const makeButton = (tag, label, count) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'project-filter';
            btn.dataset.tag = tag;
            btn.innerHTML = `${label}<span class="project-filter-count">${count}</span>`;
            filtersEl.appendChild(btn);
            return btn;
        };

        makeButton('', 'All', cards.length).classList.add('active');
        tags.forEach(t => makeButton(t, '#' + t, counts[t]));

        filtersEl.addEventListener('click', e => {
            const btn = e.target.closest('.project-filter');
            if (!btn) return;
            filtersEl.querySelectorAll('.project-filter').forEach(b => b.classList.toggle('active', b === btn));
            const tag = btn.dataset.tag;
            let visible = 0;
            cards.forEach(card => {
                const show = !tag || card.dataset.tags.split(' ').includes(tag);
                card.hidden = !show;
                if (show) visible++;
            });
            emptyMsg.hidden = visible > 0;
        });
    }

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
