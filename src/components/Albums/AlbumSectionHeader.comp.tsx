import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

/**
 * Album Section Header Component
 *
 * This component renders the header for the sections of the albums list categorized by users.
 */
const AlbumSectionHeaderComponent: React.FC<{ title: string }> = ({
  title,
}) => {
  // Theme hooks
  const { colors } = useTheme()

  const headerStyle = StyleSheet.compose(styles.sectionHeader, {
    backgroundColor: colors.card,
    color: colors.text,
  })

  return <Text style={headerStyle}>{title}</Text>
}

// Styles for the component
const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

export default AlbumSectionHeaderComponent
