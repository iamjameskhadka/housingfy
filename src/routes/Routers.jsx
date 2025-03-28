import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'

// feature project
import FeaturedPro from '../components/FeatureProject/FeaturePro';
import KnowMore from '../components/FeatureProject/KnowMore';

// about
import About from '../pages/About';

// commertial
import Commercial from '../components/Commercial/Commercial';
import CommercialDescription from '../components/Commercial/CommercialDescription';

// plot
import Plots from '../components/Plot/Plots';
import PlotDescription from '../components/Plot/PlotDescription'


// rent
import Rent from '../components/Rent/Rent';
import RentDescription from '../components/Rent/RentDescription';

// land
import Lands from '../components/Land/Lands';
import LandDescription from '../components/Land/LandDescription';

//display property
import DisplayProperty from '../pages/PropertyListing/DisplayProperty';
import PropertyDetails from '../pages/PropertyListing/PropertyDetails';


import ForgotPassword from '../pages/ForgotPassword';
import AdminRoutes from './AdminRoutes';
import LockScreen from '../pages/Auth/LockScreen';

const Routers = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feature-project" element={<FeaturedPro />} />
      <Route path="/feature-project/know-more" element={<KnowMore />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/commercial" element={<Commercial />} />
      <Route path="/commercial/description" element={<CommercialDescription />} />
      <Route path="/plots" element={<Plots />} />
      <Route path="/plots/description" element={<PlotDescription />} />
      <Route path="/rent/description" element={<RentDescription />} />
      {/* <Route path="/home-lands" element={<HomeLandDescription />} />
      <Route path="/home-plots" element={<HomePlotDescription />} /> */}
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/lands/description" element={<LandDescription />} />

      <Route path="/lock-screen" element={<LockScreen />} />
      <Route path="/admin/*" element={<AdminRoutes />} />

      <Route path='/display-properties' element={<DisplayProperty />} />
      <Route path='/display-properties/details' element={<PropertyDetails />} />
    </Routes>

  )
}

export default Routers
