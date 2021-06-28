import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';

export default class WriteStory extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            story:''
        }
    }

    submitStory = ()=>{
      //add a transaction
      db.collection("stories").add({
        'title' : this.state.title,
        'author' : this.state.author,
        'story' : this.state.story
      })
  
      this.setState({
        title : '',
        author: '',
        story:'',
      })
      //ToastAndroid.show("Story Submitted", ToastAndroid.SHORT);
      Alert.alert("Story Submitted");
    }

    render(){
        return(
            <SafeAreaProvider>
              <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>

            <View style={styles.container}>
            <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20, marginLeft:100, textAlign:'center' },
          }}
            />
            <TextInput
            style={styles.inputBox}
            placeholder="Write your title here."
            placeholderTextColor="black"
            onChangeText={title => {
                this.setState({ title: title });
              }}
              value={this.state.title}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Write your name here."
            placeholderTextColor="black"
            onChangeText={author=>{
                this.setState({author:author});
            }}
            value={this.state.author}
            />

            <TextInput
            style={styles.inputBox}
            placeholder="Write your story here."
            placeholderTextColor="black"
            onChangeText={story=>{
                this.setState({story:story});
            }}
            value={this.state.story}
            multiline={true}/>

            <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.submitStory}>
            <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            </View>

              </KeyboardAvoidingView>
            </SafeAreaProvider>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    inputBox: { 
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      margin: 10,
      color:'black',
      padding: 6,
    }, 
    submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,color:'black',
    },
    submitButtonText:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
    }
  });
    