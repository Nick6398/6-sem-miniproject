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

