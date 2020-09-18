var Validation = function(){
    this.kiemTraRong = function(value,name,selectorError){
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = `${name} không được để trống!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = ``;
        return true;
    }
    this.kiemTraLaChu = function(value,name,selectorError){
        var regexAllLetters = /^[A-Za-z]+$/; 
        if(regexAllLetters.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} phải là chữ!`;
        return false;
    }
    this.kiemTraEmail = function(value,name,selectorError){
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexEmail.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} không hợp lệ!`;
        return false;
    }
    this.kiemTraLaSo = function(value,name,selectorError){
        var regexAllNumber =  /^[+-]?\d+(\.\d+)?$/; 
        if(regexAllNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '';
            return true;
        }
        document.querySelector(selectorError).innerHTML = `${name} phải là số!`;
        return false;
    }
    this.kiemTraDoDai = function(value,name,selectorError,minLength,maxLength){
        // nếu độ dài giá trị nhập vào lớn hơn độ dài lớn nhất hoặc nhỏ nhất > ko hợp lệ
        if(value.trim().length > maxLength || value.trim().length <minLength){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength} kí tự!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    this.kiemTraGiaTri = function(value,name,selectorError,minValue,maxValue){
        if(Number(value) > maxValue || Number(value) < minValue){
            document.querySelector(selectorError).innerHTML = `${name} từ ${minValue} đến ${maxValue}!`;
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
}