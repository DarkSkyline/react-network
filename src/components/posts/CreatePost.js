import { useState } from 'react'

function CreatePost() {

    const [postText, setPostText] = useState('')

    const onChangeHandler = (event) => {
        setPostText(event.target.value)
    }

    return (
        <>
            <input onChange={onChangeHandler} type="text" value={postText} placeholder="Title of Post"/>
            <span>✅</span>
        </>
    )
}

export default CreatePost