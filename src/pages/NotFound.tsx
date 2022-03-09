import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const [second, setSecond] = useState(5);

  useEffect(()=> {
    const handler = setInterval(()=> {
      setSecond(second-1);
    }, 1000)
    if(second === 0) {
      navigate('/', {replace: true});
    }

    return(()=> {
        clearInterval(handler);
    })
  })

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center'
    }}>
      {'You do not have access to current page'}<br/>
      {`You will be redirected to the home page after ${second} seconds...`}
    </div>
  );
};

export default NotFound;