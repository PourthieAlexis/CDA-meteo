import { View, Alert, TouchableOpacity } from 'react-native'
import { s } from './Home.style'
import { useEffect, useState } from 'react'
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { MeteoAPI } from '../../api/meteo'
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic'
import { getWeatherInterpretation } from '../../components/services/meteo-services'
import { MeteoAdvanced } from '../../components/MeteoAdvanced/MeteoAdvanced'
import { useNavigation } from '@react-navigation/native'
import Container from '../../components/Container/Container'
import SearchBar from '../../components/SearchBar/SearchBar'
import Txt from '../../components/Txt/Txt'

export function Home() {
    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const currentWeather = weather?.current_weather

    useEffect(() => {
        getUserCoords()
    }, [])

    useEffect(() => {
        if (coords) {
            fetchWeather(coords)
            fetchCity(coords)
        }
    }, [coords])

    async function fetchWeather(coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates)
        setWeather(weatherResponse)
    }
    async function fetchCity(coordinates) {
        const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates)
        setCity(cityResponse)
    }

    async function fetchCoordsByCity(city) {
        try {
            const coordsResponse = await MeteoAPI.fetchCoordsFromCity(city)
            setCoords(coordsResponse)
        } catch (error) {
            Alert.alert('Désolé', error)
        }

    }

    async function getUserCoords() {
        let status = await requestForegroundPermissionsAsync();
        if (status.status === 'granted') {
            const location = await getCurrentPositionAsync()
            setCoords({ lat: location.coords.latitude, lng: location.coords.longitude })
        } else {
            setCoords({ lat: '48.45', lng: '2.35' })
        }

    }
    const nav = useNavigation();
    function goToForecastPage() {
        nav.navigate('Forecast', {
            city: city,
            temperature_2m_max: weather.daily.temperature_2m_max,
            time: weather.daily.time,
            weathercode: weather.daily.weathercode
        })
    }

    return currentWeather ? (
        <Container>
            <View style={s.meteo_basic}>
                <MeteoBasic
                    temperature={Math.round(currentWeather?.temperature)}
                    city={city}
                    interpretation={getWeatherInterpretation(currentWeather.weathercode)}
                    onPress={goToForecastPage}
                />
            </View>
            <View style={s.searchbar}>
                <SearchBar onSubmit={fetchCoordsByCity} />
                <View style={s.buttonContainer}>
                    <TouchableOpacity onPress={getUserCoords} style={s.button}>
                        <Txt style={s.buttonText}>Obtenir ma position</Txt>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={s.meteo_advanced}>
                <MeteoAdvanced
                    dusk={weather.daily.sunrise[0].split("T")[1]}
                    down={weather.daily.sunset[0].split("T")[1]}
                    wind={currentWeather.windspeed}
                />
            </View>
        </Container>
    ) : null;

}