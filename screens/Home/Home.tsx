import { TouchableOpacity, View, FlatList, Dimensions, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import { Text } from "native-base";
import React, { useState } from 'react';
import { ArrowButton, ContainerArrowButton, ContainerDot, Content, Dot, Tab, Title } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Menu } from './menu';
export default function Home() {
  const data = [
    { id: '0', title: 'Item 1d', color: 'red', image: 'data:image/jpeg;base64,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' },
    { id: '1', title: 'Item 1', color: 'green', image: 'http://2.bp.blogspot.com/_k-Rt4aDghaQ/S-H1gZH9kpI/AAAAAAAAAGM/j-nToIgfHz4/s1600/3vidrari.jpg' },
    { id: '2', title: 'Item 2', color: 'grey', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGnV9JKJubz5axBoBaW22Ujp3PVjsLKoG0eH3wC5_QWttgaG6AyBhqG-zKP9CxFHP6g4&usqp=CAU' },
  ];

  const [isIndex, setIndex] = useState(0);
  const [step, setStep] = useState(1)
  const { width } = Dimensions.get('window');
  const renderItem = ({ item }: any) => (
    <View style={{ width: width, height: 220 }}>
      <Image source={{ uri: item.image }} style={{ width: width, height: 220 }} />
      <ContainerArrowButton  >
        <ArrowButton onPress={handlePrev}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </ArrowButton>
        <ArrowButton onPress={handleNext}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </ArrowButton>
      </ContainerArrowButton>
      <Text>{item.title}</Text>

    </View>
  );

  const handleNext = () => {
    if (isIndex !== data.length - 1) {
      console.log(isIndex)
      if (!flatListRef.current) return
      // @ts-ignore
      flatListRef.current.scrollToIndex({ index: isIndex + 1, animated: true })
      setIndex(isIndex + 1)
    }

  };

  const handlePrev = () => {

    if (isIndex !== 0) {
      setIndex(isIndex - 1)
      if (!flatListRef.current) return
      // @ts-ignore
      flatListRef.current.scrollToIndex({ index: isIndex - 1, animated: true })
    }
  };

  const flatListRef = React.useRef(null);


  const stepValues = {
    1: {
      item: (
        <View style={{ width: width, height: '100%', backgroundColor: 'red' }} />
      )
    }
    , 2: {
      item: (
        <View style={{ width: width,height: '100%', backgroundColor: 'blue' }} />
      )
    },
    3: {
      item: (
        <View style={{ width: width,height: '100%', backgroundColor: 'yellow' }} />
      )
    }

  }


  const { item } = stepValues[step]
  console.log(item)
  return (

    <View style={{ flex: 1 }} >

      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}

        initialScrollIndex={isIndex}
        getItemLayout={(data, index) => (
          {
            length: width, offset: width * index, index
          }
        )}

      />
      <View
        style={{
          position: 'absolute',
          top: 200,
          flexDirection: 'row',
          alignSelf: 'center',
          height: 20,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <ContainerDot>
          {data.map((item, index) => (
            <Dot
              key={index}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                width: item.title ? item.title === data[isIndex].title ? 20 : 10 : 10,
              }}   >
            </Dot >
          ))}
        </ContainerDot>
      </View>

      <Content>
        <LinearGradient
          colors={['#6cf8ef22', 'transparent']}
          start={{ x: 0.9, y: 0.9 }}
          end={{ x: 0.1, y: 0.1 }}
          style={{ flex: 1, height: '100%', width: '100%' }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle = {{alignItems: 'center', justifyContent: 'center', height: 50}}
 
          >
            {Menu.map((item, index) =>
              <Tab key={item.id}
                onPress={() => setStep(item.id)}
                style={{ width: width / 3, height: 50, justifyContent: 'center', alignItems: 'center' }}
              >
                <Title>{item.name}</Title>
              </Tab>
            )}
          </ScrollView>
          <View style={{    height: '93%', justifyContent: 'flex-start' }}>
            {item}

          </View>
        </LinearGradient>
      </Content>
    </View>

  );
}


