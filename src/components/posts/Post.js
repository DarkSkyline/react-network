import { useState } from 'react'
import PostText from './PostText'
import PostDeleteButton from './PostDeleteButton'

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
        <PostText text={props.postData.text}/>
        {likes}
        <span onClick={onClickLikePostHandler}>{isLiked ? '👎🏻':'👍🏼'}</span>
    
        <PostDeleteButton postId={props.postData.id} deletePost={props.deletePost} />
    </p>
}

export default Post