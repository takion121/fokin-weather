import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "9ab42d1ed42d6da67c00c53fd16f993e";

export default class extends React.Component {
  // 상태
  state = {
    isLoading: true
  };

  /**
   * 날씨 가져오기(비동기)
   */
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
      // 결과를 받을 때까지 대기.
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };

  /**
   * 위치 가져오기(비동기)
   */
  getLocation = async () => {
    try {
      // 위치 권한 요청(결과를 받을 때까지 대기).
      await Location.requestPermissionsAsync();

      // 위치 정보를 가져옴.
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();

      // 날씨 가져오기.
      this.getWeather(latitude, longitude);
    } catch (error) {
      // 위치 가져오기 실패.
      Alert.alert("Can't find you.", "So sad");
    }
  };

  // 앱이 렌더링 되었을 때,
  componentDidMount() {
    // 위치 가져오기.
    this.getLocation();
  }

  /**
   * 렌더링
   */
  render() {
    // 로딩 상태 가져오기.
    const { isLoading, temp, condition } = this.state;
    // 로딩 중이면 로딩 화면 표시, 아니면 날씨 보여줌.
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
