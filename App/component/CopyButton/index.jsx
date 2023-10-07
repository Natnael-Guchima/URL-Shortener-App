import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import colors from '../../config/colors';

function CopyButton({title}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyButtonPress = () => {
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1000);
  };
  return (
    <TouchableWithoutFeedback
      onPress={handleCopyButtonPress}
      // underlayColor={colors.DarkViolet}
      // onShowUnderlay={() => {
      //   setIsCopied(true);
      // }}
      // onHideUnderlay={() => setIsCopied(false)}
    >
      <View
        style={[
          styles.container,
          {backgroundColor: isCopied ? colors.DarkViolet : colors.Cyan},
        ]}>
        <Text style={styles.text}>{isCopied ? 'Copied!' : 'Copy'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.White,
    fontFamily: 'Poppins-Bold',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  container: {
    padding: 10,

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
export default CopyButton;
