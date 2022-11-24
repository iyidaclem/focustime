import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
export const FocusHistory = ({history}) => {

  if(!history || !history.length) return null;
  const renderItem = ({item}) => <Text style={{color:"white"}}>-{item}</Text>
  return (
    <View style={styles.history} >
      <Text style={styles.title}>Things we've focused on: </Text>

      <FlatList 
      data={history}
      renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  history: { 
    marginLeft: spacing.md,
    flex:1
  },
  title: {
    padding:spacing.sm,
    color: "white",
    fontSize: fontSizes.lg,
    textAlign: 'center',
    fontWeight:'bold'
  }
})