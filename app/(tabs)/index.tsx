import { Button, ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useAsync } from '@/hooks/useAsync';
import bridg from 'bridg';

export default function TabOneScreen() {
  const [data] = useAsync(() => bridg.user.findMany({ include: { blogs: true } }));

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Existing Data:</Text>
        <Text>{JSON.stringify(data, null, 1)}</Text>
        <Button
          title="Create Some Data"
          onPress={() =>
            bridg.user.create({
              data: {
                name: 'John Doe',
                blogs: { create: { title: 'My Blog' } },
              },
            })
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
