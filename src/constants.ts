import type React from 'react';
import Profile from './components/Profile';
import Interest from './components/Interest';
import Settings from './components/Settings';
import type { ErrorStateType, FromDataType } from './App';
export interface TabsProp {
  data: FromDataType;
  setData: React.Dispatch<React.SetStateAction<FromDataType>>;
   errorState: ErrorStateType;
}
export interface TabsType {
  name: string;
  component: React.FC<TabsProp>;
}
export const Tabs: TabsType[] = [
  {
    name: 'Profile',
    component: Profile,
  },
  {
    name: 'Interest',
    component: Interest,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];
