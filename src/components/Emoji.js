import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  emoji: {
    marginLeft: '10px',
    marginRight: '10px',
  }
});

const Emoji = ({ label, symbol }) => (
  <span
    role='img'
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
    className={css(styles.emoji)}
  >
    {symbol}
  </span>
);

export default Emoji;