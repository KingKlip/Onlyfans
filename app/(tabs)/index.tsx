import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native';
import users  from '../../assets/data/users';
import UserCard from '../../src/components/UserCard' 
import {Link} from 'expo-router'



const NewUser = ()=>{

  return(
  <View style ={Styles.container}>
    <Link href ={"/newpost"} style={{padding:10, fontSize: 18,fontWeight:'700'}}> Post </Link>
  <FlatList
  data={users}
  renderItem = {({item})=> <UserCard user={item} />} 
   />
  </View>
  ) 
}

const Styles= StyleSheet.create({

 container:{
flex: 1,
paddingTop:50
 
  },

  

}
)

export default NewUser