import React, { useState } from 'react';
import s from './TodoUl.module.scss';
import del from './Delete/Delete.svg';
import setting from './Setting/Setting.svg';

export default function TodoUl({localSet, setDo, deleteDo}) {
  const [clBool, setClBool] = useState(false);
  let clText = '';

  let textEm = () => {
    this.setClBool(() => (!clBool))

    setTimeout(() => {
      clBool ? clText = s.list__emParagraph : clText = ''
    }, 1)
  }

  if (localSet !== null)
    localStorage.setItem('value', localSet)
  let storVal = JSON.parse(localStorage.getItem('value'));
  let values = [];
  let content = [];
  for (let i in storVal) values.push(storVal[i])

  for (let item of values) {
    if (item.length !== 0)
      content.push(
        <li
          key={item}
          className={s.list__item}>
          <div>
            <p className={`${s.list__paragrapf} ${clText}`}>
              {`${item}`}
            </p>
          </div>
          <div className={s.list__icons}>
            <img
              src={setting}
              alt="Setting"
              data-value={item}
              onClick={setDo}
            />
            <img
              src={del}
              alt="Delete"
              onClick={deleteDo}
              data-value={item}
              className={s.list__setting}
            />
            <span
              className={s.list__em}
              onClick={textEm}
            >!</span>
          </div>
        </li>
      )
  }

  if (content.length !== 0)
    return (
      <ul className={s.list}>
        {
          content.map(item => item)
        }
      </ul>
    )
  return <p className={s.list__noneInfo}>Нет задач</p>
}