import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';


const Test = React.createClass({
    buttonClicked() {
        console.log('Click');
        this.props.addPlayer("Pekka");
        console.log(this.props);
    },

    render() {
        console.log('rendering...');

        const players = this.props.players.map((p) => {
            return (<Text style={styles.instructions}>{p.name}</Text>);
        });

        return (
            <View style={styles.container}>

                <View style={styles.container}>
                    {players}
                </View>

                <TouchableNativeFeedback
                    styles={styles.container}
                    onPress={this.buttonClicked.bind(this)}>

                    <View style={styles.container}>
    
                        <Text style={styles.welcome}>              
                           Click to add a new player!
                        </Text>
                        
                    </View>
                    
                </TouchableNativeFeedback>
            </View>
        );
    }
});

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
