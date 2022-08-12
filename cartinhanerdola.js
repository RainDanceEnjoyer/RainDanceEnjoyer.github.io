/*const next = document.querySelector("#next")
var min=0
var max =4
next.addEventListener('click', function () {
        fetch(`https://api.magicthegathering.io/v1/cards?page=15`).then(promise => {
            return promise.json()
        }).then(cards => {
            cards = cards.cards
            console.log(cards)
            while(min < max){
                if (cards[min].imageUrl != null) {

                    document.querySelector('div').innerHTML +=
                        `
            <div>
            <img src='${cards[min].imageUrl}' class='${cards[min].rarity}' alt='${cards[min].name}' width="265px" height="370px">
            <br>
            <a> &nbsp &nbsp &nbsp ${cards[min].name} / ${cards[min].set} </a>
            </div>
            `;

                }
                min++
               
            }
        })
        max+=4
    console.log(max)
       
})
*/

// external js: flickity.pkgd.js
function generate(contador, max) {
    while (contador < max) {
        fetch(`https://api.magicthegathering.io/v1/cards?page=${contador}`).then(promise => {
            return promise.json()
        }).then(cards => {
            cards = cards.cards
            console.log(cards)
            var i = 1;
            while (i <= 10) {
                if (cards[i].imageUrl != null) {

                    document.querySelector('div').innerHTML +=
                        `
            <div>
            <img src='${cards[i].imageUrl}' class='${cards[i].rarity}' alt='${cards[i].name}' width="265px" height="370px">
            <br>
            <a> &nbsp &nbsp &nbsp ${cards[i].name} / ${cards[i].set} </a>
            </div>
            `;

                }
                i++
            }
        }).catch(err => {
            console.log(err)
        }

        )
        contador += 1
    }
}

var carrosselIMG = [
    "johnny.png",
    "proxyad.png",
    "commanderdesconto.png"
]
var nextImg = document.getElementById('next')
var prevImg = document.getElementById('prev')
var aImg = 0
nextImg.addEventListener('click', function(){
    aImg++;
    if(aImg > carrosselIMG.length -1){
        aImg= 0
    }
    
    
document.querySelector('.ad2').src = carrosselIMG[aImg]
})

prevImg.addEventListener('click', function(){
    aImg--;
    if(aImg < 0){
        aImg= carrosselIMG.length -1
}
    
    
document.querySelector('.ad2').src = carrosselIMG[aImg]
})