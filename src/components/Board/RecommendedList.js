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
    let isLoading = BoardContainer.APIHandler.recStatus == 'pending';
    return (
      <React.Fragment>
        {/* <div style={{ display: 'flex', height: '100 %' }}>
          <i
            style={{
              display: 'flex',
              marginLeft: 20,
              marginTop: 12,
              fontSize: 18
            }}
          >
            Gemini Generated Responses
          </i>
          <button
            className="rl_button"
            style={{ 'background-color': '#3f51b5', marginLeft: 10 }}
            onClick={() => {
              BoardContainer.APIHandler.refreshRecList();
              this.forceUpdate();
            }}
          >
            Generate!
          </button>
          <p style={{ display: 'flex', marginLeft: 20 }}>
            {isLoading ? 'Loading...' : ''}
          </p>
        </div> */}
        <div className="rl_container" style={{}}>
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
          {labels.length == 0 ? (
            <i className="rl_light_text">
              Press Generate for recommended phrases!
            </i>
          ) : (
            ''
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default RecommendedList;
