import React from 'react'
import { SectionList, Text, View, StyleSheet } from 'react-native'
import { EmptyListComponent } from '../../components/shared'

const AlbumsScreen: React.FC = () => {
  const status: string = 'idle'

  return (
    <View style={styles.container}>
      <SectionList
        sections={[]}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.username}</Text>
        )}
        ListEmptyComponent={
          <EmptyListComponent
            loading={status === 'loading'}
            emptyMessage="No data found."
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default AlbumsScreen
