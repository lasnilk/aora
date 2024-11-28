import { useState } from "react";
import { TouchableOpacity, TextInput, View, Image} from "react-native";

import {icons} from '../constants';

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    
  return (
      <View className="w-full  flex-row h-16 px-4 bg-black-100 rounded-2xl  border-2 border-black-200  items-center focus:border-secondary focus:border-2 space-x-4">
        <TextInput
          className="flex-1 text-white font-pregular text-base mt-0.5 "
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry = {title === 'Password' && !showPassword}
        />

       <TouchableOpacity>
        <Image source={icons.search} className='w-5 h-5 text-white' resizeMode="contain"/>
       </TouchableOpacity>
      </View>
  );
};

export default SearchInput