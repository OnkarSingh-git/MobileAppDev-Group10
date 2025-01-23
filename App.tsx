import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => {}}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>WildWorld</Text>
        <View style={styles.headerRight}></View>
      </View>

      {/* Sub Header */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Posts</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Post Container */}
        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image
              style={styles.profilePic}
              source={{
                uri: "https://as2.ftcdn.net/v2/jpg/05/18/28/65/1000_F_518286501_YSPgE38sqlRK1Ys25KWoO5RdCRTPXCba.jpg",
              }}
            />
            <Text style={styles.username}>WildWorld</Text>
            <View style={styles.menuDots}>
              <Text style={styles.menuDot}>•</Text>
              <Text style={styles.menuDot}>•</Text>
              <Text style={styles.menuDot}>•</Text>
            </View>
          </View>

          {/* Post Image */}
          <Image
            style={styles.postImage}
            source={{
              uri: "https://churchillwild.com/wp-content/uploads/2016/11/growlingpolarbearnanuk.jpg",
            }}
          />
