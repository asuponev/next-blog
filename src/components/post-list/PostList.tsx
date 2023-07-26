import { IPost } from '@/types/posts.interface'
import Post from '@/components/post/Post'
import styles from './PostList.module.scss'

const PostList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <section className={styles['post-list']}>
      <div className={styles['post-list__content']}>
        {posts.map((post, i) => (
          <Post
            key={i}
            {...post}
          />
        ))}
      </div>
    </section>
  )
}

export default PostList
