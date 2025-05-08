import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={[styles.container, styles.background]}>
      <View style={styles.calculator_container}>
        
        {/* Display */}
        <View style={styles.area_de_texto}>
          <View style={styles.display}>
            <TextInput style={styles.display_text}></TextInput>
            <Text style={styles.display_text}></Text>
          </View>
          <TouchableOpacity style={styles.delete_button}>
            <Text style={[styles.text, { color: "black" }]}>⌫</Text>
          </TouchableOpacity>
        </View>

        {/* Botões */}
        <View style={[styles.row]}>
          {["C", "( )", "%", "÷"].map((item) => (
            <Button key={item} label={item} />
          ))}
        </View>
        <View style={styles.row}>
          {["7", "8", "9", "x"].map((item) => (
            <Button key={item} label={item} />
          ))}
        </View>
        <View style={styles.row}>
          {["4", "5", "6", "-"].map((item) => (
            <Button key={item} label={item} />
          ))}
        </View>
        <View style={styles.row}>
          {["1", "2", "3", "+"].map((item) => (
            <Button key={item} label={item} />
          ))}
        </View>
        <View style={styles.row}>
          {["+/-", "0", "=", "."].map((item) => (
            <Button key={item} label={item} />
          ))}
        </View>

      </View>
    </View>
  );
}

function Button({ label }: { label: string }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    backgroundColor: "#1b263b",
  },
  calculator_container: {
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  area_de_texto: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0d1b2a",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  display: {
    alignItems: "flex-end",
  },
  display_text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e0e1dd",
    alignSelf: "flex-start",
    fontFamily: 'Poppins_Medium',
    maxWidth: 250,
  },
  delete_button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: "50%",
    maxWidth: 100,
    maxHeight: 100,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
    minWidth: 80,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#415a77',
    padding: 10,
    borderRadius: "50%",
    minWidth: 80,
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e0e1dd",
    fontFamily: 'Poppins_Medium',
  },
});
