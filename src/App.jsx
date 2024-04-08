import './App.css'
import React, { Suspense } from 'react';
import Loader from './components/Loader';

const Banner = React.lazy(() => import('./components/Banner'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const REvents = React.lazy(() => import('./components/EventPannel/Recommended'));
const UEvents = React.lazy(() => import('./components/EventPannel/Upcomming'));

function App() {

  return (
    <>

      <Suspense fallback={
        <Loader />
        }>
        <Navbar />
        <Banner />
        <REvents />
        <UEvents />
      </Suspense>
    </>
  )
}

export default App
