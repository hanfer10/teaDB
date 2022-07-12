import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';


export default Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => {
    navigate('/tea');
  };

  return (
    <div className='home'>
      <h1>Welcome to teaDB</h1>
      <Button onClick={onClick} className='button' variant='light'>Browse Tea</Button>
    </div>
  )
};


