const body = document.querySelector('body')
const onPage = document.querySelector('#onPage')
const nextPageGood = document.querySelector('#nextPageGood');

// onPage.style.display = 'block'
// setTimeout(() => {
//   onPage.style.display = 'none'
// }, 500)




const header = document.querySelector('header');

// const labelSvg = document.querySelector('.label svg');
// labelSvg.addEventListener('click', function () {
//   location.reload()
// })



// function fNextPageOn() {
//   setTimeout(() => {
//     nextPageOn.style.display = 'none';
//   }, 500)
// }

// fNextPageOn();


const menuA = document.querySelectorAll('.menu a');
menuA.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // nextPageGood.style.display = 'block';
    // setTimeout(() => {
    //   window.location.href = link.dataset.href;
    //   nextPageGood.style.display = 'none';


    // }, 500)
      window.location.href = link.dataset.href;

  })
})











const audio = document.querySelector('#audio');
const musicBox = document.querySelector('.musicBox');

// Создаем аудиоконтекст
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audio);
// let isPlaying = false;

source.connect(analyser);
analyser.connect(audioContext.destination);

// Настроим анализатор
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

let audioOn = false;
musicBox.addEventListener('click', () => {
    if (!audioOn) {
        audioContext.resume().then(() => {
            audio.play();
            audioOn = true;
            animate();
        });
    }
    else {
        audio.pause();
        audioOn = false;
        return
    }

});

let ratateTg = 0;
function animate() {
    let scale;
    if (!audioOn) {
        ratateTg = 0;
        scale = 1;
        // avatarFilter.style.transform = `scale(${scale}) rotate(${ratateTg}deg)`;
        musicBox.style.transform = `scale(${scale})`;
    
        return;
    }
    requestAnimationFrame(animate);
    analyser.getByteFrequencyData(dataArray);

    // Получаем среднее значение частот
    const average = dataArray.reduce((a, b) => a + b) / bufferLength;

    // Изменяем размер дива в зависимости от среднего значения
    // scale = 1 + average / 256; // Нормируем значение
    scale = 0.5 + average / 80; // Нормируем значение
    // avatarTelegram.style.transform = `rotate(${360}deg)`;
    ratateTg += 1;

    // avatarFilter.style.transform = `scale(${scale}) rotate(${ratateTg}deg)`;
    musicBox.style.transform = `scale(${scale})`;

}








const psHover = document.querySelector('footer .psHover');
const blockBack = document.querySelector('footer .blockBack');


psHover.addEventListener('mouseenter', function () {

  blockBack.classList.add('open')
})

psHover.addEventListener('mouseleave', function () {

  blockBack.classList.remove('open')
})

