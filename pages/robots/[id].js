import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id, name, email } = router.query;

  return (
    <div>
      {id ? 
        <div>
          <p> This is the {id}th Robot info </p>
          <img src={`https://robohash.org/${id}?size=200x200`} alt='robots' />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      : null }
    </div>
  )
}

export default Post;
