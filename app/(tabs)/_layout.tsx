import { Tabs, usePathname } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import clsx from "clsx";

const TabLayout = () => {
  const pathname = usePathname();
  const tabs = [
    {
      name: "explore",
      icon: "compass",
      title: "Explore",
    },
    {
      name: "categories",
      icon: "apps",
      title: "Categories",
    },
    {
      name: "stores",
      icon: "storefront",
      title: "Stores",
    },
    {
      name: "profile",
      icon: "person",
      title: "Profile",
    },
  ];
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          name={tab.name}
          key={tab.name}
          options={{
            title: tab.title,
            tabBarStyle: {
              height: 68,
              paddingTop: 8,
              display: pathname === `/${tab.name}` ? "flex" : "none",
            },
            tabBarIcon: ({ color }) => (
              <Ionicons name={tab.icon as any} size={24} color={color} />
            ),
            tabBarLabel: ({ focused, children }) => {
              return (
                <Text className={clsx(focused && "font-semibold")}>
                  {children}
                </Text>
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;
