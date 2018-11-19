import {StyleSheet} from "aphrodite";
import colors from "../common/colors";

const styles = StyleSheet.create({
  card: {
    margin: '10px 10px',
    backgroundColor: colors.white,
    width: 300,
    height:  375,
    borderRadius: 20,
  },
  topElement: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  sideShadows: {
    // boxShadow: '-5px 0 5px -5px rgba(0,0,0,0.14), 5px 0 5px -5px rgba(0,0,0,0.12)',
  },
  bottomElement: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
  },
  imageContainer: {
    height: 175,
    backgroundColor: colors.blueGrey,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
  },
  content: {
    overflow: 'hidden',
    padding: 20,
    fontSize: 20,
    color: colors.grey,
    textAlign: 'left',
    height: 125,
  },
  action: {
    backgroundColor: colors.white,
    height: 40,
    color: colors.purple,
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'flexStart',
    padding: 25,
  },
  button: {
    backgroundColor: colors.blueGrey,
    borderColor: colors.blueGrey,
    color: colors.white,
    height: 40,
    fontSize: 12,
    textDecoration: 'none',
    lineHeight: 40,
    verticalAlign: 'middle',
    paddingRight: 10,
    paddingLeft: 10,
    textTransform: 'uppercase',
    display: 'block',
    borderRadius: 2,
    boxShadow: '0 1px 4px rgba(0, 0, 0, .3)',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.blueGrey,
      borderColor: colors.blueGrey,
    }
  }
});

export default styles;