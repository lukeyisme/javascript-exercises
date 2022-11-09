const repeatString = function(string, num) {
    
    phrase = new String(string)

    if(num == 0){
        phrase = '';
    }

    else if(num == 1){
        phrase = string;
    }

    else if(num >= 2){
        for(i = 1; i < num; i++){
            phrase += string;
        }
    }   
    
    else if(num < 0){
        phrase = 'ERROR';
    }

    return phrase
};

// Do not edit below this line
module.exports = repeatString;
