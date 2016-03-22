'use strict';

var React, {
  View,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
  Platform
  } = require('react-native');

var Loading = React.createClass({

  propTypes: {
    isDismissible: React.PropTypes.bool,
    isVisible: React.PropTypes.bool.isRequired,
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    overlayColor: React.PropTypes.string,
    panelColor: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      isDismissible: false,
      isVisible: false,
      color: '#000',
      size: 'large',
      overlayColor: 'rgba(0, 0, 0, 0)',
      panelColor: 'rgba(0, 0, 0, 0.3)',
    };
  },

  _renderSpinner() {
    let spinnerStyle = {
      marginTop: 200,
      width: 150,
      height: 100,
      borderRadius: 16,
      backgroundColor: this.props.panelColor
    };

    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS
          style={spinnerStyle}
          color={this.props.color}
          size={this.props.size}
        />
      );
    } else {
      return (
        <ProgressBarAndroid
          style={spinnerStyle}
          styleAttr="Large"
        />
      );
    }
  },

  render() {
    if (this.props.isVisible) {
      return (
        <View
          key="Loading"
          style={[{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: this.props.overlayColor
        }]}
          underlayColor={this.props.overlayColor}
          activeOpacity={1}
          {...this.props}
        >
          {this._renderSpinner()}
        </View>
      );
    }
  }
});

module.exports = Loading;
