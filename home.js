import { StyleSheet, Text, View ,Image} from 'react-native';
import React from "react";
import Menu from '../component/Menu';

const Home = (propsr) => {
  const description = "vision :\n\nTo impart quality education for producing highly talented globally recognizable technocrats and entrepreneurs with sound ethics, latest knowledge and innovative ideas in Computer Science and Engineering to meet industrial needs and societal expectations.";

  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
       <Image 
        style={styles.headerImage}
        resizeMode="contain"
        source={require("../../assets/nick.jpeg")}
         />

         <Text style={styles.mainHeader}>WELCOME TO GRAPHIC ERA </Text>
         <Text 
            style={[
              styles.mainHeader,
           {   
              fontSize: 20,
              color : "#4c5dab",
              marginTop: 0,
              
           },
          ]}>
          {propsr.channelName}
          </Text>
          <Text style={styles.paraStyle}> {description} </Text>
     </View>
     <View style={styles.menuStyle}>
     <View style={styles.lineStyle}></View>
      <Menu />
      <View 
        style={[
          styles.lineStyle,
          {
            marginVertical:10,
        
          },
          ]}></View>
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    height:"90%",
    display:"flex",
    justifyContent: "space-between",
    paddingHorizontal: 19,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    paddingHorizontal : 0,
  },

  
  headerImage: {
    height: "40%",
    width : "80%",
    aspectRatio: 19/9,
    display: "flex",
    alignItems:"stretch",
    marginTop:50,
    marginBottom:20,
    borderRadius:20,
  },

  mainHeader: {
  fontSize: 20,
  color:"#344055",
  textTransform: "uppercase",

  },
  paraStyle: {
    textAlign:"left",
    fontSize:19, 
    color:"#7d7d7d",
    marginTop:30,
    paddingBottom:50,
    lineHeight:26,
  },

  lineStyle: {
   marginBottom:3,  
   borderWidth:.5,
   borderColor:"grey",
  },


});    

export default Home;
