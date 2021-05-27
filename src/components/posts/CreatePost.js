import { useState } from 'react'

function CreatePost({ addPost }) {

    const [postText, setPostText] = useState('')
    const [postPicture, setPostPicture] = useState('')

    const onChangeHandlerText = (event) => {
        setPostText(event.target.value)
    }

    const onChangeHandlerPicture = (event) => {
        setPostPicture(event.target.value)
    }

    const createPostHandler = (event) => {
        addPost(postText, postPicture)
        setPostText('')
        setPostPicture('')
    }

    return (
        <>
            Text: <input onChange={onChangeHandlerText} type="text" value={postText} placeholder="Title of Post"/><br/>
            Image: <input onChange={onChangeHandlerPicture} type="text" value={postPicture} placeholder="Title of Post"/>
            {postText.trim() !== '' && <span onClick={createPostHandler}>✅</span>}
        </>
    )
}

export default CreatePost