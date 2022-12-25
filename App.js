import React, { Component } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity ,SafeAreaView, FlatList ,Image ,refreshControl ,Modal,Pressable} from 'react-native';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalVisible:false,
      dataLike:  [
          {
            id: 1,
            title: require('./src/img/lg1.png'),
            like:0
          },
          {
            id: 2,
            title: require('./src/img/lg2.png'),
            like:0
          },
          {
            id: 3,
            title: require('./src/img/lg3.png'),
            like:0
          },
        ],

     };
  }

  likeall = () => {
    const newState = this.state.dataLike.map(obj => {
       let sa = obj.like+1
        return {...obj, like:sa };
    });
    this.setState({dataLike: newState});
    
  };
  resetall = () => {
    const newState1 = this.state.dataLike.map(obj => {
        return {...obj, like:0};
    });
    this.setState({dataLike: newState1});
  };
  dislikeall = () => {
    const newState = this.state.dataLike.map(obj => {
        if (obj.like > 0) {
          let sa = obj.like-1
          return {...obj, like:sa};
        }else{
          return {...obj};
        }
    });
    this.setState({dataLike: newState});
  };
  likebyid = (item) =>{
    const newState = this.state.dataLike.map(obj => {
        if (obj.id == item) {
          let sa = obj.like+1
          return {...obj, like:sa};
        }else{
          return {...obj};
        }
    });
    this.setState({dataLike: newState});
  }
  dislikebyid = (item) =>{
    const newState = this.state.dataLike.map(obj => {
        if (obj.id == item) {
          let sa = obj.like-1
          return {...obj, like:sa};
        }else{
          return {...obj};
        }
    });
    this.setState({dataLike: newState});
  }
  setModalVisible = (visible) =>{
     this.setState({modalVisible: visible });
  }

  render() {
    console.log(this.state.modalVisible);
    return (
      <View style={{
          flex: 1,
          backgroundColor:'#F4F4F4',
          
          paddingTop:20,
          paddingBottom:20,
          paddingHorizontal:20
        }}>
        <View style={styles.button}>
          <TouchableOpacity style={{...styles.buttonSize, ...styles.bcBlue}} onPress={() => this.likeall()}>
            <Text style={{...styles.white,...styles.font}}>Like All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonSize, ...styles.bcwhite}}  onPress={() => this.resetall()}>
            <Text style={{...styles.grey,...styles.font}}>Reset All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonSize, styles.bcRed]}  onPress={() => this.dislikeall()}>
            <Text style={{...styles.white,...styles.font}}>Dislike All</Text>
          </TouchableOpacity>
        </View>
       
          <FlatList
            data={this.state.dataLike}
            keyExtractor={item => item.id}
            style={{borderRadius:10,flex:1,}}
            refreshControl={this.state.refresh}
            renderItem={({ item }) => (
            <View style={{ marginBottom: 10,borderRadius:10,width:'100%',height:250,backgroundColor:'#ffff',borderWidth: 2,borderColor:'#D5D5D5'}}
              
            > 
              <TouchableOpacity  onPress={() => this.setModalVisible(true)}>
                <Image source={item.title} style={{ height:200, borderTopRightRadius:10,borderTopLeftRadius:10, width:'100%', justifyContent: 'center', alignItems: 'center' }}  />
              </TouchableOpacity>
              
  
              {/* <View style={styles.button1}>
                <View style={{...styles.buttonSize1, ...styles.bcwhite,borderWidth:1,borderColor:'#D5D5D5'}}  >
                  <Text style={{...styles.grey,...styles.font}}> {item.like} Like </Text>
                </View>
                
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{...styles.buttonSize1, ...styles.bcBlue}}  onPress={() => this.likebyid(item.id)}>
                      <Text style={{...styles.white,...styles.font}}>Like</Text>
                  </TouchableOpacity>
                
                  <TouchableOpacity style={{...styles.buttonSize1, ...styles.bcRed,...styles.ml}} onPress={() => this.dislikebyid(item.id)} >
                      <Text style={{...styles.white,...styles.font}}>Dislike</Text>
                  </TouchableOpacity>
                </View>
                
              </View> */}
            </View>

          ) }
          />
          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View>
              <Text>Test</Text>
          </View>

        </Modal>
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20
  },
  button1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    margin:14
  },
  ml:{
    marginLeft:4
  },
  font:{
    fontSize:16,
    fontFamily:'Helvetica Neue, Regular'
  }
  ,
  buttonSize:{
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:10,
    borderColor:'#5F5F5F'
  },
  buttonSize1:{
    paddingHorizontal:18,
    paddingVertical:8,
    borderRadius:10,
    borderColor:'#5F5F5F'
  },
  white:{
    color:'#ffffff'
  },
  bcwhite:{
    backgroundColor:'#ffffff'
  },
  grey:{
    color:'#5F5F5F'
  },
  bcBlue:{
    backgroundColor:'#2B72C4'
  },
  bcRed:{
    backgroundColor:'#DB2C2C'
  }

})

export default App;
