document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Typed.js Initialization
    new Typed('#typed-text', {
        strings: ['AI/Engineering', 'Data Scientist', 'ETL Developer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
    });

    // Particles.js Initialization
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#64ffda' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#8892b0', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Modal Logic for Project 1 (Nobel Prize)
    const nobelModal = document.getElementById('project-modal');
    const nobelProjectCard = document.getElementById('project-1');
    const nobelCloseButton = nobelModal.querySelector('.close-button');

    nobelProjectCard.onclick = function() {
        nobelModal.style.display = "block";
    }
    nobelCloseButton.onclick = function() {
        nobelModal.style.display = "none";
    }

    // Modal Logic for Project 2 (SQL Reporting Project)
    const reportingModal = document.getElementById('reporting-modal');
    const reportingProjectCard = document.getElementById('project-2');
    const reportingCloseButton = reportingModal.querySelector('.close-button');

    reportingProjectCard.onclick = function() {
        reportingModal.style.display = "block";
    }
    reportingCloseButton.onclick = function() {
        reportingModal.style.display = "none";
    }

    // General close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == nobelModal) {
            nobelModal.style.display = "none";
        }
        if (event.target == reportingModal) {
            reportingModal.style.display = "none";
        }
    }
    
    // Add copy functionality for code snippets
    const codeSnippets = document.querySelectorAll('.code-snippet');
    
    codeSnippets.forEach(snippet => {
        snippet.addEventListener('click', function() {
            const codeText = this.textContent;
            
            // Create a temporary textarea element to copy from
            const textarea = document.createElement('textarea');
            textarea.value = codeText;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            
            // Select and copy the text
            textarea.select();
            document.execCommand('copy');
            
            // Remove the textarea
            document.body.removeChild(textarea);
            
            // Add the copied class to change the icon
            this.classList.add('copied');
            
            // Remove the copied class after 2 seconds
            setTimeout(() => {
                this.classList.remove('copied');
            }, 2000);
        });
    });
});
