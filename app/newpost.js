 import {View, Image,Button, TextInput} from 'react-native'
import { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

 const UserPost=()=> {
    const [image, setImage] = useState('')
    const [text,setText]=useState('')
    const onPost=()=>{
     
            console.warn('Post:', text)   
        
        setText('')
    };

        const pickImage = async () => {
            // No permissions request is necessary for launching the image library
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ['images', 'videos'],
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });

            console.log(result);

            if (!result.canceled) {
              setImage(result.assets[0].uri);
            }
        };
        
    return(
        <View>
           <TextInput placeholder='Create Post' value={text} onChangeText={setText}/>

           <View style={{padding:12}}>
           <FontAwesome onPress= {pickImage} name="image" size={24} color="black" style={{paddingBottom:10}} />
           </View>

           {image &&<Image src={image} style= {{width:'100%', aspectRatio :1}} />}

           <Button title='Post' onPress={onPost} />

           

        </View>
    )
 }
 
 export default UserPost