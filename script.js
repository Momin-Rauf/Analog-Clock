setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();

    hour_rotation = ((30*htime)+(mtime/2));
    minute_rotation = 6*mtime;
    second_rotation = 6*stime;

    hour.style.transform = `rotate(${hour_rotation}deg)`
    minute.style.transform = `rotate(${minute_rotation}deg)`
    second.style.transform = `rotate(${second_rotation}deg)`

    console.log(htime,mtime,stime)

},1000)