import { Touchable, TouchableOpacity, View } from 'react-native';
import Txt from '../../components/Txt/Txt';
import { s } from './Forecast.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Container from '../../components/Container/Container';
import ForecastListItem from '../../components/ForecastListItem/ForecastListItem';
import { getWeatherInterpretation } from '../../components/services/meteo-services';
import { DAYS, dateToDDMM } from '../../components/services/date-service';

export default function Forecast({ }) {
    const { params } = useRoute();
    const nav = useNavigation();
    const backButton = (
        <TouchableOpacity onPress={() => nav.goBack()}>
            <Txt>{'<'}</Txt>
        </TouchableOpacity>
    )

    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.header_texts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    )
    return <Container>
        {header}
        <View style={{ marginTop: 50 }}>
            {params.time.map((time, index) => {
                const code = params.weathercode[index];
                const image = getWeatherInterpretation(code).image
                const date = new Date(time)
                const day = DAYS[new Date(time).getDay()];
                const temperature = params.temperature_2m_max[index]
                return <ForecastListItem
                    key={time}
                    image={image}
                    day={day}
                    date={dateToDDMM(date)}
                    temperature={temperature.toFixed(0)}
                />
            })}
        </View>
    </Container>
}
