function showSection(sectionId) {
    var container = document.getElementById('container');
    var sections = document.querySelectorAll('.section-2');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'flex';

    setTimeout(function () {
        container.classList.add('show-section-2');
    }, 50);
}

function resetSections(event) {
    if (!event.target.closest('.link-container a')) {
        var container = document.getElementById('container');
        container.classList.remove('show-section-2');

        setTimeout(function () {
            var sections = document.querySelectorAll('.section-2');
            sections.forEach(function (section) {
                section.style.display = 'none';
            });
        }, 500);
    }
}

function toggleIcons(event) {
    event.stopPropagation();
    var icons = document.querySelectorAll('.link-container a');
    var delay = 0;

    if (icons[0].classList.contains('show')) {
        for (let i = icons.length - 1; i >= 0; i--) {
            setTimeout(() => {
                icons[i].classList.remove('show');
            }, delay);
            delay += 50;
        }
    } else {
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('show');
            }, delay);
            delay += 50;
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var minimizeIcons = document.querySelectorAll('.fa-window-minimize');
    minimizeIcons.forEach(function (icon) {
        icon.addEventListener('click', resetSections);
    });
});