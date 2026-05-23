const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        btn.innerHTML = "Light Mode";
    }
    else{
        btn.innerHTML = "Dark Mode";
    }

});