import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { code } = router.query

  return <p>Code: {code}</p>
}

export default Post