import React, { useState } from 'react'
import { addTodo } from '../http';

export default function TodoForm() {
    const [Todo, setTodo] = useState('');
    const [Message, setMessage] = useState(null);
    const [Loading, setLoading] = useState(false);

    const submitValue = e => {
        e.preventDefault();
        setLoading(true)
        const frmdetails = {
            'userId' : 4,
            'title' : Todo,
            'completed': false
        }
        addTodo(frmdetails)
            .then(resp=>{
                console.log(resp, ' resp');
                
                setMessage(resp.data.title)
                console.log(Message);
                setLoading(false)
                setTodo('')
            })
    }

    return (
        <div>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <label htmlFor="todo" className="sr-only">Todo</label>
                    <input type="text" className="form-control" id="todo" value={Todo} 
                        onChange={e => setTodo(e.target.value)} placeholder="Add Todo" />
                </div>
                <button type="submit" className="btn btn-primary mb-2" onClick={submitValue}>Confirm identity</button>
                {Loading ? <div className="spinner-grow ml-2" role="status"><span className="sr-only">Loading...</span></div>: null}
            </form>
            {Message?<small>{Message}</small>:null}
        </div>
    )
}
