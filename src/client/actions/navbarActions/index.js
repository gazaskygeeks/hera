import { NAVBAR_COLLAPSE, NAVBAR_REVEAL } from '../../constants/actionTypes';

export const navbarCollapse =  () => ({ type: NAVBAR_COLLAPSE, isCollapsed: true});

export const navbarReveal =  () => ({ type: NAVBAR_REVEAL, isCollapsed: false});
