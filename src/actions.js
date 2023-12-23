const fetchRandomGreeting = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/random_greeting');
  const data = await response.json();
  dispatch({ type: 'SET_GREETING', payload: data });
};

export default fetchRandomGreeting;