/* eslint-disable global-require */

const images = {
  clear: require('../assets/images/clear.jpg'),
  hail: require('../assets/images/hail.jpg'),
  'heavy-cloud': require('../assets/images/heavy-cloud.jpg'),
  'light-cloud': require('../assets/images/light-cloud.jpg'),
  'heavy-rain': require('../assets/images/heavy-rain.jpg'),
  'light-rain': require('../assets/images/light-rain.jpg'),
  showers: require('../assets/images/showers.jpg'),
  sleet: require('../assets/images/sleet.jpg'),
  snow: require('../assets/images/snow.jpg'),
  thunder: require('../assets/images/thunder.jpg'),
  null: require('../assets/images/icon.png'),
  Icon: require('../assets/images/icon.png'),
};

export default weather => images[weather];
