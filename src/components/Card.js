import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import colors from '../common/colors';

const styles = StyleSheet.create({
  card: {
    marginLeft: '10px',
    marginRight: '10px',
    backgroundColor: colors.white,
    width: '300px',
    height: '375px',
    borderRadius: '20px',
  },
  topElement: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bottomElement: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  image: {
    height: '175px',
    backgroundColor: colors.blueGrey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    overflow: 'hidden',
    padding: '20px',
    fontSize: '20px',
    color: colors.grey,
    textAlign: 'left',
    height: '125px',
  },
  action: {
    backgroundColor: colors.white,
    height: '40px',
    color: colors.purple,
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'flexStart',
    padding: '25px',
  },
  button: {
    backgroundColor: colors.blueGrey,
    borderColor: colors.blueGrey,
    color: colors.white,
    height: '100%',
    paddingRight: '10px',
    paddingLeft: '10px',
    textTransform: 'uppercase',
    display: 'block',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.blueGrey,
      borderColor: colors.blueGrey,
    }
  }
});

const Content = ({ text }) => (
  <div className={css(styles.content, styles.topElement)}>
    { text }
  </div>
);

const Action = () => (
  <div className={css(styles.action, styles.bottomElement)}>
    <button className={css(styles.button)}>
      Action Here
    </button>
  </div>
);

const Card = ({ text }) => (
  <div className={css(styles.card)}>
    <div className={css(styles.image)}>

    </div>
    <Content text={text} />
    <Action />
  </div>
);

export default Card;