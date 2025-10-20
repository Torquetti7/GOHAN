import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from '../components/MainLayout';
import chat from '../pages/chat'
import Home from "../pages/Home/Home";
import notification from "../pages/notification";
import PerfilA from "../pages/perfilA";
import contestarstrike from "../pages/contestarstrike";
import Acessibilidade from "../pages/acessibilidade";
import login from "../pages/login";
import register from "../pages/register";
import premium from "../pages/premium";
import agenda from "../pages/agenda";
import PerfilPP from "../pages/perfilPP";
import configuracoes from "../pages/configuracao/configuracoes";

const Stack = createNativeStackNavigator();

function MainScreens() {
  return (
    <MainLayout>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="perfilA" component={PerfilA} />
        <MainStack.Screen name="chat" component={chat} />
        <MainStack.Screen name="notification" component={notification} />
      </MainStack.Navigator>
    </MainLayout>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="notification" component={notification} />
      <Stack.Screen name="perfilA" component={PerfilA} />
      <Stack.Screen name="chat" component={chat} />
      <Stack.Screen name="contestarstrike" component={contestarstrike} />
      <Stack.Screen name="premium" component={premium} />
      <Stack.Screen name="acessibilidade" component={Acessibilidade} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="agenda" component={agenda} />
      <Stack.Screen name="perfilPP" component={PerfilPP} />
      <Stack.Screen name="configuracoes" component={configuracoes} />
    </Stack.Navigator>
  );
}