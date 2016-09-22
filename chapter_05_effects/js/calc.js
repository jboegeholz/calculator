    var register = new Array(2);
    register[0] = 0;
    register[1] = 0;
    var current_register = 0;
    var operator = "";

    function evalClick(command){
        var resultStr = "";
        switch (command){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                resultStr = register[current_register] + command;
                register[current_register] =  parseInt(resultStr);
                break;
            case "C":
                current_register = 0;
                register[0] = 0;
                register[1] = 0;
                break;
            case "CI":
                register[current_register] = 0;
                break;
            case "+":
            case "*":
            case "/":
                current_register = 1;
                operator = command;
                return register[0];
                break;
            case "sqrt":
                register[0] = Math.sqrt(register[0]);
                return register[0];
                break;
            case "=":
                current_register = 0;
                switch (operator){
                    case "+":
                        register[0] = register[1] + register[0];
                        break;
                    case "*":
                        register[0] = register[1] * register[0];
                        break;
                    case "/":
                        register[0] = register[0] / register[1];
                        break;
                }
                break;
        }
        console.log("Current Register: " + current_register + ": " + register[current_register]);
        return register[current_register];
    }