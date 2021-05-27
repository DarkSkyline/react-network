import { useState } from 'react'
import Feed from './components/Feed'
import Header from './components/Header'
import CreatePost from './components/posts/CreatePost'

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

function App() {

  const [posts, setPosts] = useState(initalPosts)
  
  const addPost = (postText) => {
    const newPost = {
      id: Math.floor(1000 * Math.random()),
      text: postText,
      likes: 0,
      author: 'Jean Clause'
  }
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <>
      <Header />
      <CreatePost addPost={addPost} />
      <Feed posts={posts} deletePost={deletePost} />
     </>
  )
}

export default App;