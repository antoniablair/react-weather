import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import colors from '../common/colors';

const styles = StyleSheet.create({
  error: {
    fontSize: '22px',
    color: colors.brightCoral,
  }
});

const Error = ({ text }) => (
  <p>
    <span className={css(styles.error)}>
      Error: { text }
    </span>
  </p>
);

export default Error;