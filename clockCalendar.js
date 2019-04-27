 // прототип с методами для нового элемента
let clockCalendar = Object.create(HTMLElement.prototype);

// регистрируем новый элемент в браузере
document.registerElement("clock-calendar", {
    prototype: clockCalendar
});

const elem = document.querySelector("clock-calendar");

//состояние моих часов\календаря 
clockCalendar.isShortFormat = true; 
clockCalendar.isUaDate = true;
clockCalendar.isClock = true;

//right mouse button
clockCalendar.switch = function (){
    if (this.isClock){ 
        this.isClock = false; 
    } else { 
        this.isClock = true; 
    }
}
//left mouse button
clockCalendar.switchClock = function (){
    this.isShortFormat = !this.isShortFormat;    
}
clockCalendar.switchCalendar = function (){
    this.isUaDate = !this.isUaDate;
}


clockCalendar.run = function(){
    if (this.isClock) {
        this.showClock();
    } else {
        this.showCalendar();
    }
}

clockCalendar.getFullTime = function(){
    let now = new Date();
    let fullTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    elem.innerHTML = fullTime;    
    let timerId = setInterval(function (){
        now = new Date();
        fullTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        elem.innerHTML = fullTime;
    }, 1000);  
    return timerId;  
}

clockCalendar.getShortTime = function(){ 
    let now = new Date();
    let shortTime = `${now.getHours()}:${now.getMinutes()}`;
    elem.innerHTML = shortTime;      
    let timerId = setInterval(function (){
        now = new Date();
        shortTime = `${now.getHours()}:${now.getMinutes()}`;
        elem.innerHTML = shortTime;        
    }, 60000);  
    return timerId;  
}

//Showing of Clocks in format
clockCalendar.showClock = function() {         
    if (this.isShortFormat) {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = this.getShortTime();
    } else if (!this.isShortFormat) {
        if (this.timerId){
            clearInterval(this.timerId);
        }
        this.timerId = this.getFullTime();
    }    
};

clockCalendar.getUaDate = function(){    
    let now = new Date();
    let interval = 3600000 - 60*60*1000*now.getHours() - 
            60*1000*now.getMinutes() - 1000*now.getSeconds();

    let timerId = setInterval(function (){
        let now = new Date();
        let uaDate = `${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()}`;
        elem.innerHTML = uaDate;       
        }, interval);
    return timerId;
}

clockCalendar.getEuDate = function(){
    let elem = document.querySelector("clock-calendar");
    let now = new Date();
    let interval = 3600000 - 60*60*1000*now.getHours() - 
            60*1000*now.getMinutes() - 1000*now.getSeconds();

    let timerId = setInterval(function (){
        let now = new Date();
        let year = now.getFullYear().toString().slice(2);
        let euDate = `${now.getMonth()+1}/${now.getDate()}/${year}`;
        elem.innerHTML = euDate;        
        }, interval);
    return timerId;
}

clockCalendar.showCalendar = function () {
    if (this.isUaDate) {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
        this.timerId = this.getUaDate();
    } else if (!this.isUaDate) {
        if (this.timerId){
            clearInterval(this.timerId);
        }
        this.timerId = this.getEuDate();
    }   
};


clockCalendar.run();






