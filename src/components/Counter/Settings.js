import React, { Component } from 'react';
import styles from './Settings.module.scss';

class Settings extends Component {
  handleStepChange = (e) => {
    const newStep = parseInt(e.target.value);
    this.props.changeStep(newStep);
  }

  handleModeChange = (e) => {
    const newMode = e.target.value;
    this.props.changeMode(newMode);
  }

  render() {
    const { step, mode } = this.props;
    return (
      <div className={styles.settingsContainer}>
        <h2>Налаштування</h2>
        <label className={styles.labelStep}>
          Крок:
          <input
            type="number"
            value={step}
            onChange={this.handleStepChange}
            className={styles.input}
          />
        </label>
        <label className={styles.labelMode}>
          Режим:
          <select
            value={mode}
            onChange={this.handleModeChange}
            className={styles.select}
          >
            <option value="plus">Додавання</option>
            <option value="minus">Віднімання</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Settings;
