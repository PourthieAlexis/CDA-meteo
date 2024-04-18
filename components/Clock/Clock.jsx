import { Image, View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from './Clock.style';
import { nowTOHHMM } from "../services/date-service";
import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState(nowTOHHMM())
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(nowTOHHMM())
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [time])
    return (
        <>
            <Txt>{time}</Txt>
        </>
    )
}