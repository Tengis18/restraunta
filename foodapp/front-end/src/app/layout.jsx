import React from 'react';
import './globals.css';

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&family=Geist+Mono:wght@400&display=swap"
        />
      </head>
      <body className="geist-sans geist-mono">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
