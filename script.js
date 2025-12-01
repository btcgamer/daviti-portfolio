document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling ნავიგაციისთვის
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement('button');
    toggleButton.id = 'darkModeToggle';
    toggleButton.innerHTML = '🌙'; // მთვარის იკონი (შეცვალე თუ გინდა ☀️/🌙)
    document.body.appendChild(toggleButton);

    // შეამოწმე ლოკალური შენახვა
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '☀️'; // მზის იკონი მუქ რეჟიმში
    }

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        toggleButton.innerHTML = isDark ? '☀️' : '🌙';
    });

    // ფორმის submit ჰენდლერი
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'), // დაამატე name ატრიბუტები input-ებზე HTML-ში
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // იბეჭდება console-ში (შეგიძლია შეცვალო fetch-ით email API-ზე)
        console.log('ფორმის მონაცემები:', data);
        alert(`გამარჯობა, \( {data.name}! შეტყობინება მიღებულია: " \){data.message}". მადლობა!`);
        
        // გაასუფთავე ფორმა
        form.reset();
    });
});