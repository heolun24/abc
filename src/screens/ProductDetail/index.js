import React, {useContext,	useState, useEffect,} from 'react';
import { View, Text, ScrollView,StyleSheet } from "react-native";
import Header from '../../Header/index'
import ApplicationStyles from '../../Themes/ApplicationStyle';
import Context from '../Context';

function ProductDetail({ navigation, route }) {
	const { idProduct } = route.params;
	const [data, setData] = useState({});
	const [context, setConText] = useContext(Context);

	useEffect(() => {
		const data = context.find(
			(item) => item.id === idProduct.id
		);
		setData(data);
	}, []);

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.navigate("Product")}
				title={data.name}></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
						}}>
						{data.name}
					</Text>
					{data &&
						data.content &&
						data.content.map((item, index) => {
							return (
								<View
									key={index.toString()}
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 10,
									}}>
									<View
										style={{
											height: 10,
											width: 10,
											backgroundColor: "#000",
											borderRadius: 5,
											marginRight: 5,
										}}></View>
									<Text>{item}</Text>
								</View>
							);
						})}
					<Text
						style={{
							fontSize: 13,
						}}>
						Time create: {data.time}
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	content: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 10,
	},

});

export default ProductDetail