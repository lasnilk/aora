import { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, TextInput } from "react-native";

import {icons} from '../constants';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    
  return (
    <View className={`gap-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full  flex-row h-16 px-4 bg-black-100 rounded-2xl  border-2 border-black-200  items-center focus:border-secondary focus:border-2">
        <TextInput
          className="flex-1 text-white font-psemibold text-base  w-full "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry = {title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode="contain"/>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField