import { useState } from 'react'
import moment from 'moment'
import PostText from './PostText'
import PostDeleteButton from './PostDeleteButton'

function Post({ postData, deletePost}) {

    const [likes, setLikes] = useState(postData.likes)
    const [isLiked, setIsLiked] = useState(false)

    const onClickLikePostHandler = () => {
        const increment = isLiked ? -1 : 1
        setLikes(likes + increment)
        setIsLiked(!isLiked)
    }

    return <p>
        <img src={postData.authorPicture} alt={postData.author + ' picture'}/>
        {postData.author}<br/>
        {moment(postData.date).format('HH:mm')}<br/>
        <PostText text={postData.text}/>
        <img src={postData.postPicture} alt={postData.author + ' post picture'}/>
        {likes}<br/>
        <span onClick={onClickLikePostHandler}>{isLiked ? '👎🏻':'👍🏼'}</span>
    
        <PostDeleteButton postId={postData.id} deletePost={deletePost} />
    </p>
}

export default Post