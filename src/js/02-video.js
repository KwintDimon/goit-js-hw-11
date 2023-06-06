import Player from "@vimeo/player";
import Throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeKey = 'videoplayer-current-time';
//Сделали переменную для ключа

        
//Создали функцию с помощи деструктаризации взяли сек.
function durationSaveToStorage({seconds}) {
    localStorage.setItem(timeKey, seconds);
}

//при перезагрузке страници перезагружаем плеер
window.addEventListener('load', newStart);
player.on('timeupdate', Throttle(durationSaveToStorage, 1000));
///ф-ция которая ловит лоад в локальном хранилище
function newStart() {
    if (!localStorage.getItem(timeKey)) {
        return;
    }
    const currentVideoTime = localStorage.getItem(timeKey);

    player
        .setCurrentTime(currentVideoTime)
    .then( ()=> {
    player.play()
    })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
        
   } 
 