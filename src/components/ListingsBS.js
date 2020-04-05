import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import { getTodos } from '../http';
import TodoForm from './TodoForm';

export const Ant = () => {
  const [Loading, setLoading] = useState(true)
  const [Todos, setTodos] = useState([])
  const [Completed, setCompleted] = useState([])

  useEffect(()=>{
    getTodos().then(er=>{
      setLoading(false)
      setTodos(er.data)
    })
  }, [])

  useEffect(()=>{
    console.log(Completed, ' new selected ', [2,3,5,6,1]);
  }, [Completed])

  // rowSelection object indicates the need for row selection
  const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
          setCompleted(selectedRowKeys)
          console.log(selectedRows, ' selectedRows');
      },
  };
  const tableData = () => {
    return Todos.map((todo, index)=>{
      const { userId, id, title } = todo;
      return (
        <tr key={index}>
          <th scope="row">{id}</th>
          <td>{title}</td>
          <td>{userId}</td>
        </tr>
      )
    })
  }
  
  return (
    <div className='container'>
      <Divider />
      <TodoForm />
      {Loading ? <div>Loading....</div>:
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          {tableData()}
        </tbody>
      </table>
      }
    </div>
  );
};
