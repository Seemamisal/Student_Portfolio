import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for icons

const SkillsScreen = () => {
  const [technicalSkills, setTechnicalSkills] = useState(['JavaScript', 'React Native', 'Node.js']);
  const [softSkills, setSoftSkills] = useState(['Communication', 'Teamwork', 'Problem-solving']);
  const [newTechnicalSkill, setNewTechnicalSkill] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');

  const addTechnicalSkill = () => {
    if (newTechnicalSkill.trim() === '') return; // Prevent adding empty skills
    setTechnicalSkills([...technicalSkills, newTechnicalSkill]);
    setNewTechnicalSkill('');
  };

  const addSoftSkill = () => {
    if (newSoftSkill.trim() === '') return; // Prevent adding empty skills
    setSoftSkills([...softSkills, newSoftSkill]);
    setNewSoftSkill('');
  };

  const removeTechnicalSkill = (skillName) => {
    const updatedSkills = technicalSkills.filter(skill => skill !== skillName);
    setTechnicalSkills(updatedSkills);
  };

  const removeSoftSkill = (skillName) => {
    const updatedSkills = softSkills.filter(skill => skill !== skillName);
    setSoftSkills(updatedSkills);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Technical Skills</Text>
        {technicalSkills.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <TouchableOpacity onPress={() => removeTechnicalSkill(skill)} style={styles.deleteButton}>
              <Ionicons name="close-circle-outline" size={24} color="grey" />
            </TouchableOpacity>
            <Text style={styles.skill}>{skill}</Text>
          </View>
        ))}
        <View style={styles.addSkillContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add New Technical Skill"
            value={newTechnicalSkill}
            onChangeText={text => setNewTechnicalSkill(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTechnicalSkill}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.card, { marginTop: 20 }]}>
        <Text style={styles.cardTitle}>Soft Skills</Text>
        {softSkills.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <TouchableOpacity onPress={() => removeSoftSkill(skill)} style={styles.deleteButton}>
              <Ionicons name="close-circle-outline" size={24} color="grey" />
            </TouchableOpacity>
            <Text style={styles.skill}>{skill}</Text>
          </View>
        ))}
        <View style={styles.addSkillContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add New Soft Skill"
            value={newSoftSkill}
            onChangeText={text => setNewSoftSkill(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={addSoftSkill}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#5f9ea0' },
  card: { backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 10, borderRadius: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  skillItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  skill: { fontSize: 16, marginTop: 5, marginLeft: 10 },
  deleteButton: { marginRight: 5 },
  addSkillContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default SkillsScreen;
