document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');

    // Kaydırma (Scroll) sırasında navigasyonun şeffaflığını/rengini yönetme
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled'); 
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Sayfa içi linklere yumuşak kaydırma (smooth scroll) ekleme
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                 document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});