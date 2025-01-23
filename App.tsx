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
          {/* Post Actions and Details */}
          <View style={styles.postDetails}>
            <View style={styles.postActions}>
              <View style={styles.leftActions}>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="heart-outline"
                    size={24}
                    color="black"
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={24}
                    color="black"
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons
                    name="paper-plane-outline"
                    size={24}
                    color="black"
                    style={styles.actionIcon}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Ionicons name="bookmark-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Text style={styles.likes}>
              Liked by paisley.print.48 and 225 others
            </Text>
            <Text style={styles.caption}>Nanuk Polar Bear Lodge </Text>
            <Text style={styles.comments}>View all 12 comments</Text>
            <Text style={styles.comment}>
              <Text style={styles.commentUser}>lil_wyatt838</Text> Awesome photo
            </Text>
            <Text style={styles.comment}>
              <Text style={styles.commentUser}>pia.in.a.pod</Text> Gorg. Love
              it! ❤️
            </Text>
            <Text style={styles.comments}>1 Day Ago</Text>
          </View>
        </View>

        {/* Alert Button */}
        <TouchableOpacity
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Tab */}
      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Ionicons name="heart-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => {}}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
