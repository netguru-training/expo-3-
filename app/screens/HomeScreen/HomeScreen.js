import React from 'react'
import { Platform, Text, View, Modal, TouchableHighlight } from 'react-native'
import {
  CurrentWeatherInfo,
  WeatherEventListElement,
  AddEventModal,
} from '../../components'
import styles from './HomeScreen.styles'
import { Constants, Location, Permissions } from 'expo';


const {
  containerStyle,
  currentWeatherContainerStyle,
  cityNameStyle
} = styles

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: null,
      city: null,
      errorMessage: null,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync().then(()=>this._getCityAsync());

    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  _getCityAsync = async () => {
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      url=`http://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.location.coords.latitude},${this.state.location.coords.longitude}&sensor=true`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          var city = data.results.filter(function( obj ) {
            return obj.types.indexOf("administrative_area_level_2") > -1;
          })[0].address_components[1].long_name;
          this.setState({ city});
        })
    }
  }

  setModalVisible = isVisible => this.setState({ isModalVisible: isVisible });

  render() {
    let city = 'Waiting..';
    if (this.state.errorMessage) {
      city = this.state.errorMessage;
    } else if (this.state.location) {
      city = this.state.city;
    }
    return (
      <View
        style={containerStyle}
      >
        <Text style={cityNameStyle}>{city}</Text>
        <View
          style={currentWeatherContainerStyle}
        >
          <CurrentWeatherInfo
            headerInfo='Monday'
            imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
            footerInfo='25 *C'
          />
        </View>
        <View
          style={containerStyle}
        >
          <WeatherEventListElement
            headerInfo='Tuesday'
            imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
            footerInfo='25 *C'
            onPressInfo={() => this.props.navigation.navigate('EventInfo')}
            onPressAdd={() => this.setModalVisible(true)}
          />
        </View>
        <AddEventModal
          isVisible={this.state.isModalVisible}
          closeModal={() => this.setModalVisible(false)}/>
      </View>
    )
  }
}

export default HomeScreen
