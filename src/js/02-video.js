import throttle from "lodash.throttle";
const iframe = document.querySelector("#vimeo-player");

//подключение VimeoPlayer - npm
const player = new Vimeo.Player(iframe);

//сохранение текущего времени проигрования
function saveCurrentPlayerTime(date) {
  localStorage.setItem("videoplayer-current-time", Math.round(date.seconds));
  console.log(Number(localStorage.getItem("videoplayer-current-time")));
}
//время воспроизведения обновляется в хранилище раз в секунду
player.on("timeupdate", throttle(saveCurrentPlayerTime, 1000));

function setupCurrentPlayerTime() {
  player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")));
}
window.onload = setupCurrentPlayerTime;
