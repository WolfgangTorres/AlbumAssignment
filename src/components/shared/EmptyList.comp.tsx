import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { EmptyListComponentProps } from '../../utils/interfaces'

const EmptyListComponent: React.FC<EmptyListComponentProps> = ({
  loading,
  emptyMessage,
}) => {
  const { colors } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={[styles.text, { color: colors.text }]}>
          {emptyMessage}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
})

export default EmptyListComponent
