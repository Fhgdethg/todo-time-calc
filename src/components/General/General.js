import React, { Component } from 'react';
import s from './General.module.scss';
import { NavLink } from 'react-router-dom';

export default class General extends Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [
        {
          link: '/',
          text: 'Home'
        },
        {
          link: '/calc',
          text: 'Calculator'
        },
        {
          link: '/time',
          text: 'Time'
        },
      ]
    }
  }
  render() {
    let { links } = this.state

    return (
      <header className={s.header}>
        <nav>
          <ul>
            {
              links.map(item =>
                <li key={links.text}>
                  <NavLink
                    to={item.link}
                    className={({isActive}) => isActive ? s.header__active : ''}>
                    {item.text}
                  </NavLink>
                </li>)
            }
          </ul>
        </nav>
      </header>
    )
  }
}
