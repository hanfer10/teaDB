import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default AllTea = () => {
  const dispatch = useDispatch();
  const tea = useSelector(state => state.tea);

  
}
