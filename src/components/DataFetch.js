import React, { useReducer, useEffect } from 'react';
import axios from "axios";

const intitialState = {
    loading: true,
    post: {},
    error:''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'fail':
            return {
                loading: false,
                post: [],
                error: 'An error occured'
            }
    
        default:
            return state;
    }
}
function DataFetch() {
    const [state, dispatch] = useReducer(reducer, intitialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/9')
          .then(res => dispatch({type: 'success', payload: res.data}))
          .catch(()=>dispatch({type: 'fail'}))
    }, [])
    return (
        <div>
            {state.loading && <div>Loading....</div>}
            {state.post.title}
            {state.error}
        </div>
    )
}

export default DataFetch
