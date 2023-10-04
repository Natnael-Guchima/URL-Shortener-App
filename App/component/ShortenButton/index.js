import React from 'react';
import { TouchableOpacity , Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

function ShrortenButton(props) {
    return (
     <TouchableOpacity style={styles.shortenButton}>
        <Text style={styles.text}>Shorten It!</Text>
     </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    shortenButton: {
        backgroundColor: colors.Cyan,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        color: colors.White,
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    }
})
export default ShrortenButton;