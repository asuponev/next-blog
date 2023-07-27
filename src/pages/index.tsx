import { GetServerSideProps, NextPage } from 'next'

import { IPostData } from '@/types/posts.interface'
import { getPosts } from '@/services/posts.service'
import Layout from '@/components/layout/Layout'
import PostList from '@/components/post-list/PostList'
import PostPopup from '@/components/post-popup/PostPopup'

const Home: NextPage<IPostData> = ({ posts }) => {
  return (
    <Layout>
      {posts.length ? (
        <>
          <PostList posts={posts} />
          <PostPopup />
        </>
      ) : (
        <div>Posts not found</div>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<IPostData> = async () => {
  const posts = await getPosts()

  return {
    props: { posts },
  }
}

export default Home
