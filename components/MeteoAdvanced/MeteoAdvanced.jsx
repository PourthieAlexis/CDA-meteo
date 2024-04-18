import { View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from './MeteoAdvanced.style';

export function MeteoAdvanced({ dusk, down, wind }) {
    return (
        <View style={s.container}>
            <View style={s.content}>
                <Txt style={s.value}>{dusk}</Txt>
                <Txt style={s.info}>Aube</Txt>
            </View>
            <View style={s.content}>
                <Txt style={s.value}>{down}</Txt>
                <Txt style={s.info}>Crépuscule</Txt>
            </View>
            <View style={s.content}>
                <Txt style={s.value}>{wind}</Txt>
                <Txt style={s.info}>Vent</Txt>
            </View>
        </View>
    )
}