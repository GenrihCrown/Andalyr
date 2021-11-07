import { Route, Routes } from 'react-router';
import About from './About/About';
import Home from './Home/Home';
import Articles from './Universe/Articles/Articles';
import Chapters from './Universe/Chapters/Chapters';

export const URLS = {
  HOME: { name: 'Главная', path: '/', element: <Home /> },
  CHAPTERS: {
    name: 'Главы',
    path: '/universe/chapters',
    element: <Chapters />,
  },
  ARTICLES: {
    name: 'Статьи',
    path: '/universe/chapters',
    element: <Articles />,
  },
  UNIVERSE: {
    name: 'Вселенная',
    path: () => URLS.CHAPTERS.path,
    element: <Chapters />,
  },
  ABOUT: { name: 'О нас', path: '/about', element: <About /> },
};

export default function Pages() {
  const { HOME, CHAPTERS, ARTICLES, ABOUT } = URLS;

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Routes>
        <Route {...HOME} />
        <Route {...CHAPTERS} />
        <Route {...ARTICLES} />
        <Route {...ABOUT} />
        {/* <Route path={'/news'}>
        <Route path={':id'} element={<Home />} />
      </Route> */}
      </Routes>
    </div>
  );
}
