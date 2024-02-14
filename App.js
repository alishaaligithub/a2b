import { StyleSheet, Text, } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';
const App = () => {
  return (
    <WebView source={{ uri: 'https://www.flipkart.com/' }} style={{ flex: 1 }} />
  )
}

export default App

const styles = StyleSheet.create({})