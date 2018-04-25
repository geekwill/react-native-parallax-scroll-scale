import React, { Component } from 'react';
import {
  View,
  Animated,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default function (WrappedComponent) {
  return class extends Component {
    state = {
      animatedValue: new Animated.Value(0)
    };
    render() {
      const { animatedValue } = this.state

      let translateY = animatedValue.interpolate({
        inputRange: [-300, 0, 300],
        outputRange: [300 / 2, 0, -300],
      });

      let scale = animatedValue.interpolate({
        inputRange: [-300, 0, 300],
        outputRange: [2, 1, 1],
      })

      let event = Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              y: animatedValue
            }
          }
        }
      ]);
      const { user, image, containerStyle } = this.props;
      return (
        <View style={[styles.container, containerStyle]}>
          <Animated.Image
            style={[styles.graphic, {
              transform: [{ translateY }, { scale }]
            }]}
            source={{uri: image}}
          />
          <ScrollView onScroll={event} scrollEventThrottle={16}>
            <WrappedComponent {...this.props} />
          </ScrollView>
        </View>
      );
    }
  };
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
  },
  graphic: {
    width: width,
    height: 315,
    position: 'absolute',
    top: 0,
  }
})
