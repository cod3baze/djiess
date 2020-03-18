import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Terms({navigation}) {
  return (
    <View>
      <Text>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis ratione sint inventore provident ad mollitia perspiciatis, animi quos exercitationem dolore ea. Quia distinctio magni tempora ipsum dolores repudiandae ipsa?'}</Text>
      <TouchableOpacity onPress={() => {navigation.setOptions({title: 'Updated'})}}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
}
