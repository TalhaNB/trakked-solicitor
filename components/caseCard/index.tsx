import { Colors } from "@/constants/Colors";
import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Text,
	useColorScheme,
	TouchableWithoutFeedback,
	Button,
} from "react-native";
import { CaseType } from "../caseList";

type CaseCardProps = {
	item: CaseType;
};

const getShadowColor = (status: string, theme: "light" | "dark") => {
	switch (status) {
		case "on_hold":
			return theme === "light" ? Colors.light.RedDark : Colors.dark.RedLight;
			break;
		case "in_progress":
			return theme === "light"
				? Colors.light.YellowDark
				: Colors.dark.YellowLight;
			break;
		case "completed":
			return theme === "light"
				? Colors.light.GreenDark
				: Colors.dark.GreenLight;
			break;
	}
};
const getBox = (status: string) => {
	switch (status) {
		case "on_hold":
			return require("@/assets/images/red_box.png");
		case "in_progress":
			return require("@/assets/images/yellow_box.png");
		case "completed":
			return require("@/assets/images/green_box.png");
	}
};

const CaseCard = ({ item }: CaseCardProps) => {
	const theme = useColorScheme() ?? "light";
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				console.log("touch me senpai");
			}}
		>
			<View
				style={{
					...styles.mainCardView,
					shadowColor: getShadowColor(item.status, theme),
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image
						source={getBox(item.status)}
						resizeMode="contain"
						style={{
							borderRadius: 25,
							height: 70,
							width: 70,
						}}
					/>
					<View style={{ marginLeft: 12, width: "60%" }}>
						<Text
							style={{
								fontSize: 14,
								color: Colors.light.Total,
								fontWeight: "bold",
								textTransform: "capitalize",
							}}
						>
							{item.client.first_name}&nbsp; {item.client.last_name}
						</Text>
						<View
							style={{
								marginTop: 4,
								borderWidth: 0,
								width: "85%",
							}}
						>
							<Text
								style={{
									color: Colors.light.LightBlack,
									fontSize: 12,
								}}
							>
								{item.status_text}
							</Text>
						</View>
						<Button
							title="Update Status"
							color={getShadowColor(item.status, theme)}
						/>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default CaseCard;

const styles = StyleSheet.create({
	mainCardView: {
		height: 150,
		width: "90%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.light.White,
		borderRadius: 15,
		elevation: 5,
		flexDirection: "row",
		marginTop: 6,
		marginBottom: 6,
		marginLeft: 16,
		marginRight: 16,
	},
	subCardView: {
		height: 50,
		width: 50,
		borderRadius: 25,
		backgroundColor: Colors.light.RedDark,
		borderColor: Colors.light.LightestBlack,
		borderWidth: 1,
		borderStyle: "solid",
		alignItems: "center",
		justifyContent: "center",
	},
});
