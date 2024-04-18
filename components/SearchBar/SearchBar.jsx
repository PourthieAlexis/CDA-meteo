import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { s } from './SearchBar.style';

export default function SearchBar({ onSubmit }) {
    const [text, setText] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handleSubmit = () => {
        onSubmit(text);
        setText('');
    };

    return (
        <TextInput
            value={text}
            onChangeText={handleInputChange}
            onSubmitEditing={handleSubmit}
            style={s.input}
            placeholder='Chercher une ville'
            clearTextOnFocus
        />
    );
}
