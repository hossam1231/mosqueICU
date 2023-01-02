import * as React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  CheckIcon,
  Text,
  useColorMode,
  View,
  extendTheme,
  VStack,
  Badge,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FLTest from "./component/FLTest";

// Define the config
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

function HomeScreen() {
  return (
    <Box style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </Box>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function TestScreen() {
  let name = "Francis";
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack space={5}
      bg={colorMode == "dark" && "#202223"}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <VStack space={2}>
        <HStack space={3}>
          <HStack space={2}>
            <CheckIcon size="5" mt="0.5" color="emerald.500" />
            <Text>{name}</Text>
          </HStack>{" "}
          <HStack space={2}>
            <Badge colorScheme="success">
              <Text>Success</Text>
            </Badge>{" "}
            <Badge colorScheme="success">
              <Text>Success</Text>
            </Badge>{" "}
          </HStack>{" "}
        </HStack>
        <HStack space={2}>
          <CheckIcon size="5" mt="0.5" color="emerald.500" />
          <Text>{name}</Text>
        </HStack>
        <HStack space={3}>
          <HStack space={1}>
            <Text bold>2,400</Text>
            <Text>posts</Text>
          </HStack>
          <HStack space={1}>
            <Text bold>2,400</Text>
            <Text>posts</Text>
          </HStack>
          <HStack space={1}>
            <Text bold>2,400</Text>
            <Text>posts</Text>
          </HStack>
        </HStack>
        <VStack>
          <Text bold>Number1#Veeyeahh</Text>
          <Text>For business opportunities: veelee.only</Text>
        </VStack>
      </VStack>
      <HStack>
        <FLTest/>
      </HStack>
    </VStack>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Test">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
            name="Test"
            component={TestScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
