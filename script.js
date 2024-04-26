const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('VAMOOOOOOOOO NUNCA DUDE !!!!!!!!!!!!')
    alert('MILA Y HELADO O HAMBURGUESA Y HELADO?')
    alert('CON UNA MALA PELI DE FONDO?')
    alert('TE QUIERO <3')
    alert('MANDAME UN WSP')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})