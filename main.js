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

//let recordedSound = [];
let recordStartTime1;
let recordStartTime2;
let recordStartTime3;
let recordStartTime4;
let isRecording1 = false;
let isRecording2 = false;
let isRecording3 = false;
let isRecording4 = false;
//let stopRecording = 0;

function onKeyPress(ev) {
    console.log(ev)
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
        playSound(soundId);
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
        playSound(soundId);
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
        playSound(soundId);
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
        playSound(soundId);
        if(isRecording4 == true)
        {
            channel4.push(soundObj4);
        }
    }
}

function onRecordBtn1() {
    if(isRecording1)
    {
        isRecording1 = false;
    }
    else
    {
        isRecording1 = true;
        channel1 = [];
        recordStartTime1 = Date.now();
    }
}
function onPlayBtn1() {
    for(let index = 0; index < channel1.length; index++)
    {
        const soundObj1 = channel1[index];
        setTimeout(() =>
        {
            playSound(soundObj1.soundId);
        },
        soundObj1.time1)
    }
}
function onRecordBtn2() {
    if(isRecording2)
    {
        isRecording2 = false;
    }
    else
    {
        isRecording2 = true;
        channel2 = [];
        recordStartTime2 = Date.now();
    }
}
function onPlayBtn2() {
    for(let index = 0; index < channel2.length; index++)
    {
        const soundObj2 = channel2[index];
        setTimeout(() =>
        {
            playSound(soundObj2.soundId);
        },
        soundObj2.time2)
        
    }
}
function onRecordBtn3() {
    if(isRecording3)
    {
        isRecording3 = false;
    }
    else
    {
        isRecording3 = true;
        channel3 = [];
        recordStartTime3 = Date.now();
    }
}
function onPlayBtn3() {
    for(let index = 0; index < channel3.length; index++)
    {
        const soundObj3 = channel3[index];
        setTimeout(() =>
        {
            playSound(soundObj3.soundId);
        },
        soundObj3.time3)
    }
}
function onRecordBtn4() {
    if(isRecording4)
    {
        isRecording4 = false;
    }
    else
    {
        isRecording4 = true;
        channel4 =[];
        recordStartTime4 = Date.now();
    }
}
function onPlayBtn4() {
    for(let index = 0; index < channel4.length; index++)
    {
        const soundObj4 = channel4[index];
        setTimeout(() =>
        {
            playSound(soundObj4.soundId);
        },
        soundObj4.time4)
    }
}

function playSound(soundId)
{
    const sound = document.querySelector('#' + soundId);
    sound.play();
}

