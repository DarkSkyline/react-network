import { useState } from 'react'
import Feed from './components/Feed'
import Header from './components/Header'
import CreatePost from './components/posts/CreatePost'

let initalPosts = [
  {
    id: 1,
    text: 'Hello everyone!',
    likes: 30,
    author: 'Filipe Ferreira',
    authorPicture: 'https://picsum.photos/seed/filipeferreira/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-12/500/300',
    date: new Date(Date.now() - 5* 3600*1000),
  },
  {
    id: 4,
    text: 'React is good',
    likes: 9,
    author: 'Jean Paul',
    authorPicture: 'https://picsum.photos/seed/jeanpaul/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-55/500/300',
    date: new Date(Date.now() - 2 * 3600*1000),
  },
  {
    id: 55,
    text: 'Hello!',
    likes: 2,
    author: 'Antoine Dumont',
    authorPicture: 'https://picsum.photos/seed/antoinedumont/50/50',
    postPicture: 'https://picsum.photos/seed/postpicture-90/500/300',
    date: new Date(Date.now() - 3 * 3600*1000),
  }
]

const currentUser = {
  author: "New user",
  authorPicture: "https://picsum.photos/seed/profile53/50/50"
}

function App() {

  const [posts, setPosts] = useState(initalPosts)
  
  const addPost = (postText, postPicture) => {
    const id = Math.floor(1000 * Math.random())
    const newPost = {
      id: id,
      text: postText,
      likes: 0,
      author: currentUser.author,
      authorPicture: currentUser.authorPicture,
      postPicture: postPicture,
      date: new Date(),
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