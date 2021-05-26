import React from 'react'

function PostDeleteButton(props) {

    return (
        <>
            <span onClick={() => props.deletePost(props.postId)}>❌</span>
        </>
    )
    
}

export default PostDeleteButton