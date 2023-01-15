import {Text, TouchableOpacity, TextInput} from 'react-native';

Text.defaultProps = {...(Text.defaultProps || {}), allowFontScaling: false};
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};
TouchableOpacity.defaultProps = {
  ...(TouchableOpacity.defaultProps || {}),
  delayPressIn: 70,
};

const AppSettings = () => {
  return null;
};

export default AppSettings;
