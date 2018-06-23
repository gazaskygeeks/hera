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
      ],
      filters: {
        category: undefined,
        price: undefined,
        popularity: undefined,
        collections: undefined
      }
    };
    this.openFilterList = this.openFilterList.bind(this);
  }

  openFilterList({ target }) {
    target.nextSibling.classList.toggle('visible');
  }

  render() {
    return (
      <div className="general-store">
        <img className="background" src="/assets/roses&rings-ho.jpg" />
        <ul className="services">
          {
            this.state.ourServices
              .map(({ title, logo }, index) => (
                <li key={index}>
                  <span>
                    {logo}
                  </span>
                  <span className="tooltip">
                    {title}
                  </span>
                </li>
              ))}
        </ul>
        <div className="slideshow">
          <ul className="slideshow__wrapper">
            <li>
              First Slide
            </li>
            <li>
              Second Slide
            </li>
            <li>
              Third Slide
            </li>
            <li>
              Fourth Slide
            </li>
            <li>
              Fifth Slide
            </li>
          </ul>
        </div>
        <div className="shop">
          <div className="shop__filter">
            <div className="shop__filter__cat">
              <span className="shop__filter__title" onClick={this.openFilterList}>
                Category
                {' '}
                <i className="fas fa-caret-down" />
              </span>
              <div className="shop__filter__list">
                <input type="radio" name="cat-filter" id="cat-filter-1" value="all" />
                <label htmlFor="cat-filter-1">
                  All
                </label>
                <input type="radio" name="cat-filter" id="cat-filter-2" value="dresses" />
                <label htmlFor="cat-filter-2">
                  Dresses
                </label>
              </div>
            </div>
            <div className="shop__filter__price">
              <span className="shop__filter__title" onClick={this.openFilterList}>
                Price
                {' '}
                <i className="fas fa-caret-down" />
              </span>
              <div className="shop__filter__list" />
            </div>
            <div className="shop__filter__pop">
              <span className="shop__filter__title" onClick={this.openFilterList}>
                Popularity
                {' '}
                <i className="fas fa-caret-down" />
              </span>
              <div className="shop__filter__list" />
            </div>
            <div className="shop__filter__collections">
              <span className="shop__filter__title" onClick={this.openFilterList}>
                Collection
                {' '}
                <i className="fas fa-caret-down" />
              </span>
              <div className="shop__filter__list" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralStore;
