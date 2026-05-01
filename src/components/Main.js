import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

function Main() {
  return (
    <main className="main">
      <Section />
      <Routes>
        <Route path="/news" element={<Article page="news" />} />
        <Route path="/about" element={<Article page="about" />} />
        <Route path="/contacts" element={<Article page="contacts" />} />
        <Route path="*" element={<Article page="404" />} />
        <Route path="/" element={<Article page="default" />} />
      </Routes>
      <Aside />
    </main>
  );
}

export default Main;
