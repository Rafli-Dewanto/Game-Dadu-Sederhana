const ubahGambarDadu = () => {
    const randomNumber1 = Math.floor((Math.random() * 6) + 1);
    const stringGambar = 'images/dice' + randomNumber1 + '.png'
    const ubah1 = document.getElementById("img1");
    ubah1.src = stringGambar

    const randomNumber2 = Math.floor((Math.random() * 6) + 1);    
    const stringGambar2 = 'images/dice' + randomNumber2 + '.png';
    const ubah2 = document.getElementById("img2");
    ubah2.src = stringGambar2;

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = '🚩Player 1 menang';
    } else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = 'Player 2 menang🚩';
    } else {
        document.querySelector("h1").innerHTML = 'Seri';
    }

}

