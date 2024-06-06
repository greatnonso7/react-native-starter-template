import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  AppDashboard: NavigatorScreenParams<DashboardStackParamList>;
};

export type AuthStackParamList = {
  Onboarding: undefined;
};

export type DashboardStackParamList = {
  Dashboard: BottomTabStackParamList;
};

export type BottomTabStackParamList = {
  Home: undefined;
  Cards: undefined;
  More: undefined;
  History: undefined;
};
