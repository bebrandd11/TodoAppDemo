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
        marginHorizontal: 20,
        marginTop: 20,
    },
    mainView: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10,
    },
    imageView: {
        width: 135,
        height: 90,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        resizeMode: 'center',
    },
    imgText: {
        fontSize: FONT_MEASURMENT.large,
    },
})