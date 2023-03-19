import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { AboutUs, Main, NotFound } from '../pages';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routing;
