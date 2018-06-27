import React, { Component } from 'react';
import {
  Cascader, Card, Spin, Icon, Modal, Button
} from 'antd';
import 'antd/dist/antd.less';
import './index.less';

const { Meta } = Card;

class GeneralStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ourServices: [
        { title: 'Cars', logo: <i className="fas fa-car" /> },
        { title: 'DJs', logo: <i className="fas fa-music" /> },
        { title: 'Gifts', logo: <i className="fas fa-gift" /> },
        { title: 'Halls', logo: <i className="fas fa-church" /> },
        { title: 'Dresses', logo: <i className="fas fa-female" /> },
        { title: 'Invitations', logo: <i className="fas fa-phone" /> },
        { title: 'Cake', logo: <i className="fas fa-birthday-cake" /> },
        { title: 'Videographers', logo: <i className="fas fa-video" /> },
        { title: 'Hair Dressers', logo: <i className="fas fa-paint-brush" /> },
        { title: 'Photographers', logo: <i className="fas fa-camera-retro" /> }
      ],
      catFilterOptions: [
        {
          value: 'dresses - category',
          label: 'Dresses'
        }, {
          value: 'cars - category',
          label: 'Cars'
        }, {
          value: 'perfumes - category',
          label: 'Perfumes'
        }
      ],
      priceFilterOptions: [
        {
          value: 'expensive - price',
          label: 'Expensive'
        }, {
          value: 'economic - price',
          label: 'Economic'
        }, {
          value: 'cheap - price',
          label: 'Cheap'
        }
      ],
      popularityFilterOptions: [
        {
          value: 'popular - popularity',
          label: 'Popular'
        }, {
          value: 'economic - popularity',
          label: 'Economic'
        }, {
          value: 'isolated - popularity',
          label: 'Isolated'
        }
      ],
      collectionsFilterOptions: [
        {
          value: 'none - collections',
          label: 'None'
        }
      ],
      cardVisible: false,
      cardData: undefined
    };
    this.openCard = this.openCard.bind(this);
    this.closeCard = this.closeCard.bind(this);
    this.filterChange = this.filterChange.bind(this);
    this._getItemsByFilter = this._getItemsByFilter.bind(this);
    this._postAddToCart = this._postAddToCart.bind(this);
  }

  filterChange([label]) {
    const { modifyFilters, filters } = this.props;
    const [filterValue, filterType] = label.split(' - ');
    modifyFilters({ ...filters, [filterType]: filterValue });
    this._getItemsByFilter({ ...filters });
  }

  openCard({ target }) {
    const { data } = this.props;
    const id = parseInt(target.id.split('-')[3]);
    const [cardData] = data.filter(item => item.id === id);
    this.setState({ ...this.state, cardVisible: true, cardData });
  }

  closeCard() {
    this.setState({ ...this.state, cardVisible: false });
  }

  _getItemsByFilter() {
    const { getItemsByFilter, filters } = this.props;
    getItemsByFilter({ ...filters });
  }

  componentDidMount() {
    this._getItemsByFilter();
  }

  _postAddToCart() {
    const { postAddToCart } = this.props;
    const { id } = this.state.cardData;
    postAddToCart({ id });
  }

  render() {
    const { data, isFetching } = this.props;
    const { cardData } = this.state;
    if (isFetching) return <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />;
    return (
      <div className="general-store">
        <img className="background" src="/assets/store-bg.png" />
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
        <div className="shop">
          <div className="shop__filter">
            <div className="shop__filter__cat">
              Category:
              {' '}
              <Cascader
                allowClear={false}
                className="shop__filter__cascader"
                options={this.state.catFilterOptions}
                onChange={this.filterChange}
              />
            </div>
            <div className="shop__filter__price">
              Price:
              {' '}
              <Cascader
                allowClear={false}
                className="shop__filter__cascader"
                options={this.state.priceFilterOptions}
                onChange={this.filterChange}
              />
            </div>
            <div className="shop__filter__pop">
              Popularity:
              {' '}
              <Cascader
                allowClear={false}
                className="shop__filter__cascader"
                options={this.state.popularityFilterOptions}
                onChange={this.filterChange}
              />
            </div>
            <div className="shop__filter__collections">
              Collections:
              {' '}
              <Cascader
                allowClear={false}
                className="shop__filter__cascader"
                options={this.state.collectionsFilterOptions}
                onChange={this.filterChange}
              />
            </div>
          </div>
          <div className="shop__items">
            {
              data && data.msg !== 'Found Nothing' && data.map(({
                id, name, price_value, price_currency, description, image_url
              }, index) => (
                <Card
                  key={index}
                  hoverable
                  id={`shop-item-card-${id}`}
                  className="shop__items__card"
                  cover={<img src={image_url} />}
                  onClick={this.openCard}
                >
                  <Meta
                    title={(
                      <div className="shop__items__card__head">
                        <span>
                          {name}
                        </span>
                        <span>
                          {price_value}
                          {' '}
                          ·
                          {' '}
                          {price_currency}
                        </span>
                      </div>
                      )}
                    description={description}
                  />
                </Card>
              ))
            }
            {
              cardData && (
              <Modal
                visible={this.state.cardVisible}
                title={cardData.name}
                onCancel={this.closeCard}
                footer={[
                  <Button key="back" onClick={this.closeCard}>
                    Return
                  </Button>,
                  <Button key="submit" type="primary" onClick={this._postAddToCart}>
                    Add to cart
                  </Button>,
                ]}
              >
                <img src={cardData.image_url} />
                <p>
                  {cardData.description}
                </p>
              </Modal>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralStore;
