import React from 'react'
import { connect } from 'react-redux'
import { Platform, Text, View, Modal, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import {
  CurrentWeatherInfo,
  DayList,
  AddEventModal
} from '../../components'
import styles from './HomeScreen.styles'
import { Constants, Location, Permissions } from 'expo';
import { fetchDailyWeather } from '../../actions/weather';


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
      date: new Date()
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync()
        .then(() => this._getCityAsync())
        .then(() => this.props.fetchDailyWeather());
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

  goToEventListScreen = (date) => {
    this.props.navigation.navigate('EventInfo', { date })
  }

  goToAddEventScreen = (date) => {
    this.setModalVisible(true)
  }

  getCurrentWeatherInfo() {
    return (<CurrentWeatherInfo
      headerInfo='Monday'
      imageUrl='https://www.freeiconspng.com/uploads/weather-icon-png-16.png'
      footerInfo='25 *C'
    />)
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

        <DayList
          goToEventListScreen={this.goToEventListScreen}
          goToAddEventScreen={this.goToAddEventScreen}
          header={this.getCurrentWeatherInfo()}
          events={this.props.events}
          weather={this.props.weather}
        />

        <AddEventModal
          date={this.state.date}
          isVisible={this.state.isModalVisible}
          closeModal={() => this.setModalVisible(false)}/>

      </View>
    )
  }
}

HomeScreen.propTypes = {
  fetchDailyWeather: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    events: state.events
  }
}

export default connect(mapStateToProps, { fetchDailyWeather })(HomeScreen)