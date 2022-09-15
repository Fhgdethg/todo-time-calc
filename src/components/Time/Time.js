import React, { useState, useEffect } from 'react';
import s from './Time.module.scss';

export default function Time() {
  let [data, setData] = useState(new Date());
  let timerId = null;

  useEffect(() => {
    timerId = setInterval(() => setData(new Date()))
  }, []);

  return (
    <div className={s.time}>
      <h1 className={s.time__title}>Сейчас</h1>
      <p className={s.time__value}>
        {data.toLocaleTimeString()}
      </p>
    </div>
  )
}