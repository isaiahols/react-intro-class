import React, { Component } from "react";
import calculatorImg from '../../calculator.png'


export class Calculator extends Component {
    constructor(props){
        super(props);

        this.state={
            header: 'Calculator',
            display: '0',
            operator: '',
            temp: 0,
            resetDisplay: false,
        }

        // this.setDisplay=this.setDisplay.bind(this);
    }

    updateHeader(val){
        this.setState({
            header: val,
        })
    };

    setDisplay(num){
        let display = this.state.display==='0'||this.state.resetDisplay? num: this.state.display + num;
        // add an auto calculate here that runs when you click something and there is an operater set
        // just call the calculateEquals function
        this.setState({
            display: display.length<13?display:this.state.display,
            resetDisplay: false,
        })
    };

    setOperator(operator){
        if(this.state.operator===''){
            this.setState({
                operator: operator,
                temp: this.state.display,
                display: '',
            })
        } else {
            let result = this.calculate();
            this.setState({
                temp: result,
                operator: operator,
                display: '',
            })
        }
    }

    calculate(){
        let result;


        switch (this.state.operator) {
            case '+':
                console.log('lets add: ' + this.state.temp + " and " + this.state.display);
                result = Number(this.state.temp) + Number(this.state.display);
                break;
            case '-':
                result = Number(this.state.temp) - Number(this.state.display);
                break;
            case '*':
                result = Number(this.state.temp) * Number(this.state.display);
                break;
            case '/':
                result = Number(this.state.temp) / Number(this.state.display);
                break;

            default:
                console.log('Now What?!?');

                break;
        }
        return result;
    }

    calculateEqulas(){
        if(this.state.operator===''){
            return;
        }
        
        let result=this.calculate();
        
        this.setState({
            display: result,
            operator: '',
            temp: 0,
            resetDisplay: true,
        })
    }

    clearDisplay(){
        this.setState({
            display:'0',
            // resetDisplay: true,
        })
    }


    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onClick={(e)=>this.updateHeader(e.target.value)} />
                <h1 id="header"> {this.state.header} </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">{this.state.display}</span>
                    </div>

                    <div className="btn clear" onClick={()=>this.clearDisplay()}></div>

                    <div className="btn zero" onClick={()=>this.setDisplay('0')} ></div>
                    <div className="btn one" onClick={() => this.setDisplay('1')}></div>
                    <div className="btn two" onClick={() => this.setDisplay('2')}></div>
                    <div className="btn three" onClick={() => this.setDisplay('3')}></div>
                    <div className="btn four" onClick={()=>this.setDisplay('4')}></div>
                    <div className="btn five" onClick={()=>this.setDisplay('5')}></div>
                    <div className="btn six" onClick={() => this.setDisplay('6')}></div>
                    <div className="btn seven" onClick={() => this.setDisplay('7')}></div>
                    <div className="btn eight" onClick={() => this.setDisplay('8')}></div>
                    <div className="btn nine" onClick={() => this.setDisplay('9')}></div>

                    <div className="btn equal" onClick={() => this.calculateEqulas()} ></div>
                    <div className="btn multiply" onClick={() => this.setOperator('*')} ></div>
                    <div className="btn divide" onClick={() => this.setOperator('/')}></div>
                    <div className="btn subtract" onClick={() => this.setOperator('-')}></div>
                    <div className="btn add" onClick={() => this.setOperator('+')}></div>
                </div>
            </div>
        );
    }
}

// export default Calculator;