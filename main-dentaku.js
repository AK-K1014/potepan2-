
function disp(n){ 
    let obj = document.getElementById("result");
    obj.value += n;
}

function enter(){
    let obj = document.getElementById("result");
    obj.value = eval(obj.value);
    EnterFlag = true;
}

function update(){
    let obj = document.getElementById("result");
    obj.value = "";
}

function operator(elem) {
    if(result.value.slice(-1) === '+'){
     return;
    }else if(result.value.slice(-1) === '-'){
     return;
    }else if(result.value.slice(-1) === '*'){
     return;
    }else if(result.value.slice(-1) === '/'){
     return;
    }else if(result.value.slice(-1) === '.'){
     return;
    }else{
    result.value = result.value + elem.value;
    }
    }