import React, { Component } from 'react';
import s from './Area.module.scss'

export default class Area extends Component {
  render() {
    let out = this.props.out;
    let outStr = '';
    out.forEach(element => {
      if (element === undefined) outStr += ''
      else outStr += `${element}`
    });

    return (
      <div className={s.area} >
        {outStr}
      </div>
    )
  }
}
