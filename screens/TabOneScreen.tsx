import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeBaseProvider, Box, Center, Container, Heading, Text, Stack, Image, HStack, ScrollView, FlatList, Avatar, VStack, Spacer, View, Button } from "native-base";
import Navigation from '../navigation';
import { useNavigation } from '@react-navigation/native'
export default function TabOneScreen() {

  const navigation = useNavigation()

  const data = [{
    id: "1",
    fullName: "John Doe",
    recentText: "Hey, how are you?",
    timeStamp: "2:00 PM",
    avatarUrl: "https://images.tcdn.com.br/img/img_prod/1010317/balao_de_destilacao_com_saida_lateral_97_1_61b4d6d32e930d21e4c609cba97e2843.png"
  },
  {
    id: "2",
    fullName: "John Doe",
    recentText: "Hey, how are you?",
    timeStamp: "2:00 PM",
    avatarUrl: "https://images.tcdn.com.br/img/img_prod/1010317/balao_de_destilacao_com_saida_lateral_97_1_61b4d6d32e930d21e4c609cba97e2843.png"
  } 
 ]
  return (

    <View 
      flex={1}
      backgroundColor="rgb(255, 255, 255)"
    >
      <>
       <LinearGradient 
    colors={['#6cf8ef22', 'transparent']}
    start={{ x: 0.9, y: 0.9 }}
          end={{ x: 0.1, y: 0.1 }}
    
    style={{ flex: 1 }}
   >
    <View>
      
      <FlatList
        paddingX={5}
        paddingTop={100} 
        margin={[0, 4]}
      data={data} renderItem={({
        item
      }) => 
        <Button
        onPress={() => {
          console.log('pressed')
          navigation.navigate('TabFour')
        }}
       
        shadow={2}
        style={{
          shadowColor: "#6cf8ef",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        height="100px"
        marginBottom={2}
        borderRadius={10}
        backgroundColor= '#fff'
        borderBottomWidth="1" _dark={{
        borderColor: "muted.50"
      }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
          <HStack space={[2, 3]} justifyContent="space-between">
            {/* <Avatar 
            background={'transparent'}
            size="48px" source={{
              uri: item.avatarUrl
            }} /> */}
            <VStack>
              <Text _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                {item.fullName}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {item.recentText}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">
              {item.timeStamp}
            </Text>
          </HStack>
        </Button>} keyExtractor={item => item.id} />
    </View>
        </LinearGradient>
        </>
    </View>

  );
}

 
