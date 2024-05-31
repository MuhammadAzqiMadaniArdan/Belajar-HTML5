
// Menyiapkan Canvas
const mycanvas = document.querySelector('#mycanvas');

// Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

const c = mycanvas.getContext('2d');

// memanipulasi canvas

// -> membuat rectangle

c.fillStyle = 'pink';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(50,50,300,300);
// angka pertama dan  kedua adalah (x,y)
// angka kedua dan ketiga adalah (Width,Height)

// mengisi warna dan ketebalan border 
c.fill();
c.stroke();

// -> Membuat Lingkaran / Circle / Arc
c.fillStyle = 'lightgreen';
// begin path digunakan untuk memulai bentuk atau path baru 
// lebih tepatnya memisahkan
c.beginPath();
//
c.arc(550,200,150, 0,2 * Math.PI);
c.fill();
c.stroke();

// -> Membuat Segitiga (Path)

c.fillStyle = 'lightblue'
c.beginPath();
c.moveTo(900,50);
// Bagian Kanan Samping
c.lineTo(1050,350);
// Bagian Bawah
c.lineTo(750,350);
// bagian kiri / bagian close
c.closePath();
c.fill();
c.stroke();

// -> Membuat Animasi Canvas
// x->awal bentuk muncul
// speed->kecepatan block
// radius->ujung dari bentuk
let x = 300;
let y = 400;
let speedX = 8;
let speedY = 8;
let radius = 150;

function draw(){
    window.requestAnimationFrame(draw);
    // - clearRect - menghapus canvas sebelumnya 
    c.clearRect(0,0,innerWidth,innerHeight);
    // melihat berapa kali fungsi ini dijalankan
    console.log('Ok!');

    c.fillStyle = 'lightblue';
    c.beginPath();
    // c.arc(x,400,150, 0,2 * Math.PI);
    c.arc(x,y,radius, 0,2 * Math.PI);
    c.fill();
    c.stroke();

    // -> manipulasi kecepatan
    // kanan kiri
    if(x + radius > innerWidth || x - radius < 0){
        speedX = -speedX;
    }
    
    // atas bawah
    if(y + radius > innerHeight || y - radius < 0){
        speedY = -speedY

    }
        // mengatur seberapa kecepatan dari animasi
        x += speedX;
        y += speedY;

}

// dibawah merupakan pemanggilan Function jika ingin Dijalankan
let animateButton = document.createElement = button;

draw();

