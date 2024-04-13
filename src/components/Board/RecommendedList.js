import React, { Component } from 'react';
import './Output/SymbolOutput/SymbolOutput.css';
import Symbol from './Symbol';
import Scroll from './Output/SymbolOutput/Scroll';
import BoardContainer from './Board.container';

class RecommendedList extends Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
    this.state = {
      openPhraseShareDialog: false
    };
  }

  createTile(label) {
    return {
      image: '',
      label: label,
      id: '',
      backgroundColor: 'rgb(255, 241, 118)',
      labelKey: ''
    };
  }
  render() {
    const { onTileClick, labels } = this.props;

    return (
      <div style={{ height: 40 }}>
        <button
          onClick={() => {
            BoardContainer.APIHandler.refreshRecList();
          }}
        >
          Refresh
        </button>
        <Scroll scrollContainerReference={this.scrollContainerRef}>
          {labels.map((label, index) => (
            <div
              className={
                'live' === 'live'
                  ? 'LiveSymbolOutput__value'
                  : 'SymbolOutput__value'
              }
              key={index}
              onClick={() => onTileClick(this.createTile(label))}
            >
              <Symbol
                className="SymbolOutput__symbol"
                label={label}
                labelpos="Below"
              />
            </div>
          ))}
        </Scroll>
      </div>
    );
  }
}

export default RecommendedList;
