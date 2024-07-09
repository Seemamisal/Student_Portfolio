import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const initialEducationData = [
  { id: '1', degree: 'B.E Computer Science', institution: 'University Name', college: 'College of Engineering', year: '2024' },
  { id: '2', degree: 'High School Diploma', institution: 'Collage Name', college: 'ABC College', year: '2020' },
];

const EducationScreen = () => {
  const [educationData, setEducationData] = useState(initialEducationData);
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');

  const addEducation = () => {
    const newEntry = {
      id: (educationData.length + 1).toString(),
      degree,
      institution,
      college,
      year,
    };
    setEducationData([...educationData, newEntry]);
    setDegree('');
    setInstitution('');
    setCollege('');
    setYear('');
  };

  const removeEducation = (id) => {
    setEducationData(educationData.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={educationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.degree}>{item.degree}</Text>
            <Text style={styles.institution}>{item.institution}</Text>
            <Text style={styles.college}>{item.college}</Text>
            <Text style={styles.year}>{item.year}</Text>
            <TouchableOpacity
              style={[styles.removeButton, styles.addButton]}
              onPress={() => removeEducation(item.id)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.addForm}>
        <TextInput
          style={styles.input}
          placeholder="Degree with Stream"
          placeholderTextColor="white"
          value={degree}
          onChangeText={setDegree}
        />
        <TextInput
          style={styles.input}
          placeholder="University Name"
          placeholderTextColor="white"
          value={institution}
          onChangeText={setInstitution}
        />
        <TextInput
          style={styles.input}
          placeholder="College Name"
          placeholderTextColor="white"
          value={college}
          onChangeText={setCollege}
        />
        <TextInput
          style={styles.input}
          placeholder=" Passout Year"
          placeholderTextColor="white"
          value={year}
          onChangeText={setYear}
        />
        <TouchableOpacity style={styles.addButton} onPress={addEducation}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5f9ea0', // Background color similar to ContactScreen
  },
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  institution: {
    fontSize: 16,
  },
  college: {
    fontSize: 16,
    color: 'black',
  },
  year: {
    fontSize: 14,
    color: 'black',
  },
  removeButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#84b8d3', // Default background color for the button
  },
  removeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007bff', // Same background color as remove button
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addForm: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default EducationScreen;
