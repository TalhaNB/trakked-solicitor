import React, { useEffect, useState } from "react";
import { Image, ActivityIndicator, FlatList, Text, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import CaseCard from "./caseCard";
import { dummy_data } from "@/constants/dummy_data";
type Movie = {
	id: string;
	title: string;
	releaseYear: string;
};
type UserType = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	phone: string;
};
export type CaseType = {
	id: number;
	case_number: string;
	status: string;
	status_text: string;
	description: string;
	client_id: number;
	solicitor_id: number;
	solicitor: UserType;
	client: UserType;
};

const CaseList = () => {
	const colorScheme = useColorScheme();
	const [data, setData] = useState<CaseType[] | null>(null);
	const bgImage =
		colorScheme === "light"
			? require("@/assets/images/bg_image_light.png")
			: require("@/assets/images/bg_image_dark.png");
	const getMovies = async () => {
		try {
			const response = await fetch("http://localhost:4000/all_cases");
			const json = await response.json();
			console.log("json", json.status.data);
			setData(json.status.data.cases);
		} catch (error) {
			console.error(error);
		} finally {
		}
	};

	useEffect(() => {
		getMovies();
	}, []);
	console.log("data", data);
	return (
		<>
			{!dummy_data ? (
				// <ActivityIndicator />
				<>
					<Image source={bgImage} style={{ marginTop: 60 }} />
					<Text
						style={{
							color:
								Colors[(colorScheme as "light" | "dark") ?? "light"].Active,
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
							color:
								Colors[(colorScheme as "light" | "dark") ?? "light"].Active,
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
				</>
			) : (
				<FlatList
					data={dummy_data}
					keyExtractor={({ id }) => id.toString()}
					renderItem={({ item }) => <CaseCard item={item} />}
				/>
			)}
		</>
	);
};

export default CaseList;
