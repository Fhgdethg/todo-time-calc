import React, { Component } from 'react';
import s from './Controls.module.scss'

export default class Controls extends Component {
  render() {
    return (
      <button
        className={s.controls}
        onClick={this.props.onCl}
        data-control={this.props.controlType}>
        <p>
          {this.props.controlType}
        </p>
      </button>
    )
  }
}
