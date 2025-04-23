import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import clsx from "clsx";
import { CheckBox } from "@rneui/themed";
import Feather from "@expo/vector-icons/Feather";
import CustomButton from "@/components/button";

enum Status {
  Done = "done",
  Shipping = "shipping",
  Inprogress = "inprogress",
  Next = "next",
}

const steps = [
  {
    status: "done",
    title: "Your bag",
  },
  {
    status: "done",
    title: "Shipping",
  },
  {
    status: "inprogress",
    title: "Payment",
  },
  {
    status: "next",
    title: "Review",
  },
];

const cards = [
  {
    type: "Mastercard",
    number: "xxxx xxxx xxxx 1234",
  },
  {
    type: "Visa",
    number: "xxxx xxxx xxxx 9876",
  },
];

const payments = ["Credit Card", "Apple Pay"];

const CheckoutScreen = () => {
  const [selectedIndex, setIndex] = useState<number>(0);
  const [selectCard, setSelectCard] = useState<string>(cards[0].number);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView>
          <View className="p-2 flex-row justify-between">
            {steps.map((item, index) => (
              <View key={index} className="flex-1 my-2">
                <View
                  className={clsx(
                    "w-7 h-7 mb-3 rounded-full m-auto bg-[#B4DBFF]",
                    item.status === Status.Inprogress && "bg-primary",
                    item.status === Status.Next && "bg-[#F8F9FE]"
                  )}
                >
                  <View className="m-auto">
                    {item.status === Status.Done ? (
                      <FontAwesome5 name="check" size={10} color="#006FFD" />
                    ) : (
                      <Text
                        className={clsx(
                          "font-semibold text-sm",
                          item.status === Status.Inprogress
                            ? "color-white"
                            : "color-[#8F9098]"
                        )}
                      >
                        {index + 1}
                      </Text>
                    )}
                  </View>
                </View>
                <Text
                  className={clsx(
                    "m-auto font-bold",
                    item.status !== Status.Inprogress && "color-[#8F9098]"
                  )}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
          <View className="px-6 pt-8 pb-6">
            <Text className="font-extrabold tracking-wider text-lg mb-[10px]">
              Choose a payment method
            </Text>
            <Text className="color-[#71727A] tracking-widest">
              You won't be charged until you review the order on the next page
            </Text>
          </View>
          <View className="p-4 gap-y-4">
            {payments.map((item, index) => (
              <View
                key={index}
                className="rounded-2xl border-[#D4D6DD] border-[1px]"
              >
                <CheckBox
                  checked={selectedIndex === index}
                  onPress={() => setIndex(index)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  title={item}
                  checkedColor="#006FFD"
                />
                {selectedIndex === index && (
                  <View>
                    <View className="my-6 px-4 gap-y-2">
                      {cards.map((item, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => setSelectCard(item.number)}
                          activeOpacity={0.8}
                        >
                          <View
                            className={clsx(
                              "flex-row justify-between items-center p-4 rounded-xl",
                              selectCard === item.number && "bg-[#EAF2FF]",
                              selectCard !== item.number &&
                                "border-[1px] border-[#C5C6CC]"
                            )}
                          >
                            <View>
                              <Text>{item.type}</Text>
                              <Text className="color-[#71727A] mt-1">
                                {item.number}
                              </Text>
                            </View>
                            {selectCard === item.number && (
                              <Feather name="check" size={20} color="#006FFD" />
                            )}
                          </View>
                        </TouchableOpacity>
                      ))}
                      <CustomButton
                        title="+ Add new card"
                        onPress={() => {}}
                        type="terciary"
                      />
                    </View>
                    <View className="flex-row items-center">
                      <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="#006FFD"
                      />
                      <Text className="flex-1 color-[#71727A]">
                        My billing address is the same as my shipping address
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </View>
          <View className="p-6">
            <CustomButton title="Continute" onPress={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default CheckoutScreen;
