import Link from 'next/link';

const Index = () => (
  <div className="container">
    <h1>SSR Magician</h1>
    <Link href='/about'>
      <button><h2>About</h2></button>
    </Link>
    <Link href='/robots'>
      <button><h2>Robots</h2></button>
    </Link>
  </div>
);

export default Index;
