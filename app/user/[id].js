import { Text, StyleSheet, FlatList, View} from 'react-native';
import {  useLocalSearchParams } from 'expo-router';
import users from '../../assets/data/users.js';
import UserProfileHeader from '../../src/components/UserProfileHeader.js';
import {useState} from "react";
import posts from '../../assets/data/posts.js'
import Posts from '../../src/components/Posts.js'
import Entypo from '@expo/vector-icons/Entypo';
 

const ProfilePage = () => {
    const [isSubscribed, setIsSubscribed]= useState(false)
    const { id } = useLocalSearchParams();

    const user = users.find((u) => u.id === id);

    if (!user) {
        return <Text>User not found</Text>;
    }
if(!isSubscribed){
    return (
        <View style={{backgroundColor:'white'}}>
        <UserProfileHeader 
        user={user}
       isSubscribed={isSubscribed} 
       setIsSubscribed={setIsSubscribed}
       
       />
       <View style={styles.subscribe}>
       <Entypo name="lock" size={30} color="white"  />
        <Text style={{fontSize:17}}> Subscribe to see users post</Text>
       </View>
       </View>
    )



}
    return (
         

       

        <FlatList data={posts} renderItem={({item})=> <Posts post ={item} />}
         style={{flex:1}}

         ListHeaderComponent={()=>(
            <UserProfileHeader 
            user={user}
           isSubscribed={isSubscribed} 
           setIsSubscribed={setIsSubscribed}
           
           />
         )}
         />
        
    );
};

const styles = StyleSheet.create({
    subscribe:{

        borderRadius:10,
        justifyContent:"center",
        padding:40,
        alignItems:'center',
        

     
        backgroundColor:'grey',
        overflow:'hidden'

   
    }
    
});

export default ProfilePage;


 
