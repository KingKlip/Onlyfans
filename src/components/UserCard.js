import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground,  Pressable} from 'react-native';

import {Link} from 'expo-router';
 
 
 
export default function UserCard({user}){

  return(
    <Link href={`/user/${user.id}`}  asChild>
    <Pressable>
  <ImageBackground source={ {uri:user.coverImage}}style={Styles.userCard}>

  <Image src={user.avatar} style={Styles.img} />
  <View style = {Styles.overLay} />

  <View>
    <Text style={{color: 'white', fontSize:20, fontWeight:500}}> {user.name} </Text>
  <Text style={{color: 'white', fontSize:13, fontWeight: 500}}>  @{user.handle} </Text>
  </View>
  </ImageBackground>
  </Pressable>
  </Link>
 
  )


}

const Styles= StyleSheet.create({



  userCard:{
    backgroundColor: 'orange',
     flexDirection: 'row',
     padding:10, 
     alignItems: "flex-end",
     marginVertical: 5

  },
  img:{
   borderRadius:100,
    height:100,
    width:100,
    borderColor:'white',
    borderWidth: 5

  },
overLay:{
position: 'absolute',
backgroundColor: 'rgba(0,0,0,0.5)'
 


  }

})
 