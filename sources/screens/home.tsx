
import React from 'react'
import { Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'

import { Sentence } from '../references/constants/sentence'
import { StackNavigatorParameters } from '../references/types/navigators'

type PropsType = {
  navigation: StackNavigationProp<StackNavigatorParameters, 'Home'>
}

function Home(props: PropsType) {
  const { navigation } = props

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          padding: 20
        }}
      >
        <Text
          style = {{
            textAlign: 'center'
          }}
        >
          Whenever opening the app, your regid will be registered at
        </Text>

        <TouchableOpacity
          activeOpacity = {0.6}
          onPress = {() => Linking.openURL('https://send-fcm-test-reynald.herokuapp.com/public')}
          style = {{
            marginVertical: 20
          }}
        >
          <Text
            style = {{
              color: 'blue',
              textAlign: 'center',
              textDecorationLine: 'underline'
            }}
          >
            https://send-fcm-test-reynald.herokuapp.com/public
          </Text>
        </TouchableOpacity>

        <Text
          style = {{
            textAlign: 'center'
          }}
        >
          You can click the listed regid to send a notification handled by API
        </Text>
      </View>

      <Text
        style = {{
          color: 'gray',
          margin: 20,
          textAlign: 'center'
        }}
      >
        {Sentence.starterWatermark}
      </Text>
    </SafeAreaView>
  )
}

export default Home
