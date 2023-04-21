
const carta = document.querySelectorAll('.carta');

let virouCarta = false;
let travar = false;
let primeiraCarta, segundaCarta;

this.contador = document.getElementById('contador');
this.totalClicks = 0;

function virarCarta() {
    if(travar) return;

    this.classList.add('flip');
    this.contador = document.getElementById('contador');
    this.totalPares = 0;


    if (!virouCarta) {
        virouCarta = true;
        primeiraCarta = this;

        return;
    }

    virouCarta = false;
    segundaCarta = this;

    Par();

}

function Par() {
    let sePar = primeiraCarta.dataset.imagem === segundaCarta.dataset.imagem;
    sePar ? desCartas() : desvirarCartas();
    
    this.totalClicks++;
    this.contador.innerText = this.totalClicks;
    console.log(this.totalClicks);
 }

function desCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
 }

function desvirarCartas(){
    travar = true;

    setTimeout(() => {
       primeiraCarta.classList.remove('flip');
       segundaCarta.classList.remove('flip');

       travar = false; 
    }, 600);
}

(function embaralhar(){
    carta.forEach(carta => {
        let aleatorio = Math.floor(Math.random()* 12);
        carta.style.order = aleatorio;
    });
}) ();

carta.forEach(carta => carta.addEventListener('click', virarCarta));