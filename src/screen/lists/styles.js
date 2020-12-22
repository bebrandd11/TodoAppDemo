import {StyleSheet} from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
  } from '../../helper/Constants';
  

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        flex: 1,
        paddingTop: 30,
    },
    textView: {
      marginHorizontal: 20,
    },
    textStyle: {
        backgroundColor: '#d3e0f7',
        marginVertical: 20,
        paddingVertical: 20,
        textAlign: 'center',
        fontSize: FONT_MEASURMENT.large,
    },
})