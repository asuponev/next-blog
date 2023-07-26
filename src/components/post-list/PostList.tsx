import useSearch from '@/hooks/useSearch'
import useFilterPosts from '@/hooks/useFilterPosts'
import { IPost } from '@/types/posts.interface'
import Post from '@/components/post/Post'
import styles from './PostList.module.scss'

const PostList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  const { isSearchOpen } = useSearch()
  const { filteredPosts } = useFilterPosts(posts)
  const additionalСlass = isSearchOpen ? styles['post-list--opensearch'] : ''

  return (
    <section className={`${styles['post-list']} ${additionalСlass}`}>
      <div className={styles['post-list__content']}>
        {filteredPosts.map((post, i) => (
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
