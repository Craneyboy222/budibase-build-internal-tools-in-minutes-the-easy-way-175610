import React from 'react';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Enterprise App Builder</title>
        <meta name="description" content="Build enterprise applications easily" />
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>&copy; 2025 Enterprise App Builder</footer>
      </body>
    </html>
  );
};

export default RootLayout;