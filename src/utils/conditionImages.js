export const getWeatherConditionImage = (weatherId) => {
  switch (true) {
    case (weatherId <= 232):
      return 'thunderstorm.jpg';
    case (weatherId <= 321):
      return 'drizzle.jpg';
    case (weatherId <= 531):
      return 'rain.jpg';
    case (weatherId <= 622):
      return 'snow.jpg';
    case (weatherId <= 781):
      return 'atmosphere.jpg';
    case (weatherId === 800):
      return 'clear.jpg';
    case (weatherId <= 804):
      return 'clouds.png';
    default:
      return 'clouds.png';
  }
};

