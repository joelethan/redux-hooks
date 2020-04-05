import React, { useState, useEffect } from 'react';
import { Table, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { getTodos } from '../http';

const columns = [
  {
    title: 'ID ',
    dataIndex: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: text => <Link to='/text'>{text}</Link>,
  },
  {
    title: 'User',
    dataIndex: 'userId',
  }
];

export const Listings = () => {
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

  return (
    <div>
      {Loading ? <div className='container'>Loading....</div> :
      <div className='container'>
        <Divider />
        <Table
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          rowKey="id"
          columns={columns}
          dataSource={Todos}
        />
      </div>}
    </div>
  );
};
