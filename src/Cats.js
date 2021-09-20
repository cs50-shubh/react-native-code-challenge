import * as React from 'react';
import {Card, Title, Paragraph, Avatar} from 'react-native-paper';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';

const MyComponent = () => (
  <View style={styles.container}>
    <View style={styles.inner}>
      <View style={styles.col}>
        <Avatar.Image
          size={100}
          source={require('../assets/images/avatar.png')}
        />
      </View>
      <View style={styles.col}>
        <Card.Content>
          <Title>Cristy</Title>
          <Paragraph>3 yrs</Paragraph>
          <Paragraph>
            Long haired breed of cat that has a short round face with a wide
            head. It has a thick coat , large eyes and a shortened muzzle.
          </Paragraph>
        </Card.Content>
      </View>
    </View>
  </View>
);

const AddButton = () => {
  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const [list, setList] = React.useState([]);
  console.log(list, setList);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <AddButton />
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <MyComponent />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  col: {
    width: '50%',
    borderWidth: 1,
    borderColor: 'black',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
