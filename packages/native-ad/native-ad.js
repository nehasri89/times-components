import React from "react";
import { StyleSheet, WebView } from "react-native";

const baseUrl = "https://example.com";

export default function NativeAd({ width, height, content }) {
  return <WebView style={{ width, height }} source={{ html: content, baseUrl }} />;
}
