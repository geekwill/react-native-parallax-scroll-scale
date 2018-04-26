[![NPM](https://nodei.co/npm/react-native-parallax-scroll-scale.png)](https://nodei.co/npm/react-native-parallax-scroll-scale/)

# react-native-parallax-scroll-scale

Reactnative a scrolling visual components, using ` HOC ` component encapsulation, convenient and reuse。

## Installation

`
npm i react-native-parallax-scroll-scale --save
`

## Quick Start

`
// index.js

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import DemoParallaxScrollScale from './DemoParallaxScrollScale.js';

class Demo extends Component {
  render() {
    return (
      <View style={Style.container}>
        <DemoParallaxScrollScale image={'https://cdn.pixabay.com/photo/2017/09/19/08/44/woman-2764559_960_720.jpg'} />
      </View>
    );
  }
}

export default Demo;
`

`
// DemoParallaxScrollScale.js

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Style } from '../../common/style'
import ParallaxScrollScale from 'react-native-parallax-scroll-scale'

class DemoParallaxScrollScale extends Component {
  render() {
    return (
      <View style={{marginTop: 120}}>
        <Text>Custom Content...</Text>
      </View>
    );
  }
}

export default ParallaxScrollScale(MineCenter);
`

## Props

Prop | Type | Default | Description
---- | --- | --- | ---
image | String | null | Parallax effect background picture address.
containerStyle | Obejct | null | container style

## Copyright

Copyright (c) 2017 [geekwill](http://www.geekcode.me/) Licensed under the MIT license.
