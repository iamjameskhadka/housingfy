import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import FeaturedPro from '../components/FeatureProject/FeaturePro';
import KnowMore from '../components/FeatureProject/KnowMore';
import About from '../pages/About';
import Commercial from '../components/Commercial/Commercial';
import Plots from '../components/PlotLand/Plots';
import CommercialDescription from '../components/Commercial/CommercialDescription';
import PlotDescription from '../components/PlotLand/PlotDescription';
import Rent from '../components/Rent/Rent';
import RentDescription from '../components/Rent/RentDescription';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature-project" element={<FeaturedPro />} />
      <Route path="/know-more" element={<KnowMore />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/commercial-description" element={<CommercialDescription />} />
      <Route path="/plot-land" element={<Plots />} />
      <Route path="/plot-description" element={<PlotDescription />} />
      <Route path="/rent-description" element={<RentDescription />} />
    </Routes>
  )
}

export default Routers
