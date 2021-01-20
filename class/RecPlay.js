

export class RecPlay {

    onRecordBtn1(isRecording1, channel1) {
        if(isRecording1)
        {
            isRecording1 = false;
            document.querySelector('#imgRecBtn1').src = "rec.jpg";
            return channel1;
        }
        else
        {
            isRecording1 = true;
            document.querySelector('#imgRecBtn1').src = "recstop.jpg";
            channel1 = [];
            return channel1;
        }
    }

    onPlayBtn1(channel1) {
        for(let index = 0; index < channel1.length; index++)
        {
            const soundObj1 = channel1[index];
            setTimeout(() =>
            {
                this.playSound(soundObj1.soundId);
            },
            soundObj1.time1)
        }
    }
    onRecordBtn2(isRecording2, channel2) {
        if(isRecording2)
        {
            isRecording2 = false;
            document.querySelector('#imgRecBtn2').src = "rec.jpg";
            return channel2;
        }
        else
        {
            isRecording2 = true;
            document.querySelector('#imgRecBtn2').src = "recstop.jpg";
            channel2 = [];
            return channel2;
        }
    }
    onPlayBtn2(channel2) {
        for(let index = 0; index < channel2.length; index++)
        {
            const soundObj2 = channel2[index];
            setTimeout(() =>
            {
                this.playSound(soundObj2.soundId);
            },
            soundObj2.time2)
            
        }
    }
    onRecordBtn3(isRecording3, channel3) {
        if(isRecording3)
        {
            isRecording3 = false;
            document.querySelector('#imgRecBtn3').src = "rec.jpg";
            return channel3;
        }
        else
        {
            isRecording3 = true;
            document.querySelector('#imgRecBtn3').src = "recstop.jpg";
            channel3 = [];
            return channel3;
        }
    }
    onPlayBtn3(channel3) {
        for(let index = 0; index < channel3.length; index++)
        {
            const soundObj3 = channel3[index];
            setTimeout(() =>
            {
                this.playSound(soundObj3.soundId);
            },
            soundObj3.time3)
        }
    }
    onRecordBtn4(isRecording4, channel4) {
        if(isRecording4)
        {
            isRecording4 = false;
            document.querySelector('#imgRecBtn4').src = "rec.jpg";
            return channel4;
        }
        else
        {
            isRecording4 = true;
            document.querySelector('#imgRecBtn4').src = "recstop.jpg";
            channel4 = [];
            return channel4;
        }
    }
    onPlayBtn4(channel4) {
        for(let index = 0; index < channel4.length; index++)
        {
            const soundObj4 = channel4[index];
            setTimeout(() =>
            {
                this.playSound(soundObj4.soundId);
            },
            soundObj4.time4)
        }
    }

    playSound(soundId)
    {
        const sound = document.querySelector('#' + soundId);
        sound.play();
    }
}
