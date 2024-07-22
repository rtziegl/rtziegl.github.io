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

document.addEventListener('DOMContentLoaded', () => {
    const middleCircle = document.getElementById('middle-circle');
    const linkContainers = document.querySelectorAll('.link-container a');

    function isAnyLinkVisible() {
        // Check if any link has the 'show' class
        return Array.from(linkContainers).some(link => 
            link.classList.contains('show')
        );
    }

    function triggerBounce() {
        if (!isAnyLinkVisible()) {
            console.log('Triggering bounce');
            middleCircle.classList.add('bounce-once');
            // Remove the class after the animation ends to reset the bounce
            setTimeout(() => {
                middleCircle.classList.remove('bounce-once');
            }, 1000); // Match this with the animation duration (1s)
        }
    }

    // Trigger bounce every 10 seconds if no links are visible
    setInterval(() => {
        if (!isAnyLinkVisible()) {
            triggerBounce();
        }
    }, 10000); // 10 seconds
});
