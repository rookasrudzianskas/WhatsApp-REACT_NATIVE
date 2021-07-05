import {StyleSheet} from 'react-native';
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
});

export default styles;
