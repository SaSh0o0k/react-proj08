import React, { Component } from 'react';
import styles from './Display.module.scss';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoClickInterval: null,
      autoClickDuration: 10,
      mode: props.mode,
    };
  }

  startAutoClick = () => {
    const { autoClickInterval, autoClickDuration } = this.state;

    if (!autoClickInterval) {
      const interval = setInterval(this.props.changeCount, 1000);
      this.setState({ autoClickInterval: interval });

      setTimeout(() => {
        this.stopAutoClick();
      }, autoClickDuration * 1000);
    }
  }

  stopAutoClick = () => {
    const { autoClickInterval } = this.state;

    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null });
    }
  }

  handleAutoClickDurationChange = (e) => {
    const newDuration = parseInt(e.target.value);
    this.setState({ autoClickDuration: newDuration });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mode !== prevProps.mode) {
      this.setState({ mode: this.props.mode });

      if (this.state.autoClickInterval) {
        clearInterval(this.state.autoClickInterval);
        this.setState({ autoClickInterval: null });
      }
    }
  }

  componentDidMount() {
    this.startAutoClick();
  }

  render() {
    const { autoClickInterval, autoClickDuration } = this.state;
    return (
      <div className={styles.displayContainer}>
        <h2>Відображення</h2>
        <p>Значення лічильника: {this.props.count}</p>

        <button onClick={this.props.changeCount} className={styles.buttonClick} >
          {this.props.mode === 'plus' ? 'Додати' : 'Відняти'}
        </button>
        <button onClick={this.startAutoClick} disabled={autoClickInterval} className={styles.buttonStart}>
          Старт
        </button>
        <button onClick={this.stopAutoClick} className={styles.buttonStop}>
          Стоп
        </button>
        <label>
          Тривалість автокліку (секунди):
          <input
            type="number"
            value={autoClickDuration}
            onChange={this.handleAutoClickDurationChange}
            className={styles.input}
          />
        </label>
      </div>
    );
  }

}

export default Display;
