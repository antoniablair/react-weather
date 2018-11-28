import React from 'react';

import { StyleSheet, css } from 'aphrodite';

import colors from '../common/colors';

const styles = StyleSheet.create({
  card: {
    margin: '10px 10px',
    backgroundColor: colors.white,
    width: '300px',
    height:  '375px',
    borderRadius: '20px',
  },
  topElement: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
  },
  sideShadows: {
    // boxShadow: '-5px 0 5px -5px rgba(0,0,0,0.14), 5px 0 5px -5px rgba(0,0,0,0.12)',
  },
  bottomElement: {
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    // boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  },
  imageContainer: {
    height: '175px',
    backgroundColor: colors.blueGrey,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
  },
  content: {
    overflow: 'hidden',
    padding: '15px',
    fontSize: '16px',
    color: colors.grey,
    textAlign: 'left',
    height: '125px',
  },
  headline: {
    fontSize: '18xp',
    fontWeight: 'bold',
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
    height: '40px',
    fontSize: '12px',
    textDecoration: 'none',
    lineHeight: '40px',
    verticalAlign: 'middle',
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
  },
});

const Action = ({ link }) => (
  <div className={css(styles.action, styles.bottomElement)}>
    <a className={css(styles.button)} href={link} target='_blank'>
      <span className={css(styles.buttonText)}>Learn More</span>
    </a>
  </div>
);

const Card = ({ city, image, link, temp, text }) => (
  <div className={css(styles.card, styles.sideShadows)}>
    <div className={css(styles.imageContainer, styles.sideShadows)}>
      <img src={require(`../images/${image}`)} className={css(styles.image)} />
    </div>
    <div className={css(styles.content)}>
      <h3>{ city }</h3>
      <p>{ text }</p>
      <p>{ temp } °F</p>
    </div>
    <Action link={link} />
  </div>
);

export default Card;