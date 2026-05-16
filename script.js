const nom=document.getElementById('name')
const email=document.getElementById('email')
const password=document.getElementById('password')
const button=document.getElementById('btn')

button.addEventListener('click', function(){

    const name=nom.value.trim()
    const mail=email.value.trim()
    const pass=password.value.trim()

    if (nom.value === '' || email.value === '' || password.value === '')
    {
        return alert('Veuillez remplir tous les champs');
    }
    
    const users = JSON.parsel(localStorage.getItem('users' ) || '[]');
    users.push({ nom:name , email: mail , password: pass });
    localStorage.setItem('users',JSON.stringify(users));
    
    alert('inscription reussie !' + "nom:" + nom.value + "email:" + email.value + "password:" + password.value )
    nom.value = email.value = password.value ='';
});

