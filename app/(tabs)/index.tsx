import { Image, StyleSheet, Platform } from "react-native";
import { Text, TextInput, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const bgImage =
		colorScheme === "light"
			? require("@/assets/images/bg_image_light.png")
			: require("@/assets/images/bg_image_dark.png");
	return (
		<View
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
				backgroundColor:
					Colors[(colorScheme as "light" | "dark") ?? "light"].Background,
			}}
		>
			<Image source={bgImage} />
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

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
