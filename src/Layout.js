import React, { useState, useRef } from "react";
import { FlatList, TouchableWithoutFeedback, SafeAreaView, ScrollView, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View, Pressable, Modal, Alert } from "react-native";
import { Button, Divider } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {height, width} = Dimensions.get('window');

const ModalView = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = React.useState('');
    const {height, width} = Dimensions.get('window');
    
    
    const pickImage = () =>{
      const callback = (call)=>{
          console.log(call)
      }
      launchImageLibrary({mediaType: 'photo'}, callback)
    }
    return (
      <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}
        >
        <TouchableOpacity style={styles.overlay} onPress={()=>setModalVisible(!modalVisible)}>
            <View style={styles.centeredView} >
                <TouchableWithoutFeedback>
                    <View style={styles.modalView}>
                    <Text style={styles.modalText}>Add A New Cat!</Text>
                    <TextInput
                        label="Name"
                        value={text}
                        mode="outlined"
                        style={styles.input}
                        onChangeText={text => setText(text)}
                    />
                    <TextInput
                        label="Breed"
                        mode="outlined"
                        style={styles.input}
                    />
                    
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => pickImage()}
                    >
                        <Text style={styles.textStyle}>Select Image</Text>
                    </Pressable>
                    {/* <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Select Image</Text>
                    </Pressable> */}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableOpacity>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>+ Add Cat</Text>
        </Pressable>
      </View>
    );
  };

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20,position: 'absolute',left:0,right:0,top:0,bottom:0};

    return (
        <View>
            <Modal style={{position: 'absolute',left:0,right:0,top:0,bottom:0}} visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Text>Example Modal.  Click outside this area to dismiss.</Text>
            </Modal>
        <Button onPress={showModal} style={{height: 50,alignContent:'center',justifyContent:'center',width: 200, alignSelf: 'center', marginBottom: 10}} labelStyle={{fontWeight: 'bold'}} icon="cat" mode="contained">
            Add Cat
        </Button>
        {/* <Button style={{marginTop: 30}} onPress={showModal}>
            Show
        </Button> */}
        </View>
    );
};
  
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description: ''
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: ''
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    description: ''
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        <ModalView />
        <Divider />
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
        />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 2*width/3,
    margin:10
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: height/2,
    width: 9.5*width/10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 50,alignContent:'center',justifyContent:'center',width: 200, alignSelf: 'center', marginBottom: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
});

export default App;