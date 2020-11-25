import React, { Component } from 'react';
import { Button, View,Text } from 'react-native';


export class RedButton extends Component{
  render(){
    return(
        <Button color="red" title="Click Me"></Button>
    )
  }
}

export class BlueButton extends Component
{
render(){
  return(
    <Button colour="Blue" title="click "></Button>
  )
}
}

export class GreenButton extends Component
{
render(){
  return(
    <Button colour="yellow" title="exit"></Button>
  )
}
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 500, width: "50%"}}>
        <RedButton/>
        <BlueButton/>
        <Text>this is op</Text>
        <GreenButton/>
        <Text>My first React Component</Text>
        
      </View>
    );
  }
}