import { ImageBackground } from 'react-native';
import { s } from './Container.style';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import fond from '../../assets/fond.jpg';

export default function Container({ children }) {
    return (
        <ImageBackground source={fond} style={s.img_background} imageStyle={s.img}>
            <SafeAreaProvider>
                <SafeAreaView style={s.container}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    )


}
