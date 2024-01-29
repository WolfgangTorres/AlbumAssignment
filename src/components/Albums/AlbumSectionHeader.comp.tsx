/**
 * Album Section Header Component
 *
 * This component renders the header for the sections of the albums list categorized by users.
 */
import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

const AlbumSectionHeaderComponent: React.FC<{ title: string }> = ({
  title,
}) => {
  // Theme hooks
  const { colors } = useTheme()

  return (
    <Text
      style={[
        styles.sectionHeader,
        { backgroundColor: colors.card, color: colors.text },
      ]}
    >
      {title}
    </Text>
  )
}

// Styles for the component
const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
})

export default AlbumSectionHeaderComponent
