import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    withDelay,
} from 'react-native-reanimated';
import { useEffect, useRef, useState } from 'react';
import { use } from 'chai';
import Testee from "./rr.svg";
import React from "react";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import {
    useAnimatedProps,
    useDerivedValue,
    withRepeat,
} from "react-native-reanimated";
import MaskedView from "@react-native-community/masked-view";
import { mix } from "react-native-redash";
import StyleGuide from './styleguide';



const SIZE =   60;
const AnimatedPath = Animated.createAnimatedComponent(Path);
export default function TabIconCenter() {
    const [value, setValue] = useState(0);
    const [opacity, setopacity] = useState(1);
    const ball = useRef(null);
  

    const progress = useSharedValue(0);
    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
            -1,
            true
        );
    }, [progress]);
    const data1 = useDerivedValue(() => {
        const m = mix.bind(null, progress.value);
        return {
            from: {
                x: m(-0.1, -1),
                y: m(0.2, 0.5),
            },
            c1: { x: m(0, 0.5), y: m(0.7, 1) },
            c2: { x: m(1, 0.5), y: m(0.3, 0) },
            to: { x: m(1.1, 2), y: m(0.8, 0.5) },
        };
    });
    const data2 = useDerivedValue(() => {
        const m = mix.bind(null, 1 - progress.value);
        return {
            from: {
                x: m(-0.1, -1),
                y: m(0.2, 0.5),
            },
            c1: { x: m(0, 0.5), y: m(0.7, 1) },
            c2: { x: m(1, 0.5), y: m(0.3, 0) },
            to: { x: m(1.1, 2), y: m(0.8, 0.5) },
        };
    });
    const data3 = useDerivedValue(() => {
        const m = mix.bind(null, 1.5 - progress.value);
        return {
            from: {
                x: m(-0.1, -1),
                y: m(0.2, 0.5),
            },
            c1: { x: m(0, 0.5), y: m(0.7, 1) },
            c2: { x: m(1, 0.5), y: m(0.3, 0) },
            to: { x: m(1.1, 2), y: m(0.8, 0.5) },
        };
    });
    const path1 = useAnimatedProps(() => {
        const { from, c1, c2, to } = data1.value;
        return {
            d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
        };
    });
    const path3 = useAnimatedProps(() => {
        const { from, c1, c2, to } = data3.value;
        return {
            d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
        };
    });

    const path2 = useAnimatedProps(() => {
        const { from, c1, c2, to } = data2.value;
        return {
            d: `M ${from.x} ${from.y} C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y} L 1 1 L 0 1 Z`,
        };
    });

    return (
        <View style={{          
            justifyContent: 'center',
            alignItems: 'center', 
            marginTop: -30,
            shadowColor: "#6cf8ee",
            shadowOffset: {
                width: 4,
                height: 8,
            },
            shadowOpacity: 0.51,
            shadowRadius: 13.16,
            borderRadius: 50,
            elevation: 20,
        }}  > 
                    <MaskedView
                        maskElement={
                            <View
                                style={{
                                    backgroundColor: "white",
                                    width: SIZE,
                                    height: SIZE, 
                                    borderRadius: SIZE / 2,
                                }}
                            />
                        }
                    > 
                        <Svg
                            width={SIZE}
                            height={SIZE}
                            style={{ backgroundColor: "white" }}
                            viewBox="0 0 1 1"
                        >
                            
                            <AnimatedPath fill="#6cf8ee" animatedProps={path2} />
                            <AnimatedPath
                                fill={"#9dfff8"}
                                animatedProps={path1}
                            />
                               <AnimatedPath
                                fill={"#0effef"}
                                animatedProps={path3}
                            />
                            
                        </Svg>
                     
                    
                    </MaskedView>
       
        </View>
    );
}
 