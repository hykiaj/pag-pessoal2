let activeTab = "profile-card"
let slideIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação de Carregamento Inicial (Fade In)
    const profileCard = document.getElementById('profile-card');
    
    // O CSS já define a animação; o JS garante que a classe seja aplicada no carregamento.
    // Isso é útil se o CSS não começar a animação automaticamente em alguns navegadores.
    profileCard.classList.add('animated-fade-in');


    // 2. Navegação com Rolagem Suave e Mostrar/Esconder Seções

    // Seleciona todos os links na navegação
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Itera sobre cada link para adicionar o ouvinte de evento
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Previne o comportamento padrão (o salto instantâneo)
            event.preventDefault();
            
            // Pega o ID da seção alvo (e.g., '#about', '#school')
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Rola suavemente para a seção
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

                // ** Funcionalidade Opcional: Mostrar/Esconder Seções **
                // Esconde todas as seções primeiro
                document.querySelectorAll('.content-section').forEach(section => {
                    if (section.id !== 'profile-card') { // Não esconde o card principal
                        section.classList.remove('visible');
                    }
                });

                // Mostra a seção clicada
                // Usamos um pequeno timeout para garantir a rolagem suave antes de mostrar
                setTimeout(() => {
                    if (targetSection.classList.contains('content-section')) {
                        activeTab=targetSection.id
                        targetSection.classList.add('visible');
                        slideIndex = 1
                        showSlides(slideIndex)
                    }
                }, 500); // 500ms é meio segundo, dando tempo para a rolagem iniciar
            }
        });
    });
});
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let actualSlides = document.getElementsByClassName("mySlides-"+activeTab);
  let dots = document.getElementsByClassName("dot");
  let actualDots = document.getElementsByClassName("dot-"+activeTab);
  if (n > actualSlides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = actualSlides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  actualSlides[slideIndex-1].style.display = "block";  
  actualDots[slideIndex-1].className += " active";
}