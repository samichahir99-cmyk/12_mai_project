const nom=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');

const button1=document.getElementById('btn');
const button2=document.getElementById('btn2');

button1.addEventListener('click', function() {
    const name=nom.value;
    const mail=email.value;
    const pass=password.value;

    if (nom.value==='' || email.value==='' || password.value==='') 
    {
        alert('Veuillez remplir tous les champs');
    } 
    else
    {
        const users=JSON.parse(localStorage.getItem('users') || '[]');
        users.push({nom: name,email: mail,password: pass})
        localStorage.setItem('users', JSON.stringify(users))

        alert('Inscription réussie !' + "nom : " + nom.value + " email : " + email.value + " password : " + password.value);
        nom.value=email.value=password.value='';
    }
});