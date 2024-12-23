import { View, Text, StyleSheet, ImageBackground, Pressable,SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';
 
 
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
 

const UserProfileHeader= ({user, isSubscribed, setIsSubscribed}) => {
const router = useRouter();
   

    
    return (
        <View style={styles.Profile}>
            <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>

                <SafeAreaView style ={{marginTop:10}}>
                    <Pressable>
                <Ionicons  onPress={() => router.back()}
                name="arrow-back" size={20} color="white" />
                </Pressable>
                
                <View style={{marginLeft:10}}>

                <Text style ={{color:'white', fontSize: 22, fontWeight:500}}>{user.name}</Text>
                <Text style ={{color:'white', marginVertical:5}}>1.4k Posts • 64.3k • Likes • 15.3k Followers</Text>

                </View>

                </SafeAreaView>
                <View style={styles.overlay} />

            </ImageBackground>

            <View style={{flexDirection:"row", alignItems: "center", justifyContent:'space-between'}} >
            

            <Image src={user.avatar} style={styles.img} />
            <View style={{marginRight:30}}>
            <Entypo name="share" size={24} color="black" />
            </View>
             </View>

        <View style={{padding:15, paddingTop:12}}>
            <Text style={{fontWeight:'500', fontSize:20}}>
                {user.name}
            </Text>
            <Text style={{color:'blue', paddingBottom:12}}>
                @{user.handle}
            </Text>
            <Text style={{lineHeight:20}}>
                {user.bio}
            </Text>

            <Text style={{color:'grey', fontWeight: 700, fontSize:20, marginVertical:20}}>
                Subscription
            </Text>

            <View style={styles.subscribe}>

            <Pressable styles = {styles.button} 
            onPress={()=>setIsSubscribed(!isSubscribed)}>

            <Text style={styles.buttonText}>
                {isSubscribed ? 'Subscribed': 'Subscribe'}
               
            </Text>
            </Pressable>

            <Text style={{color:'blue'}}>
                {user.subscriptionPrice=== 0? 'For Free':`$${user.subscriptionPrice} /month`}
            </Text>

            </View> 
        </View>
            

            
        </View>
    );
};

const styles = StyleSheet.create({
    Profile: {
         
        backgroundColor: 'white',
       
        
    },
    cover: {
        height: 200,
        width: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    img:{
        borderRadius:100,
         height:100,
         width:100,
         borderColor:'white',
         borderWidth: 5,
         marginTop: -40,
         marginLeft:15
     
       },
       buttonText:{
        color: 'blue'

       },
    subscribe:{
        flexDirection:'row',
        justifyContent : 'space-between',
        borderRadius:50,
        borderWidth:2,
        padding:15,
    
        borderColor:'gray',
        
    }
});

export default UserProfileHeader;
