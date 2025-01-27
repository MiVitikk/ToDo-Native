import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, buttonPressed, Alert, TextInput, FlatList, Dimensions } from 'react-native';


export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handlePress = () => {
    setTodos([...todos, todo]);
    setTodo('')
    console.log([...todos, todo])
  };

  const handleClear = () => {
    if (todos != null){
      setTodos([])
  }
  }

  
    
  
    
 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        value={todo}
        onChangeText={text => setTodo(text)}
        placeholder='Enter a new task...'
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', gap: '20' }}>
      <Button title='Add' onPress={handlePress} />
      <Button title='Clear' onPress={handleClear} />
      
      </View>
      
      <Text style={styles.listHeader}>Shopping list</Text>
      
      <FlatList 
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text>No Data</Text>}
        ItemSeparatorComponent={<View style={styles.itemSeparator}></View>}
        data={todos}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 70,
    gap: 10
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#2F4F4F'
  },
  list: {
    width: "80%",
    
  },
  listItem: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    margin: 5,
    
  },
  listHeader: {
    color: '#2F4F4F',
    fontSize: 20
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 150
  }
});
