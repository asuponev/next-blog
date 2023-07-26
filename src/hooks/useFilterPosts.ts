import { useEffect, useState } from 'react'

import useSearch from './useSearch'
import { IPost } from '@/types/posts.interface'

const useFilterPosts = (posts: IPost[]) => {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const { value } = useSearch()

  const filterPosts = (target: string) => {
    const filtered = posts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(target.toLowerCase())
      const textMatch = post.text.toLowerCase().includes(target.toLowerCase())
      return titleMatch || textMatch
    })
    setFilteredPosts(filtered)
  }

  useEffect(() => {
    filterPosts(value)
  }, [value])

  return {
    filteredPosts,
  }
}

export default useFilterPosts
