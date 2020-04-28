import React, { useContext } from 'react'
import { UserContext } from '../App'

function Component2() {
    const user = useContext(UserContext);
    return (
        <div>
            {user.github}
        </div>
    )
}

export default Component2
