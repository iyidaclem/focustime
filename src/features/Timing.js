import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {RoundedButton} from "../components/RoundedButton"

export const Timing = ({onPress, mins}) => {

  return <RoundedButton onPress={()=>onPress} />
}