import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
import { usePageViewStore } from '../store';
import LanguageToggle from './LanguageToggle';


const NavBar = () => {
  const { t } = useTranslation()
  const { curriculumVitaeView, setCurriculumVitaeView } = usePageViewStore()

  const pageChangeCallback = () => {
    if (curriculumVitaeView) setCurriculumVitaeView(false)

    setIsMobileMenuOpen(false)
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop menu */}
      <AppBar id="navbar" position="sticky" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Box className="navbar-container">
            {/* eslint-disable-next-line */}
            <a className="link no-mobile" href="#" onClick={pageChangeCallback}>
              {t('Home')}
            </a>
            <a className="link no-mobile" href="#my-technologies" onClick={pageChangeCallback}>
              {t('Skills')}
            </a>
            <a className="link no-mobile" href="#my-career" onClick={pageChangeCallback}>
              {t('Career')}
            </a>
            <a className="link no-mobile" href="#contact" onClick={pageChangeCallback}>
              {t('Contact')}
            </a>
            <div className="no-mobile" >
              <LanguageToggle />
            </div>

          </Box>
        </Toolbar>
      </AppBar>
      <button id="mobile-floating-menu-button" className="link mobile menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <MenuIcon fontSize='large' color="black" className={`menu-mobile-icon ${isMobileMenuOpen ? 'hide' : 'show'}`} />
        <CloseIcon fontSize='large' color="black" className={`menu-mobile-icon ${isMobileMenuOpen ? 'show' : 'hide'}`} />

      </button>
      <div id="mobile-menu" className={`mobile ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        {/* eslint-disable-next-line */}
        <a className="link" href="#" onClick={pageChangeCallback}>
          {t('Home')}
        </a>
        <a className="link" href="#my-technologies" onClick={pageChangeCallback}>
          {t('Skills')}
        </a>
        <a className="link" href="#my-career" onClick={pageChangeCallback}>
          {t('Career')}
        </a>
        <a className="link" href="#contact" onClick={pageChangeCallback}>
          {t('Contact')}
        </a>
        <LanguageToggle />
      </div>
    </>
  );
}


export default NavBar;