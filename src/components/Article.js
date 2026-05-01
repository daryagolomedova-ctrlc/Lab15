import React from 'react';

function Article({ page }) {
  const renderContent = () => {
    switch(page) {
      case 'news':
        return (
          <>
            <h1>Новости</h1>
            <p>Добро пожаловать в раздел новостей!</p>
          </>
        );
      case 'about':
        return (
          <>
            <h1>Южный Федеральный Университет</h1>
            <p>ЮФУ - один из крупнейших университетов России!</p>
          </>
        );
      case 'contacts':
        return (
          <>
            <h1>Контакты</h1>
            <p>Телефон: +7 (951) 525-30-18 </p>
          </>
        );
      case '404':
        return (
          <>
            <h1>404 - Страница не найдена!</h1>
            <p>Извините, запрашиваемоей страницы не сущесвует</p>
          </>
        );
      default:
        return (
          <>
            <h1>Добро пожаловать</h1>
            <p>Выберите раздел в меню выше</p>
          </>
        );
    }
  };

  return (
    <article className="article">
      {renderContent()}
    </article>
  );
}

export default Article;
