import React, {useState} from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../../config/colors';

function CopyButton({title}) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <TouchableHighlight
      onPress={() => console.log('clicked copy')}
      underlayColor={colors.DarkViolet}
      onShowUnderlay={() => {
        setIsCopied(true);
      }}
      onHideUnderlay={() => setIsCopied(false)}
      style={styles.container}>
      <Text style={styles.text}>{isCopied ? 'Copied!' : 'Copy'}</Text>
    </TouchableHighlight>
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
    backgroundColor: colors.Cyan,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
export default CopyButton;
