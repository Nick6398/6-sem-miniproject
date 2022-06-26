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

// !todo style the course1 and make it uppercase

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

