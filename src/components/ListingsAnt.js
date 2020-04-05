import React, { useState, useEffect } from 'react';
import { Table, Divider } from 'antd';
import { getTodos } from '../http';


export const Listings = () => {
  const [Loading, setLoading] = useState(true)
  const [Todos, setTodos] = useState([])

  useEffect(()=>{
    getTodos().then(er=>{
      setLoading(false)
      setTodos(er.data)
    })
  }, [])

  const columns = [
    {
      title: 'ID ',
      dataIndex: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      render: text => <div data-id={text} onClick={handleClick}>{text}</div>,
    },
    {
      title: 'User',
      dataIndex: 'userId',
    }
  ];

  const handleClick = (e) => {
    console.log('Text: ', e.currentTarget.dataset.id);
  }
  return (
    <div>
      {Loading ? <div className='container'>Loading....</div> :
      <div className='container'>
        <Divider />
        <Table
          rowKey="id"
          columns={columns}
          dataSource={Todos}
        />
      </div>}
    </div>
  );
};
