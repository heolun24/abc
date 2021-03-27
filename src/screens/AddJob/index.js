import React, { useState, useContext } from "react";
import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Alert,
	TextInput,
  StyleSheet,
} from "react-native";
import ApplicationStyles from '../../Themes/ApplicationStyle';
import Header from '../../Header/index';
import Context from '../Context'

import { useNavigation } from "@react-navigation/native";

function ItemInputProduct({ value, onChange, index }) {
	return (
		<TextInput
			onChangeText={(text) => onChange(text, index)}
			style={[styles.input, styles.inputProduct]}
			value={value}></TextInput>
	);
}
ItemInputProduct.defaultProps = {
	value: "",
	onChange: () => {},
	index: -1,
};
function AddJob(props,) {
	const [title, setTitle] = useState("");
	const [listProduct, setListProduct] = useState([]);
	const navigation = useNavigation();
	const [context, setContext] = useContext(Context);

	const handleAdd = () => {
		if (!title.trim()) {
			//tiêu đề trống
			return Alert.alert("Empty name of job.");
		}

		if (listProduct.length === 0) {
			//Nội dung trống
			return Alert.alert("Content is empty.");
		}

		var time = new Date();
		const currentTime = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
			time.getMonth() + 1
		}/${time.getFullYear()}`;
		setContext((state) => [
			...state,
			{
				id: context.length + 1,
				name: title,
				time: currentTime,
				content: listProduct,
			},
		]);
		navigation.navigate("Product");
	};

	const handleAddItemProduct = () => {
		setListProduct((state) => {
			return [...state, ""];
		});
	};

	const handleChangeText = (text, index) => {
		if (index === -1) {
			return setListProduct([text]);
		}

		setListProduct((state) => {
			const cloneList = [...state];
			cloneList[index] = text;
			return cloneList;
		});
	};

	const renderItemProduct = () => {
		if (listProduct.length < 2) {
			return (
				<ItemInputProduct
					onChange={handleChangeText}
					index={-1}
					value={listProduct[0]}></ItemInputProduct>
			);
		}

		return (
			<>
				{listProduct.map((item, index) => {
					return (
						<ItemInputProduct
							onChange={handleChangeText}
							index={index}
							key={index.toString()}
							value={item}></ItemInputProduct>
					);
				})}
			</>
		);
	};

	return (
		<View style={ApplicationStyles.screen.container}>
			<Header
				goBack={() => navigation.goBack()}
				// label='New Job'
				// rightButton={() =>
				// 	navigation.navigate("JobList")}
			></Header>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Text style={styles.header}>Name of job</Text>
					<TextInput
						style={styles.input}
						value={title}
						onChangeText={(text) =>
							setTitle(text)
						}></TextInput>

					<View style={styles.inputGroup}>
						<Text style={styles.header}>Content</Text>
						{renderItemProduct()}
						<TouchableOpacity
							style={styles.addButton}
							onPress={handleAddItemProduct}>
							<Text>+1 Item</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleAdd}>
						<Text style={styles.buttonText}>Finish</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 16
    },
    footer: {
        width: '100%',
        marginTop: 70
    },
    button: {
        backgroundColor: '#000',
        marginHorizontal: 16,
        height: 40,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 7,
        paddingHorizontal: 8,
		marginTop:20
    },
    header: {
        marginBottom: 5
    },
    inputGroup: {
        marginTop: 20,
		marginBottom:20
    },
    addButton: {
        height: 40,
        width: '100%',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'dashed',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
   
})
export default AddJob;