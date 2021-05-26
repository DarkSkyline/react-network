import { useState } from 'react'

import Post from './components/Post'
import Header from './components/Header'

let initalPosts = [
  {
    id: 1,
    text: 'bonjour tout le monde!',
    likes: 30,
    author: 'Filipe Ferreira'
  },
  {
    id: 4,
    text: 'Vive le React',
    likes: 9,
    author: 'Jean Paul'
  },
  {
    id: 55,
    text: 'bonjour!',
    likes: 2,
    author: 'Antoine Dumont'
  }
]

function App() {

  const [posts, setPosts] = useState(initalPosts)

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id != 55))
  }

  return (
    <>
      <Header />
      <h3>Fil d'actualité</h3>
      <button onClick={deletePost}>Delete post 55</button>
      {posts.map(p => <Post postData={p} key={p.id}/>)}
    </>
  )
}

export default App;