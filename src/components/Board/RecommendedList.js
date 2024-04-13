import React, { Component } from 'react';
import './Output/SymbolOutput/SymbolOutput.css';
import Symbol from './Symbol';
import Scroll from './Output/SymbolOutput/Scroll';
import BoardContainer from './Board.container';

class RecommendedList extends Component {
  constructor(props) {
    super(props);
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
    const { onTileClick, labels, forceAddTile } = this.props;

    return (
      <React.Fragment>
        <div style={{ display: 'flex' }}>
          <button
            className="rl_button"
            style={{ 'background-color': '#3f51b5', marginLeft: 10 }}
            onClick={() => {
              BoardContainer.APIHandler.refreshRecList();
            }}
          >
            Refresh
          </button>
        </div>

        <div className="rl_container" style={{}}>
          <div>
            {labels.map((label, index) => (
              <div
                className={'rl_label'}
                onClick={() => {
                  let tiles = [];
                  let tokens = label.split(' ');
                  for (let t in tokens) tiles.push(this.createTile(tokens[t]));
                  forceAddTile(tiles);
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecommendedList;
