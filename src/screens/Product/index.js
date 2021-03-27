import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../../Header/index';
import  Data from "../../services/data";
import Context from '../Context';
import  ApplicationStyles from '../../Themes/ApplicationStyle';
import Item from './Item/index';

function Product({ navigation }) {
	const [context, setContext] = useContext(Context);

	useEffect(() => {
		setContext([...Data]);
	},[]);

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				title='Danh sach cong viec'
				rightComponent={<Text>Add</Text>}
				rightButton={() =>
					navigation.navigate("AddJob")
				}></Header>
			<View style={styles.content}>
				<FlatList
					data={context}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return <Item data={item}></Item>;
					}}></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: "#f3f3f3",
	},
});

export default Product;