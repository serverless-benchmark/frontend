import React from 'react';
import Overhead from './sections/overhead/Overhead';
import Header from './components/Header';
import Coldstart from './sections/Coldstart';
import Footer from './components/Footer';
import useMetrics from './useMetrics';
import Roadmap from './sections/Roadmap';
import Disclaimer from './sections/Disclaimer';
import Spinner from './components/Spinner';
import Intro from './sections/Intro';
import Adverts from './sections/Adverts';
import Sponsors from './sections/Sponsors';

const App = () => {
  const metrics = useMetrics();

  return (
    <div className="w-screen h-full min-h-screen bg-gradient-br-blue-purple-light antialiased overflow-auto text-grey-darkest font-sans">
      <div className="container m-4 h-full mx-auto">
        <Header />
        <Intro />
        {metrics.hasOwnProperty('job-overhead-01') ? <div>
          <Overhead metrics={metrics} />
        </div> : <Spinner />}
        <Adverts/>
        {metrics.hasOwnProperty('job-coldstart-01') && <div>
          <Coldstart metrics={metrics} />
        </div>}
        <div className="flex justify-between w-full flex-wrap xl:flex-no-wrap mb-4">
          <div className="w-full xl:w-1/2 xl:mr-4 xl:flex-1 mb-4 xl:mb-0">
            <Roadmap />
          </div>
          <div className="w-full xl:w-1/2 xl:ml-4 xl:flex-1">
            <Disclaimer />
          </div>
        </div>
        <Sponsors/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
