import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import FeaturedPro from '../components/FeatureProject/FeaturePro';
import KnowMore from '../components/FeatureProject/KnowMore';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature-project" element={<FeaturedPro />} />
      <Route path="/know" element={<KnowMore />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  )
}

export default Routers
