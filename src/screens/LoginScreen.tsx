import React, { useState, useEffect} from "react";
import {
  SafeAreaView,
  StatusBar,
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { auth } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";


export const LoginScreen = (props: any) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [error, setError] = useState("");
  

  const emailChangeHandler = (text: string) => {
    console.log(text)
      if (text.length === 0) {
          setEmailIsValid(false);
      } else {
          setEmailIsValid(true);
      }
      setEmail(text);
  };

  const passwordChangeHandler = (text: string) => {
    console.log(text)
    if (text.length < 6) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
    setPassword(text);
  };


  const login = async () => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user info: ", user)
      navigation.navigate('Home')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
      setError(error.code)
    })

  }

  const loginHandler = async () => {
    if (emailIsValid === false || passwordIsValid === false) {
      setError("The email is invalid or the password is less than 6 characters")
    } else {
      login();
    }
  }

  useEffect(() => {
    if (error) {
      Alert.alert("Login Failed", error, [{ text: "Okay" }]);
    }
    setError("");
  }, [error]);
     

    return (
      <SafeAreaView style={styles.screen}>
          <StatusBar barStyle="dark-content" animated={true} />
            <ScrollView style={styles.container}>
            <View style={styles.innerHeader}>
              <Text style={styles.title}>Login</Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={styles.login}
                    onPress={() => navigation.navigate("SignUp")}
                  >
                  Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={text => emailChangeHandler(text)}
              style={styles.input}
            />
              <TextInput
              placeholder="Password"
              value={password}
              onChangeText={text => passwordChangeHandler(text)}
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor="rgba(0,0,0,0.7)"
            style={styles.btnBG}
            onPress={loginHandler}
          >
              <Text style={styles.btnText}>Log in</Text>
          </TouchableHighlight>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#665aad",

  },
  header: {
    flexDirection: "row",
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    borderBottomWidth: 0.75,
    borderBottomColor: "#E8D7CC",
    backgroundColor: "#665aad",
  },
  innerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginTop: 20,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,

  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
  },

  container: {
    paddingHorizontal: 15,
   
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    marginBottom: 15,
  },
  chevron: {
    paddingTop: 8,
    paddingRight: 10,
    alignItems: "center",
  },
  btnBG: {
    backgroundColor: "rgba(0,0,0,0.9)",
    padding: 10,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 30,
    minWidth: 300,
    marginBottom: 25,
    borderWidth: 2,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  login: {
    alignItems: "center",
    color: "#ffffff",
    fontWeight: "700",
    // marginHorizontal: 5,
    // marginVertical: 10,
    fontSize: 20,
  },
  disclaimerLink: {
    color: "#C83E6F",
    textDecorationLine: "underline",
  },
})