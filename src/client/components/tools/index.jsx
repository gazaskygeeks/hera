import React, { Component } from 'react';
import ToolCard from './toolCard';
import './index.less';

class Tools extends Component {
  constructor() {
    super();
    this.state = {
      tools: [
        {
          icon: (<i className="fas fa-list-ol" />),
          title: 'Checklist',
          link: '/checklist'
        }, {
          icon: (<i className="fas fa-clipboard-list" />),
          title: 'Guest List',
          link: '#'
        }, {
          icon: (<i className="fas fa-headphones" />),
          title: 'DJs',
          link: '#'
        }, {
          icon: (<i className="fas fa-euro-sign" />),
          title: 'Currency Converter',
          link: '#'
        }, {
          icon: (<i className="fas fa-credit-card" />),
          title: 'Budget',
          link: '#'
        }, {
          icon: (<i className="fas fa-handshake" />),
          title: 'Vendors',
          link: '#'
        }
      ]
    };
  }

  render() {
    return (
      <div className="tools">
        <img className="background" src="/assets/wedding.png" />
        <div className="qoute">
          <i className="fas fa-quote-left purple-pink" />
          A good carpenter is a better carpenter with better tools
          <i className="fas fa-quote-right purple-pink" />
        </div>
        <div className="tools__body">
          {
            this.state.tools.map((tool, index) => <ToolCard {...tool} />)
          }
        </div>
      </div>
    );
  }
}

export default Tools;
