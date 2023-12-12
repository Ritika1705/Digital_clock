function displayTime1()
{
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if(hours < 10)
    {
        hours = "0" + hours;
    }

    if(mins < 10)
    {
        mins = "0" + mins;
    }

    if(secs < 10)
    {
        secs = "0" + secs;
    }

    var ct = hours + ":" + mins + ":" + secs;
    var clock = document.getElementById("time1");
    //console.log(ct);
    clock.innerHTML = ct;
}

function displayTime2()
{
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let session = "AM";

    if(hours > 12)
    {
        hours = hours - 12;
        session = "PM";
    }

    else if(hours===12)
    {
        if(mins > 0 || secs > 0)
        {
            session = "PM";
        }
    }

    if(hours === 0)
    {
        hours = 12;
        session = "AM";
    }   

    if(hours < 10)
    {
        hours = "0" + hours;
    }

    if(mins < 10)
    {
        mins = "0" + mins;
    }

    if(secs < 10)
    {
        secs = "0" + secs;
    }

    var ct = hours + ":" + mins + ":" + secs + " " + session;
    var clock = document.getElementById("time2");
    //console.log(ct);
    clock.innerHTML = ct;
}


setInterval(displayTime1,1000);
setInterval(displayTime2,1000);