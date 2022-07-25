import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function GlobalHeader() {
  return (
    <nav className='navbar navbar-expand bg-dark'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>teaDB</Link>
      </div>
    </nav>
  )
}
