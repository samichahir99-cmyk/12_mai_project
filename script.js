const nom=document.getElementById('nom')
const email=document.getElementById('email')
const password=document.getElementById('password')

const button=document.getElementById('btn')

button.addEventListener('click', function(){
    if (nom.value === '' || email.value === '' || password.value === '')
    {
        alert('Veuillez remplir tous les champs');
    }
    else{
        alert('inscription reussie !' + "nom:" + nom.value + "email:" + email.value + "password:" + password.value )
    }
});

