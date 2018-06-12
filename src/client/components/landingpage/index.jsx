import React from 'react';
import SectionA from './landingSectionA/index.jsx';
import OurProcess from './ourProcess/index.jsx';
import LandingStarter from './landingStarter/index.jsx'
import SiteQoute from './siteQoute/index.jsx';
import ContactUs from './contactUs/index.jsx';
import Footer from '../global/footer';
import './index.less';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ourServices: [
        { title: 'Halls', logo: <i className="fas fa-church" /> },
        { title: 'Cars', logo: <i className="fas fa-car" /> },
        { title: 'Hair Dressers', logo: <i className="fas fa-paint-brush" /> },
        { title: 'Dresses', logo: <i className="fas fa-female" /> },
        { title: 'Invitations', logo: <i className="fas fa-phone" /> },
        { title: 'Cake', logo: <i className="fas fa-birthday-cake" /> },
        { title: 'DJs', logo: <i className="fas fa-music" /> },
        { title: 'Photographers', logo: <i className="fas fa-camera-retro" /> },
        { title: 'Videographers', logo: <i className="fas fa-video" /> },
        { title: 'Gifts', logo: <i className="fas fa-gift" /> }

      ]
    };
  }

  render() {
    return (
      <div>
        <SectionA />
        <OurProcess services={this.state.ourServices}/>
        <LandingStarter />
        <SiteQoute />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default LandingPage;
