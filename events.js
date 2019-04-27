function eventsOnLeftClick(){
    if (clockCalendar.isClock){ 
        clockCalendar.switchClock();        
        clockCalendar.run();
    } else {
        clockCalendar.switchCalendar();        
        clockCalendar.run();        
    }
}
elem.addEventListener ('click', eventsOnLeftClick);

function eventsOnRightClick(){
    clockCalendar.switch();
    clockCalendar.run();    
}
elem.addEventListener ('contextmenu', eventsOnRightClick);

function onMouseOver(){
    elem.style.backgroundColor = "#0c0c0c";
    elem.style.color = "#ffffff";
}

function onMouseOut(){
    elem.style.backgroundColor = "#cfcfcf";
    elem.style.color = "black";
}
elem.addEventListener ('mouseover', onMouseOver);
elem.addEventListener ('mouseout', onMouseOut);