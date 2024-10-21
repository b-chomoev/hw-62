import { Link, Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <Link to={'/portfolio/poker'} className='btn btn-dark'>Start Poker Game</Link>
      <Outlet />
    </div>
  );
};

export default Portfolio;