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

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
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

  handleKeyDown = event => {
    const { onTileClick, tiles } = this.props;
    if (event.key === 'a' && OutputCopilot.autocomplete.length > 0) {
      onTileClick(this.createTile(OutputCopilot.autocomplete[0]));
      OutputCopilot.autocomplete.shift();
      this.forceUpdate();
    }
  };

  render() {
    const { tiles, onWriteSymbol } = this.props;
    if (OutputCopilot.autocomplete.length === 0) {
      OutputCopilot.autocomplete = ['Hello', 'World', 'How', 'Are', 'You'];
    }

    return (
      <React.Fragment>
        {OutputCopilot.autocomplete.map((label, index) => (
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
