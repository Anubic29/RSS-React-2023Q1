import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { AboutUs, Form, Main, NotFound } from '../pages';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Routing;
