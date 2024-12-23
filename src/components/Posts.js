import {View,Image, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


const Post = ({post})=>{
    return(
    <View style={{paddingBottom:20}}>
        <Text style={{margin:10, lineHeight:18}}>
            {post.text}
        </Text>
        
        <Image src={post.image} style ={{width:'100%', aspectRatio:16/9, marginVertical:15} } />

        

        <View style={{ flexDirection:'row'}}>
            <View style={{marginLeft:10}}>
         <FontAwesome name="heart-o" size={24} color="black"/>
         <Text style={{fontWeight:600}}>{post.likes}</Text>
         
         </View>
         <FontAwesome name="comments" size={24} color="black" style={{marginLeft:30}}/>
         </View>
   </View>



)}

export default Post
