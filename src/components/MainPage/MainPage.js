import './MainPage.scss';

import * as React from 'react';

import { isMobile } from 'react-device-detect';

import { usePageViewStore } from '../../store';
import About from '../About';
import Contact from '../Contact';
import CurriculumVitae from '../CurriculumVitae/CurriculumVitae';
import MyCareerTimeline from '../MyCareerTimeline';
import MyInfo from '../MyInfo/MyInfo';
import MySkills from '../MyTechnologies';
import NavBar from '../NavBar';


const MainPage = () => {
  const curriculumVitaeView = usePageViewStore(state => state.curriculumVitaeView)

  return (
    <div className="main">
      <div className="content">
        <NavBar />
        {(curriculumVitaeView && !isMobile) ? <CurriculumVitae /> : (
          <>
            <About />
            {/* <Divider /> */}
            <br />
            <MyCareerTimeline />
            {/* <Divider /> */}
            <br />
            <MySkills />
            {/* <Divider /> */}
            <br />
            <Contact />
            <br />
            <br />
            <MyInfo />
            <footer id="footer">
              <br />
              <br />
              <p id='copyright-text'>© All Rights Reserved.</p>
              <br />
            </footer>
          </>
        )}
      </div>
    </div>
  )
}

export default MainPage;
