import React from 'react';
import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const MainCard = (props) => {

    const styles = StyleSheet.create({
        card:{
          backgroundColor: props.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          margin: 10,
          width: 110,
          height: 210,
        },
        refreshButton:{
            position: 'absolute',
            margin: 30,
            alignSelf: 'flex-start',
      
        },
        text:{
            color: 'white',
            margin: 15,
            fontSize: 20,
        },
        cardIcon:{
            color: 'white',
            margin: 15,
        },


      });
    
    return(
        <View style={styles.card}>
          <Text style={styles.text}>Manhã</Text>
          <Feather name="sun" style={styles.cardIcon} size={40} color="orange" />
          <Text style={styles.text}>21°</Text>
        </View>
    )
}

export default MainCard