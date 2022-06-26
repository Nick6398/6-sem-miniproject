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

