/**
 * Created by 94437 on 2016/12/13.
 */
$(document).ready(function(){
    var keybox = $("#key-container");

    var str = "<div id='screen'> <span></span> </div> <table> <tr> <td colspan='3'><span>C</span></td> <td><span>+</span></td> </tr><tr" +
        "> <td><span>7</span></td><td><span>8</span></td> <td><span>9</span></td> <td><span>-</span></td> </tr> <tr" +
        "><td><span>4</span></td> <td><span>5</span></td><td><span>6</span></td> <td><span>*</span></td> </tr> <tr" +
        "> <td><span>1</span></td> <td><span>2</span></td> <td><span>3</span></td> <td><span>/</span></td> </tr> <tr" +
        "> <td colspan='2'><span>0</span></td> <td><span>.</span></td> <td><span>=</span></td> </tr> </table>";
        keybox.html(str);


    var decimalAdded = false;
    var keys = document.querySelectorAll('#key-container table tr td');
    var operators = ['+', '-', '*', '/'];
    document.querySelector('#screen').innerHTML = '';

    for(var i = 0; i < keys.length; i++){
        keys[i].onclick = function(e){

            var input = document.querySelector('#screen');
            var inputVal = input.innerHTML;

            var  btnValue = this.firstChild.innerHTML;

            if(btnValue == "C"){
                input.innerHTML = '';
                decimalAdded = false;
            }else if(btnValue == "="){
                var lastChar = inputVal[inputVal.length - 1];

                if(operators.indexOf(lastChar) == -1 && '.'.indexOf(lastChar) == -1){
                    var equation = inputVal;
                    input.innerHTML = '';
                    input.innerHTML = eval(equation);
                }
                decimalAdded = true;

            }else if(operators.indexOf(btnValue) > -1){

                var lastChar = inputVal[inputVal.length - 1];

                if(inputVal != '' && operators.indexOf(lastChar) == -1){
                    input.innerHTML+=btnValue;
                }else if(input != '' && operators.indexOf(lastChar) > -1){
                    input.innerHTML = inputVal.replace(/.$/, btnValue);
                }
                decimalAdded = false;
            }else if(btnValue == '.'){
                if(!decimalAdded){
                    input.innerHTML += btnValue;
                    decimalAdded = true;
                }
            }else{
                input.innerHTML += btnValue;
            }
        }
    }
});