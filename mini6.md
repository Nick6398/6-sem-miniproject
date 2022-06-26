# 6-sem-miniproject


// 1.  app.js


import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from  "./src/screens/Home";
import About from  "./src/screens/About";
import Course from  "./src/screens/Course";
import UserData from "./src/screens/UserData";
import Contact from  "./src/screens/Contact";
import CourseDetails from "./src/screens/CourseDetails";

import { 
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from '@expo-google-fonts/josefin-sans';

import { Nunito_600SemiBold,Nunito_700Bold} from '@expo-google-fonts/nunito';
import AppLoading from "expo-app-loading";


export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if( !fontLoaded){
    <AppLoading/>;
  }


  return (
  <NavigationContainer> 
    <Stack.Navigator initialRouteName="Home">
      {/* home screen */}
      <Stack.Screen 
      name="Home"
      options={{
        headerShown:false,
      }}>
        {(props) => <Home {...props} channelName={"CSE department"}/>}
      </Stack.Screen>

      {/* course screen */}
      <Stack.Screen name="Course" component={Course}
        options={{
          headerStyle: {
            fontSize:25,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitle:"Semesters",
          headerTitleAlign:"center",
        }}
      />
 
      {/* UserData screen */}
      <Stack.Screen name="Student" component={UserData}
      options={{
          headerStyle: {
            fontSize:25,
            fontFamily: "Nunito_600SemiBold",
          },
          headerTitle:"Notice",
          headerTitleAlign:"center"
        }}/>

      {/* about sreen*/}
      <Stack.Screen name="About" component={About}
        options={{
          headerStyle: {
            fontSize:25,
          },
          headerTitle:"About",
          headerTitleAlign:"center"
        }}
      />

      {/* Contact Screen */}
      <Stack.Screen name="Contact" component={Contact}
        options={{
          headerStyle: {
            fontSize:25,
          },
          headerTitle:"Contact",
          headerTitleAlign:"center"
        }}
      />

      {/* CourseDetails Screen */}
      <Stack.Screen 
        name="CourseDetails" 
        component={CourseDetails}
        options={{
          headerTitle:"Semester Details",
          headerTitleStyle: {
            fontSize:25,
            fontFamily:"Nunito_600SemiBold",
          },
        
          headerTitleAlign:"center",
        }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
      
}





// 2. menu.js (component)

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View , StyleSheet, Text, Image} from "react-native";

const Menu = () => {
    const navigation = useNavigation(); 
    return(
        <View style={styles.menuContainer}>
    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate("Course")}>
    {/* <Text>Course</Text> */}
    <Image
    style={styles.iconStyle}
    source={{
        uri:"https://th.bing.com/th/id/R.aaebd43a8dc60519d02c93699d67fa33?rik=Ce3y3Qz8XzAQBA&riu=http%3a%2f%2fwww.benspaintsupply.com%2fwp-content%2fuploads%2f2013%2f08%2fSEM-Logo.jpg&ehk=kDmcuQAzf3pgZlryaRYPo5i%2b5XbSaeRnLYN0ChyBCcM%3d&risl=&pid=ImgRaw&r=0" ,
        }}
    />
    </TouchableOpacity> 

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate("Student")}>
    <Image
    style={styles.iconStyle}
    source={{
        uri:"https://th.bing.com/th/id/R.a272d8e097b7e758512c17a15d292191?rik=x5gzwCmwHRHgfw&riu=http%3a%2f%2fwww.canyonschool.in%2fimages%2fNotice_Board.jpg&ehk=X5JTa9bLPv2Qzd1JCggwfMb3Kf5igMK1N1wFURA%2fXLQ%3d&risl=&pid=ImgRaw&r=0" ,
        }}
    />
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate("About")}>
    <Image
    style={styles.iconStyle}
    source={{
        uri:"https://th.bing.com/th/id/OIP.pS0g5a6aQvZHIZXWd9_IpQHaHa?pid=ImgDet&rs=1" ,
        }}
    />
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonStyle}
    onPress={() => navigation.navigate("Contact")}>
   <Image
    style={styles.iconStyle}
    source={{
        uri:"https://www.clipartkey.com/mpngs/m/40-403925_phone-png-images-transparent-free-download-contact-black.png" ,
        }}
    />
    </TouchableOpacity>

    </View>
    );
};
const styles = StyleSheet.create({

    menuContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },

    iconStyle :{
    width:"100%",
    height:60,
    aspectRatio:1,
    },

});

export default Menu;



//3.  home.js(screen)

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






//4. course.js(screen)

import { FlatList, StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
import React from 'react';
import Courses from '../api/Courseapi';
const Course = ({navigation}) => {

    const courseCard =({item}) => {
      return(
         <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>

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
              onPress={
              () => navigation.navigate("CourseDetails",
              {
                courseId:item.id,
              })
              }>
              <Text style={styles.buttonText}>semester Details</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
      );
    };
  return(
     <FlatList
       keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
  />
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    paddingBottom:20,
    
  },
  mainContainer:{
  paddingHorizontal:20,
  },
  courseContainer:{
    padding:30,
    backgroundColor:"rgba(255,255,255,0.90",
    textAlign:"center",
    borderRadius:5,
    shadowColor:"grey",
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.5,
    shadowRadius:8,
    elevation:8,
    marginVertical:30,
  },
  mainHeader:{
    fontSize:29,
    color:"#344055",
    textTransform:"uppercase",
    //fontweight:500,
    paddingBottom:15,
    textAlign:"center",
    // fontFamily:"Nunito_600SemiBold",
  },
  description:{
    textAlign:"center",
    // fontFamily:"JosefinSans_500Medium",
    paddingBottom:15,
    lineHeight:20,
    fontSize:16,
    color:"navy",
  },
 
  buttonContainer: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  },
  buttonStyle:{
    backgroundColor:"#809fff",
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    fontSize:20,
    color:"#eee",
    // fontFamily:"JosefinSans_500Medium",
    textTransform:"capitalize",
  },

});

export default Course ;
  
  
  
 
 //5.  CourseDetails.js(screen)
  
  import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Courses from '../api/Courseapi';
import * as OpenAnything from "react-native-openanything"

const CourseDetails = ({navigation, route}) => {
    const id =route.params.courseId;
    console.log(id);

const selectedCourse =Courses.find((element)=>{
    return id === element.id;
});

return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>

        <Text style={styles.description}>{selectedCourse.description}</Text>

        <Text style={styles.description}>{selectedCourse.course1}</Text>

        <Text style={styles.description}>{selectedCourse.course2}</Text>

        <Text style={styles.description}>{selectedCourse.course3}</Text>

       <View style={styles.buttonContainer}>
          <TouchableOpacity 
          style={styles.buttonStyle}
             onPress = {() => OpenAnything.Pdf("http://btechcsegehu.in/wp-content/uploads/2020/12/syllabus-CSE_-14.pdf")
            }
             >
            <Text style={styles.buttonText}>
              Syllabus
            </Text>
          </TouchableOpacity>

       </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  courseContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: "80%",
    display: "flex",
    alignSelf: "center",
    height: undefined,
    aspectRatio: 1,
  },

  mainHeader: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 5,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  subHeader: {
    fontSize: 14,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    paddingBottom: 0,
    fontFamily: "JosefinSans_500Medium",
    textAlign: "center",
  },

  description: {
    textAlign: "left",
    fontSize: 14,
    color: "black",
    paddingBottom: 15,
    // fontFamily: "JosefinSans_300Light",
    lineHeight: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

 
  buttonStyle: {
    backgroundColor: "#809fff",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    // fontFamily: "JosefinSans_400Regular",
  },
});

export default CourseDetails;
  
  
  
  
 //6.  Courseapi.js(api)
  
  
 const Courses = [
    {
    id:"1",
    title:"SEM 1",
        image: require("../../assets/course/html.jpg"),
        
    description:
     "",
     course1:"                  LIST OF SUBJECTS \n\n1. Fundamental Of Computer and introduction \n  \n    to Programming",
     course2:"2. Finite Automata and Formal Language",
     course3:"3. Microprocessor\n\n4.Computer Organization\n\n5.java Programming LaB",
    
     },

     {
        id:"2",
        title:"SEM 2",
        image:require("../../assets/course/cn.jpg"),
        
        description:
         "",
         course1:"                  LIST OF SUBJECTS \n\n1. Programming for Problem solving",
         course2:"2. Finite Automata and Formal Language",
         course3:"3. Microprocessor\n\n4.Computer Organization\n\n5.java Programming Lab",
    },

    {
        id:"3",
        title:"SEM 3",
        image:require("../../assets/course/cd.jpg"),
        
        description:
         "",
         course1:"                    LIST OF SUBJECTS \n\n1. Logic Design",
         course2:"2. Data Structure with C",
         course3:"3. OOP with C++\n\n4.Fundamentals of Cyber Security\n\n5. Fundamentals of IOT",
    },

    {
        id:"4",
        title:"SEM 4",
        image:require("../../assets/course/se.jpg"),
        description:
         "",
         course1:"                  LIST OF SUBJECTS \n\n1. Computer Based Numerical And Statistical\n\n    Technique",
         course2:"2. Finite Automata and Formal Language",
         course3:"3. Microprocessor\n\n4.Computer Organization\n\n5.java Programming Lab",
     },
    
    {
        id:"5",
        title:"SEM 5",
        image:require("../../assets/course/ip.jpg"),
        description:
            "",
            course1:"                  LIST OF SUBJECTS \n\n\n1. System Software",
         course2:"2. Operating System",
         course3:"3. Data Base Management System\n\n4.Design Analysis And Algorithm\n\n5.Career Skills",
    },
             
     {   
        id:"6",
        title:"SEM 6",
        image:require("../../assets/course/six.jpg"),
        description:
        "",
        course1:"                  LIST OF SUBJECTS \n\n1. Compiler Design",
        course2:"2. Computer Network",
        course3:"3. Software Engineering\n\n4.Full Stack Web Development\n\n5.Career skills",
            },
        
            {   
                id:"7",
                title:"SEM 7",
                image:require("../../assets/course/sev.jpg"),
                description:
                "",
                course1:"                  LIST OF SUBJECTS \n\n1. Cryptography",
                course2:"2. Advance Computer Architecture",
                course3:"3. Artificial Intelligence\n\n4.Computer Networks - II\n\n5.Software Verification and Validation and  \n   Testing ",
                    },

                    {  
                        id:"8",
                        title:"SEM 8",
                        image:require("../../assets/course/eight.jpg"),
                        description:
                        "",
                        course1:"                  LIST OF SUBJECTS \n\n1. Mobile Computing",
                        course2:"2. Disaster Management",
                        course3:"3. Mobile Application Development\n\n4. Computer Graphics\n\n5. Soft Computing",
                            },

];
export default Courses;
  
  
  
 //7. UserData.js(screen)
  
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
       
       

       
 //8. noticeapi.js(api)
      
       
      const Notice = [
    {
    id:"1",
    title:"6th SEMESTER MINI PROJECT \n\nEVALUATION DATE ",
        
        
    description:
     "CLICK TO SEE THE DETAILS  ",
    
     },

     {
        id:"2",
        title:"END SEMESTER BACK \n\nEXAMINATION DATE",
        
        
        description:
        "CLICK TO SEE THE DETAILS  ",
       
    },

    {
        id:"3",
        title:"END TERM PRACTICAL EXAM \n\nFOR 4 SEM",
        
        description:
        "CLICK TO SEE THE DETAILS  ",
     
    },

    {
        id:"4",
        title:"4th SEMESTER EXAM \n\nSCHEDULE",
        description:
        "CLICK TO SEE THE DETAILS  ",
     
     },

     
    
   
];
export default Notice;
       
       
       
 //9. About.js(screen)
       
     import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>GRAPHIC ERA</Text>
      <Text style={styles.paraStyle}> CSE Department</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://th.bing.com/th/id/R.7dcebfedcf7f77cf12885ffede1f6013?rik=D2bE535ItiP7oQ&riu=http%3a%2f%2fwww.namastedehradun.com%2fwp-content%2fuploads%2f2016%2f06%2fGraphic_Era_Hill_University_Logo-300x300.png&ehk=Ivyd0A0HWWxcgHel8vXlOMy58tiHS%2ffweQA3NeQ3sR4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
          }}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About CSE Department</Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
        The Department of Computer Science and Engineering of GEU has celebrated 25 years of excellence in research and education, with year-round talks by our distinguished alumni.  Information, computing and communication technologies pervade nearly all aspects of today’s digital society and will continue in the decades ahead to be of critical importance to the nation’s technological infrastructure.  We are proud of the accomplishments of our many alumni, including among them prize-winning researchers, developers and project leaders in world class multinational organizations like Microsoft, Yahoo, Amazon, Google, Intel, Oracle, Adobe, Cognizant and so on.
        </Text>
      </View>

      <Text style={styles.mainHeader}> Follow  on   Social  Network </Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://instagram.com/geuofficial?igshid=YmMyMTA2M2Y=")
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/c/GraphicEraOfficial"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://twitter.com/GEU_Official")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://www.bing.com/th?id=OIP.PSj_SQum7CH01WhmY2kFcAHaHx&w=244&h=256&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    // fontFamily: "JosefinSans_700Bold",
  },
  paraStyle: {
    fontSize: 13,
    color: "#7d7d7d",
    paddingBottom: 5,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 10,
    // fontFamily: "JosefinSans_700Bold",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
    fontSize:13
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
    
  },
});

export default About;
       

//10. Contact.js(screen)
  import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Level up your knowledge </Text>

      <Text style={styles.description}>
        You can reach us anytime via nik9897141490@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your name </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Name"}
          value={name}
          onChangeText={(userdata) => setName(userdata)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your Email </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@gmail.com"}
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Enter your mobile </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"xxxxxxxxxx"}
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> How can we help you? </Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyle]}
          placeholder={"Tell us aboout your query"}
          value={message}
          onChangeText={(msg) => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* checkbox  */}

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      {/* submit button  */}

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}> Contact Us </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    // fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    // fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    // fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    // fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
  },
});

export default Contact;
  
  
  


  





