import {RecPlay} from './RecPlay.js';

const recplay = new RecPlay();

document.body.addEventListener('keypress', onKeyPress);
document.querySelector('#recordBtn1').addEventListener('click',onRecordBtn1);
document.querySelector('#playBtn1').addEventListener('click',onPlayBtn1);
document.querySelector('#recordBtn2').addEventListener('click',onRecordBtn2);
document.querySelector('#playBtn2').addEventListener('click',onPlayBtn2);
document.querySelector('#recordBtn3').addEventListener('click',onRecordBtn3);
document.querySelector('#playBtn3').addEventListener('click',onPlayBtn3);
document.querySelector('#recordBtn4').addEventListener('click',onRecordBtn4);
document.querySelector('#playBtn4').addEventListener('click',onPlayBtn4);
let channel1 = [], channel2 = [], channel3 = [], channel4 = [];

let recordStartTime1;
let recordStartTime2;
let recordStartTime3;
let recordStartTime4;
let isRecording1 = false;
let isRecording2 = false;
let isRecording3 = false;
let isRecording4 = false;

function onKeyPress(ev) {
    let soundId;
    switch(ev.code) {
        case 'KeyA':
            soundId = 'boom';
            break;
        case 'KeyS':
            soundId = 'clap';
            break;
        case 'KeyD':
            soundId = 'hihat';
            break;
        case 'KeyF':
            soundId = 'kick';
            break;
        case 'KeyG':
            soundId = 'openhat';
            break;
        case 'KeyH':
            soundId = 'ride';
            break;
        case 'KeyJ':
            soundId = 'snare';
            break;
        case 'KeyK':
            soundId = 'tink';
            break;
        case 'KeyL':
            soundId = 'tom';
            break;
                
                
                
            
    }
    if(soundId) {
        const soundTime = Date.now() - recordStartTime1;
        const soundObj1 = {
            soundId:soundId,
            time1: soundTime
        }
        recplay.playSound(soundId);
        if(isRecording1 == true)
        {
            channel1.push(soundObj1);
        }
    }
    if(soundId) {
        const soundTime = Date.now() - recordStartTime2;
        const soundObj2 = {
            soundId:soundId,
            time2: soundTime
        }
        recplay.playSound(soundId);
        if(isRecording2 == true)
        {
            channel2.push(soundObj2);
        }
    }
    if(soundId) {
        const soundTime = Date.now() - recordStartTime3;
        const soundObj3 = {
            soundId:soundId,
            time3: soundTime
        }
        recplay.playSound(soundId);
        if(isRecording3 == true)
        {
            channel3.push(soundObj3);
        }
    }
    if(soundId) {
        const soundTime = Date.now() - recordStartTime4;
        const soundObj4 = {
            soundId:soundId,
            time4: soundTime
        }
        recplay.playSound(soundId);
        if(isRecording4 == true)
        {
            channel4.push(soundObj4);
        }
    }
}

function onRecordBtn1() {
    channel1 = recplay.onRecordBtn1(isRecording1, channel1);
    isRecording1 = !isRecording1;
    recordStartTime1 = Date.now();
}
function onRecordBtn2() {
    channel2 = recplay.onRecordBtn2(isRecording2, channel2);
    isRecording2 = !isRecording2;
    recordStartTime2 = Date.now();
}
function onRecordBtn3() {
    channel3 = recplay.onRecordBtn3(isRecording3, channel3);
    isRecording3 = !isRecording3;
    recordStartTime3 = Date.now();
}
function onRecordBtn4() {
    channel4 = recplay.onRecordBtn4(isRecording4, channel4);
    isRecording4 = !isRecording4;
    recordStartTime4 = Date.now();
}
function onPlayBtn1() {
    recplay.onPlayBtn1(channel1);
}

function onPlayBtn2() {
    recplay.onPlayBtn2(channel2);
}

function onPlayBtn3() {
    recplay.onPlayBtn3(channel3);
}

function onPlayBtn4() {
    recplay.onPlayBtn4(channel4);
}
