import React, { Component } from 'react'
import Area from './Area/Area'
import Controls from './Controls/Controls';
import s from './Calculator.module.scss'
import Number from './Number/Number';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      controls: ['+', '-', '*', '/', 'C', '='],
      out: [],
    }
  }

  controlOnCl(e) {
    let dataVal = e.target.dataset.control;
    if (dataVal !== '=' && dataVal !== 'C')
      this.setState({
        out: [
          this.state.out[0],
          dataVal,
          this.state.out[2],
        ]
      })
    else if (dataVal === '=') {
      for (let i of this.state.out) {
        if (i === undefined) return
      }

      switch (this.state.out[1]) {
        case '+':
          this.setState({
            out: [+this.state.out[0] + +this.state.out[2]]
          })
          break;
        case '-':
          this.setState({
            out: [+this.state.out[0] - +this.state.out[2]]
          })
          break;
        case '*':
          this.setState({
            out: [this.state.out[0] * this.state.out[2]]
          })
          break;
        case '/':
          this.setState({
            out: [this.state.out[0] / this.state.out[2]]
          })
          break;
      }
    }
    else if (dataVal === 'C') {
      this.setState({out: []})
    }
  }

  numOnCl(e) {
    let dataVal = e.target.dataset.num;

    if (typeof this.state.out[0] === 'number')
      this.setState({
        out: [
          this.state.out[0],
          this.state.out[1],
          +dataVal
        ]
      })
    else
      this.setState({
        out: [
          +dataVal,
          this.state.out[1],
          this.state.out[2],

        ]
      })
  }

  render() {
    return (
      <div className={s.calculator}>
        <Area out={this.state.out} />
        <div className={s.calculator__functional}>
          <div className={s.calculator__numbers}>
            {
              this.state.numbers.map(item =>
                <Number
                  key={item}
                  num={item}
                  onCl={this.numOnCl.bind(this)}
                />)
            }
          </div>
          <div className={s.calculator__controls}>
            {
              this.state.controls.map(item =>
                <Controls
                  key={item}
                  controlType={item}
                  onCl={this.controlOnCl.bind(this)}
                />)
            }
          </div>
        </div>
      </div>
    )
  }
}