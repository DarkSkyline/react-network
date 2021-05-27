import Post from './posts/Post'
import { ReactComponent as EmptyImageSVG } from '../images/empty.svg'

function Feed({posts, deletePost}) {
    
    return posts.length > 0 ? 
        (
            <>
                <h3>Feed</h3>
                {posts.map(p => <Post  key={p.id} postData={p} deletePost={deletePost}/>)}
            </>
        ) : 
        (
            <>
                <div align="center">
                    <EmptyImageSVG width="300"/>
                    <h3>
                        No posts to show
                    </h3>
                </div>
            </>
        )
}

export default Feed