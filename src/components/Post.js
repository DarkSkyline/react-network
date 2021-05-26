import { useState } from 'react'

function Post(props) {

    const [likes, setLikes] = useState(props.postData.likes)
    const [isLiked, setIsLiked] = useState(false)

    const onClickLikePostHandler = () => {
        const increment = isLiked ? -1 : 1
        setLikes(likes + increment)
        setIsLiked(!isLiked)
    }

    return <p>
        {props.postData.author}<br/>
        💬{props.postData.text}<br/>
        {likes}
        <button onClick={onClickLikePostHandler}>{isLiked ? 'unlike':'like'}</button>
    </p>
}

export default Post