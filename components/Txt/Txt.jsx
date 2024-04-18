import { Text, useWindowDimensions } from 'react-native';
import { s } from './Txt.style';

export default function Txt({ children, style }) {
    const { height } = useWindowDimensions();
    const fontSize = style?.fontSize || s.text.fontSize;
    const echelle = 1 / height;
    return <Text style={[s.text, style, { fontSize: fontSize * echelle * height }]}>{children}</Text>
}
