import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { styles } from './TypewriterStyles';

class Typer extends Component {
  _isMounted = false;
  static defaultProps = {
    heading: '',
    dataText: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.handleType();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];
    if (this._isMounted) {
      this.setState({
        text: isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 100 : 150,
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => this.setState({ isDeleting: true }), 500);
      } else if (isDeleting && text === '') {
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1,
        });
      }

      setTimeout(this.handleType, typingSpeed);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.typeContainer}>
        <span className={classes.heading}>{this.props.heading}&nbsp;</span>
        <span className={classes.typingText}>{this.state.text}</span>
      </div>
    );
  }
}

export default withStyles(styles)(Typer);
