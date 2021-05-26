import { useState } from 'react'

function Header(props) {
    let [title, setTitle] = useState('React Network')
    
    const onClickHandler = () => {
        setTitle('Title Edited')
    }

    return (
        <>
            <h1>{title}</h1>
            <button onClick={onClickHandler}>Change title</button>
        </>
    )
}

export default Header