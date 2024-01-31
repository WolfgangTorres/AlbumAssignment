import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

import { EmptyListComponentProps } from '../../utils/types'

/**
 * EmptyListComponent
 *
 * A functional component that renders an activity indicator when data is being loaded
 * or a message when there's no data to display. It utilizes the color scheme from the app's theme
 * for styling.
 *
 * Props:
 *  - loading (boolean): Indicates whether data is being loaded. If true, an activity indicator is shown.
 *  - emptyMessage (string): The message to display when there is no data.
 */
const EmptyListComponent: React.FC<EmptyListComponentProps> = ({
  loading,
  emptyMessage,
}) => {
  const { colors } = useTheme()

  // Styles
  const containerStyle = StyleSheet.compose(styles.container, {
    backgroundColor: colors.background,
  })

  const emptyTextStyle = StyleSheet.compose(styles.text, { color: colors.text })

  return (
    <View style={containerStyle}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text style={emptyTextStyle}>{emptyMessage}</Text>
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
