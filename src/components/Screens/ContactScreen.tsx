import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#5f9ea0'); // Initial background color

  const handleInputChange = (text) => {
    // Update message and background color based on input length
    setMessage(text);
    if (text.length > 50) {
      setBackgroundColor('#6ab04c'); // Greenish color for longer messages
    } else {
      setBackgroundColor('#5f9ea0'); // Default background color
    }
  };

  const handleSubmit = () => {
    // Constructing the message content including personal contact information
    const messageContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nE-Mail: shubhalfengade3@gmail.com\n\nCall: +91 7875586683`;

    // Displaying an alert with the message content
    Alert.alert('Message Sent', messageContent);

    // Clearing the input fields
    setName('');
    setEmail('');
    setMessage('');
    setBackgroundColor('#5f9ea0'); // Reset background color
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.textArea, { backgroundColor: '#f0f0f0' }]} // Fixed background color
          value={message}
          onChangeText={handleInputChange} // Use handleInputChange for dynamic background color
          placeholder="Enter your message"
          placeholderTextColor="#888"
          multiline
        />
        <Button title="Send" onPress={handleSubmit} />

        {/* Contact details card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact Details</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>📧 E-Mail me at:</Text>
            <Text style={styles.contactText}>abc@gmail.com</Text>
            <Text style={styles.contactLabel}>📞 Call me at:</Text>
            <Text style={styles.contactText}>+91 02********</Text>
            <Text style={styles.contactLabel}>🏠 ADDRESS:</Text>
            <Text style={styles.contactText}>**********India.</Text>
            <Text style={styles.contactLabel}>🔗 LinkedIn:</Text>
            <Text style={styles.contactText}>linkedin.com/in/yourprofile</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333', // Dark text color
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginTop: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0', // Light gray input background
    marginBottom: 10,
    fontSize: 16,
    color: '#333', // Dark text color
  },
  textArea: {
    borderWidth: 1,
    padding: 12,
    marginTop: 5,
    borderRadius: 8,
    height: 120,
    marginBottom: 10,
    fontSize: 16,
    color: '#333', // Dark text color
    textAlignVertical: 'top', // Ensures text starts from top in multiline input
  },
  card: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White background color for card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark text color
  },
  contactInfo: {
    marginTop: 10,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark text color
    marginBottom: 5,
  },
  contactText: {
    fontSize: 16,
    color: '#333', // Dark text color
    marginBottom: 10,
  },
});

export default ContactScreen;
