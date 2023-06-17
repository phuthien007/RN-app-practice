import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  imageContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: '100%',
    height: '100%',
  },

  // text
  textContainer: {
    position: 'absolute',
    bottom: '10%',
    left: 40,
    right: 40,
  },
  textTitle: {...FONTS.h1, color: COLORS.gray, textAlign: 'center'},
  textDescription: {
    ...FONTS.body3,
    textAlign: 'center',
    marginTop: SIZES.base,
    color: COLORS.gray,
  },

  // dot
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.blue,
    marginHorizontal: SIZES.radius / 2,
  },
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '25%' : '20%',
  },

  // button
  button: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    width: 150,
    height: 60,
    paddingLeft: 20,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: COLORS.blue,
  },
  buttonText: {...FONTS.h1, color: COLORS.white},
});

export default styles;
