import Link from 'next/link'

import Layout from '@/components/layout/Layout'

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div>
        <p>Page not found</p>
        <Link href="/">Back to home</Link>
      </div>
    </Layout>
  )
}

export default NotFound
