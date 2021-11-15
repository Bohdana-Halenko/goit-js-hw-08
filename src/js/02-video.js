const iframe = document.querySelector("#vimeo-player");
const throttle = require("lodash.throttle");

//подключение VimeoPlayer - npm
const player = new Vimeo.Player("iframe");

//сохранение текущего времени проигрования

