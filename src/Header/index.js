import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';

function Header({ title, goBack,rightButton,rightComponent, }){
      return(
		<SafeAreaView>
			<View style={styles.head}>
      
				{goBack && (
					<TouchableOpacity
					    	onPress={goBack}
					    	style={styles.back}>
						<Text style={styles.backText}>Back</Text>
					</TouchableOpacity>
				)}

				<Text style={styles.title} numberOfLines={1}>
			          	{title}
				</Text>

				{rightButton && (
					<TouchableOpacity
					  	  onPress={rightButton}
					    	style={styles.right}>
					    	<Text>Add</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
}
Header.defaulProps = {
  title: 'Header',
  onBack: null,
  rightButton: null,
}

const styles = StyleSheet.create({
    head:{
          width:'100%',
          height:60,
          backgroundColor:'#ffe4c4',
          justifyContent:'center',
          alignItems:'center',
          
    },
    title:{
          fontSize:25,
    },
    back:{
          position:'absolute',
          top: 20,
          left: 10,       
    },
   backText:{
        fontSize:20,
  },
    right: {
		position: "absolute",
		right: 10,
    fontSize:20,
	},
});


export default Header;