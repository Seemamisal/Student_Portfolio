import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Linking, TouchableOpacity, TextInput } from 'react-native';

const initialProjectsData = [
  { 
    id: '1', 
    title: 'Library Management System', 
    description: `A software designed to manage all functions of a library, automating activities such as maintaining the database of new books, tracking borrowed books and due dates, handling late fines, and providing instant access to accurate book data. It ensures efficient organization and management of library resources.`, 
    link: 'https://github.com/student/library-management-system' 
  },
  { 
    id: '2', 
    title: 'Pharmacy Management System', 
    description: `A digital platform that automates and organizes many day-to-day tasks of pharmacies, including inventory management with real-time updates, prescription review and dispensing, billing and insurance handling, drug delivery management, and clinical decision support.`, 
    link: 'https://github.com/student/pharmacy-management-system' 
  },
];

const ProjectsScreen = () => {
  const [projectsData, setProjectsData] = useState(initialProjectsData);
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const [newProjectLink, setNewProjectLink] = useState('');

  const addProject = () => {
    const newProject = {
      id: `${projectsData.length + 1}`,
      title: newProjectTitle,
      description: newProjectDescription,
      link: newProjectLink
    };

    setProjectsData([...projectsData, newProject]);
    setNewProjectTitle('');
    setNewProjectDescription('');
    setNewProjectLink('');
  };

  const removeProject = (projectId) => {
    const updatedProjects = projectsData.filter(item => item.id !== projectId);
    setProjectsData(updatedProjects);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={projectsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => removeProject(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={styles.link}>View Project</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.addForm}>
        <TextInput
          style={styles.input}
          placeholder="Enter Project Title"
          placeholderTextColor="white"
          value={newProjectTitle}
          onChangeText={text => setNewProjectTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Project Description"
          placeholderTextColor="white"
          value={newProjectDescription}
          onChangeText={text => setNewProjectDescription(text)}
          multiline
          numberOfLines={4}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter GitHub Link"
          placeholderTextColor="white"
          value={newProjectLink}
          onChangeText={text => setNewProjectLink(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addProject}>
          <Text style={styles.addButtonText}>Add Project</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5f9ea0', // Background color similar to other screens
  },
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  link: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 5,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 12,
    zIndex: 1,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  addForm: {
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#007bff',
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
});

export default ProjectsScreen;
