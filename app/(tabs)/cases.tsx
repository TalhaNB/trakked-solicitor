import { Image, Text, TextInput, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import React from "react";
import CaseList from "../../components/caseList";

export default function TabTwoScreen() {
	const colorScheme = useColorScheme();
	const [text, onChangeText] = React.useState("");
	return (
		<View
			style={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
				height: "100%",
				paddingTop: 40,
				backgroundColor:
					Colors[(colorScheme as "light" | "dark") ?? "light"].Background,
			}}
		>
			<TextInput
				style={{
					height: 60,
					margin: 12,
					backgroundColor:
						Colors[(colorScheme as "light" | "dark") ?? "light"].TertiaryLight,
					borderRadius: 40,
					width: "80%",
					paddingHorizontal: 30,
					fontSize: 16,
					color: Colors[(colorScheme as "light" | "dark") ?? "light"].White,
				}}
				onChangeText={onChangeText}
				value={text}
				placeholder="Search cases..."
				clearTextOnFocus
				placeholderTextColor={
					Colors[(colorScheme as "light" | "dark") ?? "light"].White
				}
			/>

			<CaseList />
		</View>
	);
}
