import React, { Component } from 'react';
import Settings from './Settings';
import Display from './Display';
import styles from './Counter.module.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 1,
      mode: 'plus',
    };
  }

  changeStep = (newStep) => {
    this.setState({ step: newStep });
  }

  changeMode = (newMode) => {
    this.setState({ mode: newMode });

    if (this.state.autoClickInterval) {
      clearInterval(this.state.autoClickInterval);
      this.setState({ autoClickInterval: null });
    }
  }

  changeCount = () => {
    const { count, step, mode } = this.state;
    let newCount;

    if (mode === 'plus') {
      newCount = count + step;
    } else {
      newCount = count - step;
    }

    if (newCount >= 0) {
      this.setState({ count: newCount });
    } else {
      this.setState({ count: 0 });
    }
  }

  render() {
    const { count, step, mode } = this.state;
    return (
      <div className={styles.counterContainer}>
        <h1>ЛІЧИЛЬНИК</h1>
        <Settings
          step={step}
          mode={mode}
          changeStep={this.changeStep}
          changeMode={this.changeMode}
        />
        <Display
          count={count}
          changeCount={this.changeCount}
          mode={mode} />
      </div>
    );
  }
}

export default Counter;
