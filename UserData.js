import { FlatList, StyleSheet, Text, View ,Image,TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import Notice from '../api/noticeapi';
const UserData= ({navigation}) => {

    const userCard =({item}) => {
      return(
         <View style={styles.mainContainer}>
        <View style={styles.userContainer}>

          <View>
            <Image style={styles.cardImage}
            source={item.image}
            resizeMode ="contain"
            />
          </View> 

          <Text style={styles.mainHeader}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle}
              onPress={()=>Linking.openURL("http://btechcsegehu.in/2022/06/21/notice-mini-project-evaluation-of-6th-semester/")
              }
              
              
              >
              <Text style={styles.buttonText}>CLICK</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
      );
    };
  return(
     <FlatList
       keyExtractor={(item) => item.id}
      data={Notice}
      renderItem={userCard}
  />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    
    height: 70,
    aspectRatio: 1,
    paddingBottom:20,
    
  },

  mainContainer:{
  paddingHorizontal:20,
  
  },

  userContainer:{
    padding:30,
    paddingTop:0,
    backgroundColor:"black",
    textAlign:"center",
    borderRadius:25,
    shadowColor:"blue",
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.5,
    showdowRadius:15,
    elevation:8,
    marginVertical:30,
  },

  mainHeader:{
    paddingTop:0,
    fontSize:20,
    color:"white",
    textTransform:"uppercase",
    paddingBottom:15,
    textAlign:"center",
    // fontFamily:"JosefinSans_400Regular",
  },
  description:{
    textAlign:"center",
    // fontFamily:"JosefinSans_500Medium",
    fontWeight:"bold",
    paddingBottom:5,
    paddingTop:15,
    lineHeight:30,
    fontSize:16,
    color:"#7d7d7d",
    paddingBottom:0,
  },
 
 
  buttonContainer:{
    paddingTop:10,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },

  buttonStyle:{
    backgroundColor: "green",
    borderRadius:5,
    paddingVertical: 13,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  
  buttonText:{
    fontSize:15,
    color:"#efefef",
    // fontFamily:"JosefinSans_500Medium",
    textTransform:"capitalize",
  },

});


export default UserData
