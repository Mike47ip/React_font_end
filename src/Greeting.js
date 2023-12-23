import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from './actions'; // Import your action creator

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting.content}</h1>
    </div>
  );
}

export default Greeting;
