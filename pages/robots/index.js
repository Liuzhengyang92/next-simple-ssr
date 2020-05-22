import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Card from '../../components/Card';
import SearchBox from '../../components/SearchBox';

const Robots = (props) => {
  const robotRef = React.createRef();
  const [filteredRobots, setFilteredRobots] = React.useState(props.robots);
  const onSearchFieldChange = (event) => {
    const filteredRobots = props.robots.filter(robot => robot.name.toLocaleLowerCase().includes(event.target.value));
    setFilteredRobots(filteredRobots);
  }

  return (
    <div className='container'>
      <h1>Robots</h1>
      <Link href='/'>
        <button><h2>Home</h2></button>
      </Link>
      <SearchBox onSearchChange={onSearchFieldChange} />
      <div className='content'>
        {
          filteredRobots.map(robot => (
            <li key={robot.id}>
              <Link href={`robots/${robot.id}`}>
                {/* <a>{robot.name}</a> */}
                <Card name={robot.name} id={robot.id} email={robot.email} ref={robotRef} />
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

Robots.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    robots: data
  }
}

export default Robots;
