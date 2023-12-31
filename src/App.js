import React from 'react';
import './style.css';

function Layout() {
  return (
    <div className="container">
      <header>Header</header>
      <main>Main</main>
      <aside>Aside</aside>
      <footer>Footer</footer>
    </div>
  );
}

export default function App() {
  return <Layout />;
}
