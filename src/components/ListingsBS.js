import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import { getTodos } from '../http';
import TodoForm from './TodoForm';

export const Ant = () => {
  const [Loading, setLoading] = useState(true)
  const [Todos, setTodos] = useState([])

  useEffect(()=>{
    getTodos().then(er=>{
      setLoading(false)
      setTodos(er.data)
    })
  }, [])

  const tableData = () => {
    return Todos.map((todo, index)=>{
      const { userId, id, title } = todo;
      return (
        <tr key={index}>
          <th scope="row">{id}</th>
          <td onClick={()=>console.log(id)}>{title}</td>
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
      <table className="table table-hover">
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
