import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>(c) {currentYear} - Лабораторная работа №15</p>
      <p>Автор: Голомедова Дарья Романовна</p>
      <p>Дата создания: {new Date().toLocaleDateString('ru-RU')}</p>
    </footer>
  );
}

export default Footer;
