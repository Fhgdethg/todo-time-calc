import React, { Component } from 'react';
import s from './Number.module.scss'

export default class Number extends Component {
  render() {
    return (
      <button
        className={s.num}
        data-num={this.props.num}
        onClick={this.props.onCl}>
        <p>
          {this.props.num}
        </p>
      </button>
    )
  }
}
