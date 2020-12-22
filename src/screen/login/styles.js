import {StyleSheet} from 'react-native'
import {
    HEIGHT,
    COLORS,
    WIDTH,
    FONTS,
    FONT_MEASURMENT,
  } from '../../helper/Constants';
import {Dimensions} from 'react-native';

// export const HEIGHT = Dimensions.get('window').height;
// export const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: WIDTH - 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.BLUE,
        paddingTop: 30,
    },
    inputView: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#E0E3DA',
    },
    textView: {
        backgroundColor: '#0080ff',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
    loginBtn: {
        backgroundColor: '#a3daff',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
})