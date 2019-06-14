var x = document.querySelectorAll('#item');
x[4].style.color = '#0f9466';
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener('click', ()=>{
        for (let j = 0; j < x.length; j++) {
            x[j].style.color = '#8ea4a5'
        }
        x[i].style.color = '#0f9466';
    })
}