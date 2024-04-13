import React from 'react';
import Scroll from './Output/SymbolOutput/Scroll';
import './Output/SymbolOutput/SymbolOutput.css';
import Symbol from './Symbol';
import IconButton from '@material-ui/core/IconButton';

class OutputCopilot extends React.Component {
  static autocomplete = [];
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
    this.state = {
      openPhraseShareDialog: false
    };
  }

  render() {
    const { tiles, onWriteSymbol, autocomplete } = this.props;

    return (
      <React.Fragment>
        {autocomplete.map((label, index) => (
          <div
            className={
              'live' === 'live'
                ? 'LiveSymbolOutput__value'
                : 'SymbolOutput__value'
            }
            key={index}
          >
            <Symbol
              className="SymbolOutput__symbol"
              label={label}
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
