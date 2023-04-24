// import 'modern-normalize';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'Pages/Layout/Layout';

const Home = lazy(() => import('Pages/Home/Home'));
const Tweets = lazy(() => import('Pages/Tweets/Tweets'));

export const App = () => {
  return (    
     <Routes>
      <Route path="/" element={<Layout/>}>        
        <Route index element={<Home/>}/>
        <Route path="tweets" element={<Tweets/>} />      
      </Route>  
    </Routes>
  );
};
