
lucide.createIcons();


const form = document.getElementById('loginForm');


form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real

    
    const email = form.email.value;
    const senha = form.senha.value;

    
    if (email === '' || senha === '') {
        alert('Preencha todos os campos!');
    } else {
        alert(`Bem-vindo, ${email}!`);
        
        
    }
});
