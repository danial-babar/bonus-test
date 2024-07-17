import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { tasks } from "../constant/dummyData";

const Home = () => {
  const dailyCheckin = [
    { day: "Day 1", bonus: "+20" },
    { day: "Day 2", bonus: "+20" },
    { day: "Day 3", bonus: "+25" },
    { day: "Day 4", bonus: "+25" },
    { day: "Day 5", bonus: "+30" },
    { day: "Day 6", bonus: "+30" },
    { day: "Day 7", bonus: "+35" },
  ];

  const tasksForBeginners = [
    { task: "Get reward notifications", bonus: "+20 Bonus" },
    { task: "Get reward sharing", bonus: "+20 Bonus" },
    { task: "Get reward review", bonus: "+100 Bonus" },
    { task: "Complete your profile", bonus: "+50 Bonus" },
    { task: "Complete Book of Love", bonus: "+50 Bonus" },
    { task: "Follow us on Instagram", bonus: "+50 Bonus" },
    { task: "Follow us on Tik Tok", bonus: "+50 Bonus" },
    { task: "Confirm email", bonus: "+5 Bonus" },
  ];

  const adsBonus = [
    { bonus: "+5 Bonus" },
    { bonus: "+5 Bonus" },
    { bonus: "+10 Bonus" },
    { bonus: "+15 Bonus" },
    { bonus: "+15 Bonus" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={styles.bgImageStyle}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.backCont}>
            <Image
              source={require("../assets/icon/back.png")}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
            <View style={{ marginLeft: 18, marginTop: 20 }}>
              <Text style={styles.header}>Your Bonus:</Text>
              <Text style={styles.header}>20</Text>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.header}>Daily Check-in</Text>
            <Text style={styles.text2}>Earn rewards for check-in</Text>
            <View style={styles.dailyCheckinContainer}>
              {dailyCheckin.map((item, index) => (
                <View style={{ alignItems: "center" }}>
                  <View key={index} style={styles.dailyCheckinItem}>
                    <Text style={styles.bonusText}>{item.bonus}</Text>
                    <Image
                      source={require("../assets/coin.png")}
                      style={{ width: 15, height: 15, marginTop: 10 }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={styles.dayText}>{item.day}</Text>
                </View>
              ))}
            </View>

            {/* <TouchableOpacity style={styles.dailyBonusButton}> */}
            <LinearGradient
              colors={["#5470FE", "#FA67C6"]}
              style={styles.dailyBonusButton}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <Text style={styles.dailyBonusText}>Get Daily Bonus</Text>
            </LinearGradient>
            {/* <Text style={styles.dailyBonusText}>Get Daily Bonus</Text> */}
            {/* </TouchableOpacity> */}

            <Text style={styles.header}>Tasks for Beginners</Text>
            <Text style={styles.text2}>Only one chances</Text>
            {tasks.map((item, index) => (
              <View key={index} style={styles.taskItem}>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={item?.icon}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                  />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.taskText}>{item.title}</Text>
                    <Text style={styles.bonusText2}>{item.bonus}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <LinearGradient
                    colors={["#5470FE", "#FA67C6"]}
                    style={styles.taskBtn}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text style={{ fontSize: 12, color: "#FFF" }}>Get</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            ))}
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Watch Ads, Earn Bonus</Text>
              <Text style={styles.text2}>
                Watch all Ads, get extra rewards<Text style={{color:'#FF8AD2'}}>+ 20 Bonus</Text>
              </Text>
              {tasks.map((item, index) => (
                <View key={index} style={styles.taskItem}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={item?.icon}
                      style={{ width: 30, height: 30 }}
                      resizeMode="contain"
                    />
                    <View style={{ marginLeft: 15 }}>
                      <Text style={styles.bonusText2}>{item.bonus}</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <LinearGradient
                      colors={["#5470FE", "#FA67C6"]}
                      style={styles.taskBtn}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    >
                      <Text style={{ fontSize: 12, color: "#FFF" }}>Watch</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {
    width: "100%",
    height: "110%",
    position: "absolute",
    top: -25,
  },
  backCont: {
    width: "90%",
    // flexDirection: "row",
    marginTop: 100,
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  contentContainer: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    marginTop: 80,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 10,
    color: "#fff",
  },
  text2: {
    fontSize: 14,
    fontWeight: "300",

    color: "#8D8D8D",
  },
  dailyCheckinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    marginTop: 20,
  },
  dailyCheckinItem: {
    alignItems: "center",
    backgroundColor: "#2E3138",
    // padding: 5,
    padding: 8,
    borderRadius: 10,
  },
  dayText: {
    fontSize: 10,
    color: "#8D8D8D",
  },
  bonusText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#878787",
  },
  bonusText2: {
    fontSize: 12,
    fontWeight: "300",
    color: "#FF6BC5",
  },
  dailyBonusButton: {
    backgroundColor: "#FF69B4",
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  taskBtn: {
    backgroundColor: "#FF69B4",

    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 25,
  },
  dailyBonusText: {
    fontSize: 16,
    color: "#FFF",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#2E3138",
    marginVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 12,
    color: "#fff",
  },
  adItem: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  adText: {
    fontSize: 14,
    color: "#000",
  },
});
