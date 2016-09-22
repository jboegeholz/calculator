function Calculator() {
    this.register = new Array(2);
    this.register[0] = 0;
    this.register[1] = 0;
    this.current_register = 0;
    this.operator = "";

    this.evalClick = function(command) {
        var resultStr = "";
        switch (command) {
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
                resultStr = this.register[this.current_register] + command;
                this.register[this.current_register] = parseInt(resultStr);
                break;
            case "C":
                this.current_register = 0;
                this.register[0] = 0;
                this.register[1] = 0;
                break;
            case "CI":
                this.register[this.current_register] = 0;
                break;
            case "+":
            case "*":
            case "/":
                this.current_register = 1;
                this.operator = command;
                return this.register[0];
                break;
            case "sqrt":
                this.register[0] = Math.sqrt(this.register[0]);
                return this.register[0];
                break;
            case "=":
                this.current_register = 0;
                switch (this.operator) {
                    case "+":
                        this.register[0] = this.register[1] + this.register[0];
                        break;
                    case "*":
                        this.register[0] = this.register[1] * this.register[0];
                        break;
                    case "/":
                        this.register[0] = this.register[0] / this.register[1];
                        break;
                }
                break;
        }
        console.log("Current Register: " + this.current_register + ": " + this.register[this.current_register]);
        return this.register[this.current_register];
    }
}