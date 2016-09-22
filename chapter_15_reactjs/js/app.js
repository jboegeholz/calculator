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

var calculator = new Calculator();

var CalculatorComponent = React.createClass({

    render: function (){
        return <div>
        <div id="display">
            <input id="result" class="result" type="text" value="0" maxlength="7"/><br/>
        </div>
        <div id="buttons">
            <button type="button" onClick={() => this.clickHandler("sqrt")} className="blue_button" >&radic;</button>
            <button type="button" onClick={() => this.clickHandler("C")} className="yellow_button"  >C</button>
            <button type="button" onClick={() => this.clickHandler("CI")} className="yellow_button" >CI</button>
            <button type="button" onClick={() => this.clickHandler("X")} className="blue_button"  >X</button><br/>
            <button type="button" onClick={() => this.clickHandler("7")}  >7</button>
            <button type="button" onClick={() => this.clickHandler("8")}  >8</button>
            <button type="button" onClick={() => this.clickHandler("9")}  >9</button>
            <button type="button" onClick={() => this.clickHandler("/")} className="blue_button"  value="/">/</button><br/>
            <button type="button" onClick={() => this.clickHandler("4")} >4</button>
            <button type="button" onClick={() => this.clickHandler("5")} >5</button>
            <button type="button" onClick={() => this.clickHandler("6")} >6</button>
            <button type="button" onClick={() => this.clickHandler("-")} className="blue_button"  value="-">-</button><br/>
            <button type="button" onClick={() => this.clickHandler("1")} >1</button>
            <button type="button" onClick={() => this.clickHandler("2")} >2</button>
            <button type="button" onClick={() => this.clickHandler("3")} >3</button>
            <button type="button" onClick={() => this.clickHandler("+")} className="blue_button"  value="+">+</button><br/>
            <button type="button" onClick={() => this.clickHandler("0")} >0</button>
            <button type="button" onClick={() => this.clickHandler(".")} >.</button>
            <button type="button" onClick={() => this.clickHandler("%")} className="blue_button" >%</button>
            <button type="button" onClick={() => this.clickHandler("=")} className="blue_button" >=</button>
        </div>
    </div>;
    },
    clickHandler: function (command){
        var result = calculator.evalClick(command);
        if(!(result % 1 === 0)){
            result = result.toFixed(7);
        }
        document.getElementById("result").value = result;
    }
});


ReactDOM.render(<CalculatorComponent />, document.getElementById('root'));

