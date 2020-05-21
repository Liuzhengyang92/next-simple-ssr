import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p> This is the {id}th Robot info </p>
}

export default Post;
