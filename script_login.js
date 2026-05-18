button2.addEventListener('click', function() {
    const mail=email.value;
    const pass=password.value;

    if (email.value==='' || password.value==='') 
    {
        alert('Veuillez remplir tous les champs');
    } 
    else
    {
        const users=JSON.parse(localStorage.getItem('users') || '[]');
        if (users.email===mail && users.password===pass)
        {
            alert('Login reussie');
        }
        else
        {
            alert('Login reussie');
        }
        nom.value=email.value=password.value='';
    }
});