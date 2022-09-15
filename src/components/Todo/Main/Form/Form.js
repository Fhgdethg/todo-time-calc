import React, { Component, useEffect } from 'react';
import s from './Form.module.scss';

export default function Form({inputRef, formSub, formChange, formVal}) {
  useEffect(() => inputRef.current.focus(), []);

    return (
      <form
        className={s.form}
        onSubmit={formSub}>
        <input
          type="text"
          className={s.form__text}
          onChange={formChange}
          placeholder="Введите задачу"
          value={formVal}
          ref={inputRef}
        />
        <input
          type="submit"
          className={s.form__submit}
          value="Добавить"
        />
      </form>
    )
}