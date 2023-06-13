import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
} from './Validations';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    setFirstNameError(null);
    setFormError(null);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    setLastNameError(null);
    setFormError(null);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailError(null);
    setFormError(null);
  };

  const handlePhoneNumberChange = (text) => {
    const formattedPhoneNumber = text.replace(/[^0-9]/g, '');
    setPhoneNumber(formattedPhoneNumber);
    setPhoneNumberError(null);
    setFormError(null);
  };

  const handleSubmit = () => {
    const firstNameValidationMessage = validateFirstName(firstName);
    const lastNameValidationMessage = validateLastName(lastName);
    const emailValidationMessage = validateEmail(email);
    const phoneNumberValidationMessage = validatePhoneNumber(phoneNumber);

    setFirstNameError(firstNameValidationMessage);
    setLastNameError(lastNameValidationMessage);
    setEmailError(emailValidationMessage);
    setPhoneNumberError(phoneNumberValidationMessage);

    if (
      firstNameValidationMessage === '' &&
      lastNameValidationMessage === '' &&
      emailValidationMessage === '' &&
      phoneNumberValidationMessage === ''
    ) {
      setFormError(null);
      Alert.alert('Success', 'Form submitted successfully.');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
    } else {
      setFormError('Please fill in the required fields correctly.');
    }
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setFirstNameError(null);
    setLastNameError(null);
    setEmailError(null);
    setPhoneNumberError(null);
    setFormError(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={handleFirstNameChange}
          />
          {firstNameError && <Text style={styles.errorText}>{firstNameError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={handleLastNameChange}
          />
          {lastNameError && <Text style={styles.errorText}>{lastNameError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={handleEmailChange}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            keyboardType="numeric"
          />
          {phoneNumberError && <Text style={styles.errorText}>{phoneNumberError}</Text>}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleReset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 40,
    },
    formContainer: {
      width: '80%',
      margin:40
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      margin: 50,
      textAlign: 'center',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    button: {
      backgroundColor: '#0066cc',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default RegistrationForm;
