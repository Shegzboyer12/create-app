import './App.css';

import React from 'react';
import Name from './name';
import Price from './price';
import Description from './description';
import Image from './image';

const App = () => {
  const firstName = "YourFirstName"; // replace with your actual first name

  return (
    <div className="container mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="your-image-url.jpg" alt="Your Name" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;