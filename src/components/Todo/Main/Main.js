import React, { Component, useState } from 'react';
import { useRef } from 'react';
import Form from './Form/Form';
import TodoUl from './TodoUl/TodoUl';

const Main = () => {
  const [st, setSt] = useState({
    nowVal: '',
    localSet: null
  })

  let inputRef = useRef(null);

  let {nowVal, focusInput, localSet} = st;

  let changeForm = e => {
    setSt((st) => ({ ...st, nowVal: e.target.value }));
  }

  let subForm = e => {
    e.preventDefault();
    let oldItemVal = [];
    let localObj = JSON.parse(localStorage.getItem('value'))

    for (let i in localObj) oldItemVal.push(localObj[i])

    oldItemVal.push(nowVal);
    let valuesObj = {};

    for (let i of new Set(oldItemVal)) {
      valuesObj[i] = i;
    }

    setSt((st) => ({
      ...st,
      localSet: JSON.stringify(valuesObj),
      nowVal: ''
    }))
    inputRef.current.focus()
  }

  let generateList = val => {
    let localArr = [];
    let localObj = JSON.parse(localStorage.getItem('value'));
    for (let i in localObj) localArr.push(localObj[i])
    let deleteArr = localArr.filter(item => { if (item !== val) return item })
    localObj = {}
    for (let i of deleteArr) localObj[i] = i
    setSt((st) => ({...st, localSet: JSON.stringify(localObj)}))
  }

  let deleteDo = e => {
    let val = e.target.dataset.value;
    generateList(val);
    inputRef.current.focus()
  }

  let settingDo = e => {
    let val = e.target.dataset.value;
    setSt((st) => ({
      ...st,
      nowVal : val
    }))
    generateList(val);
    inputRef.current.focus()
  }


  return (
    <>
      <Form
        formChange={changeForm}
        formSub={subForm}
        formVal={st.nowVal}
        inputRef={inputRef}
      />
      <TodoUl
        deleteDo={deleteDo}
        setDo={settingDo}
        localSet={st.localSet}
      />
    </>
  )
}

export default Main


