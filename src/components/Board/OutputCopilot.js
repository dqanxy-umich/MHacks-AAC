import React from 'react';
import Scroll from './Output/SymbolOutput/Scroll';
import './Output/SymbolOutput/SymbolOutput.css';
import Symbol from './Symbol';
import IconButton from '@material-ui/core/IconButton';

class OutputCopilot extends React.Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
    this.state = {
      openPhraseShareDialog: false
    };
  }

  render() {
    const { tiles, onWriteSymbol } = this.props;

    return (
      <React.Fragment>
        {tiles.map(({ image, label, type, keyPath }, index) => (
          <div
            className={
              type === 'live'
                ? 'LiveSymbolOutput__value'
                : 'SymbolOutput__value'
            }
            key={index}
          >
            <Symbol
              className="SymbolOutput__symbol"
              image={image}
              keyPath={keyPath}
              label={label}
              type={type}
              labelpos="Below"
              isCopilot={true}
              onWrite={onWriteSymbol(index)}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default OutputCopilot;
