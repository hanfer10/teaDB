import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default AllTea = () => {
  const dispatch = useDispatch();
  const teaStatus = useSelector(state => state.tea.status);
  const tea = useSelector(state => state.tea.tea);

  useEffect(() => {
    if (teaStatus === 'idle') {
      dispatch(fetchTea());
    }
  }, [teaStatus, dispatch]);

  return (
    <p>Hi</p>
  )
}
