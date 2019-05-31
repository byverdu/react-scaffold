import Image from 'Components/Image';
import React from 'react';
import { hot } from 'react-hot-loader';
import styles from 'Theme/App.module.scss';
import 'Theme/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Image />
        <p>
          Edit <code>xoxo</code> and save to reload.
        </p>
        <a
          className={styles.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default hot(module)(App);
