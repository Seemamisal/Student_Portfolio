import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Example: using FontAwesome icons

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Icon Placeholder */}
        <Icon name="user-circle" size={150} style={styles.photo} />
        {/* Student's Name */}
        <Text style={styles.name}>Lily D'souza</Text>
        {/* Student's Bio */}
        {[
          "Hello! I am Lily D'souza, a passionate software developer with a focus on building mobile applications. I enjoy learning new technologies and solving challenging problems. 💻",
          "Computer science graduate eager to apply knowledge and skills to software development. Strong foundation in Java and Python, eager to learn and grow. 🎓",
          "Motivated and hardworking individual with a passion for software development seeks hands-on experience with a team of professionals. Strong understanding of software development concepts and eagerness to learn new technologies. 🚀",
          "Recent graduate with a degree in computer science and a passion for software development. Expertise in C++ and experience with React. Quick learner and confident contributor. 🌟",
          "Recent software engineering graduate with programming experience in JavaScript and a strong understanding of software engineering concepts. Ready to make meaningful contributions to any team. 🔧",
          "Motivated and dedicated individual passionate about software development. Experience in Ruby and commitment to continuous learning and growth as a developer. 📚"
        ].map((bio, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.bio}>{bio}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5f9ea0', // Updated background color
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    marginBottom: 20,
    color: '#ffffff', // Icon color
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // White color for the name
    marginBottom: 20,
    letterSpacing: 1,
  },
  card: {
    width: '90%',
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#ffffff', // White background color for cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#bdc3c7', // Neutral border color for cards
    borderWidth: 1,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#34495e', // Darker gray for bio text
    lineHeight: 24,
  },
});

export default HomeScreen;
