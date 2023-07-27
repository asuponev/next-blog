import { GetServerSideProps, NextPage } from 'next'

import { IPostData } from '@/types/posts.interface'
import API_URL from '@/constants/api-url'
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
  const res = await fetch(API_URL)
  let posts = []

  if (res.ok) {
    posts = await res.json()
  }

  return {
    props: { posts },
  }
}

export default Home
