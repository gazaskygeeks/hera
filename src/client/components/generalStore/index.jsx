import React, { Component } from 'react';
import './index.less';

class GeneralStore extends Component {
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
      <div className="general-store">
        <img className="background" src="/assets/roses&rings-ho.jpg" />
        <ul className="services">
          {
            this.state.ourServices
            .map(({ title, logo }, index) => (<li key={index}><span>{logo}</span><span className="tooltip">{title}</span></li>))}
        </ul>
        <div className="slideshow">
          <ul className="slideshow__wrapper">
            <li>First Slide</li>
            <li>Second Slide</li>
            <li>Third Slide</li>
            <li>Fourth Slide</li>
            <li>Fifth Slide</li>
          </ul>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default GeneralStore;
