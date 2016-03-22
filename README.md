## react-native-loading
A lightweight loading for your React Native app.

## Installation

```shell
npm install react-native-loading --save
```

## Usage

Using the Loading usually looks like this:
```js
var Loading = require('react-native-loading');

var Demo = React.createClass({
  
  getInitialState() {
    return {
      isLoadingVisible: false
    };
  },
  ...

  render() {
    return (
      <View>
        ...
        <Loading
          isVisible={this.state.isLoadingVisible}
        />
      </View>
    );
  }
```

## License

`react-native-loading` is available under the MIT license. See the LICENSE file for more info.
