import { StyleSheet } from 'react-native'

const s = StyleSheet.create({
    meteo_basic: {
        flex: 2,
    },
    searchbar: {
        flex: 2,
    },
    meteo_advanced: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
})

export { s }