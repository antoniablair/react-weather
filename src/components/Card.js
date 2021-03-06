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
  bottomElement: {
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
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
    <a className={css(styles.button)} href={link} target='_blank' rel='noopener noreferrer'>
      <span className={css(styles.buttonText)}>Learn More</span>
    </a>
  </div>
);

const Card = ({ city, image, link, temp, text }) => (
  <div className={css(styles.card)}>
    <div className={css(styles.imageContainer)}>
      <img src={require(`../images/${image}`)} className={css(styles.image)} alt='Forecast'/>
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
