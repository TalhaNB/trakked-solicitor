import { Image, Text, TextInput, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import React from "react";

export default function TabTwoScreen() {
	const colorScheme = useColorScheme();
	const [text, onChangeText] = React.useState("");
	const bgImage =
		colorScheme === "light"
			? require("@/assets/images/bg_image_light.png")
			: require("@/assets/images/bg_image_dark.png");
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

			<Image source={bgImage} style={{ marginTop: 60 }} />
			<Text
				style={{
					color: Colors[(colorScheme as "light" | "dark") ?? "light"].Active,
					textAlign: "center",
					fontSize: 28,
					fontStyle: "normal",
					fontWeight: "700",
					lineHeight: 38,
					letterSpacing: -0.28,
				}}
			>
				No Cases Found
			</Text>
			<Text
				style={{
					color: Colors[(colorScheme as "light" | "dark") ?? "light"].Active,
					textAlign: "center",
					fontSize: 16,
					fontStyle: "normal",
					fontWeight: "400",
					lineHeight: 24,
					letterSpacing: -0.14,
					width: "75%",
				}}
			>
				No cases to display at the moment. Begin by creating your first case
				with us.
			</Text>
		</View>
	);
}
