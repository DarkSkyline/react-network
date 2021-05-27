import { useState } from 'react'

function CreatePost({ addPost }) {

    const [postText, setPostText] = useState('')

    const onChangeHandler = (event) => {
        setPostText(event.target.value)
    }

    const createPostHandler = (event) => {
        addPost(postText)
        setPostText('')
    }

    return (
        <>
            <input onChange={onChangeHandler} type="text" value={postText} placeholder="Title of Post"/>
            {postText.trim() !== '' && <span onClick={createPostHandler}>✅</span>}
        </>
    )
}

export default CreatePost