window.addEventListener('load', () => {
    if(window.location.href === 'http://localhost:3000/')
    {
        let text = document.querySelector('.slide')
        let content = ['Bonjour !', 'Hello !', 'Buenos dias !', 'Buongiorno !', 'Ohayō !', 'Guten Tag']
    
        setInterval(() => {
            
            addFade()
        }, 2000);
    
        function addFade()
        {
            let offset = Math.floor(Math.random() * 5)
            text.classList.remove('animate-fade'); 
            void text.offsetWidth; 
            text.classList.add('animate-fade'); 
            text.innerHTML = content[offset]
        }
    }
})

// void text.offsetWidth permet de forcer le navigateur à prendre en compte le rendu du text
// alternative à requestAnimationFrame