import { useState } from 'react'
import Post from './posts/Post'

let initalPosts = [
  {
    id: 1,
    text: 'Hello everyone!',
    likes: 30,
    author: 'Filipe Ferreira'
  },
  {
    id: 4,
    text: 'React is good',
    likes: 9,
    author: 'Jean Paul'
  },
  {
    id: 55,
    text: 'Hello!',
    likes: 2,
    author: 'Antoine Dumont'
  }
]

function Feed(props) {

    const [posts, setPosts] = useState(initalPosts)

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }
    
    return (
        <>
            <h3>Feed</h3>
            {posts.map(p => <Post  key={p.id} postData={p} deletePost={deletePost}/>)}
        </>
    )
}

export default Feed