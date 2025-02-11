import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import FeaturedPro from '../components/FeatureProject/FeaturePro';
import KnowMore from '../components/FeatureProject/KnowMore';
import About from '../pages/About';
import Commercial from '../components/Commercial/Commercial';
import Plots from '../components/PlotLand/Plots';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature-project" element={<FeaturedPro />} />
      <Route path="/know-more" element={<KnowMore />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/plot-land" element={<Plots />} />

    </Routes>
  )
}

export default Routers
