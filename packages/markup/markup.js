import React from "react";
import { View, Text, Linking } from "react-native";
import Markup, { builder as mb } from "./markup-builder";
import propTypes from "./markup-proptype";

const styles = {
  italic: {
    fontStyle: "italic"
  },
  bold: {
    fontWeight: "bold"
  },
  anchor: {
    color: "blue"
  },
  author: {
    color: "#069"
  }
};

const tagMap = new Map([
  [
    "p",
    {
      tag: Text,
      attrs() {}
    }
  ],
  [
    "a",
    {
      tag: Text,
      attrs({ href }) {
        return {
          style: styles.anchor,
          onPress() {
            Linking.openURL(href);
          }
        };
      }
    }
  ],
  [
    "b",
    {
      tag: Text,
      attrs() {
        return {
          style: styles.bold
        };
      }
    }
  ],
  [
    "i",
    {
      tag: Text,
      attrs() {
        return {
          style: styles.italic
        };
      }
    }
  ],
  [
    "span",
    {
      tag: Text,
      attrs() {}
    }
  ],
  [
    "author",
    {
      tag: Text,
      attrs({ slug }) {
        return {
          style: styles.author,
          onPress() {
            Linking.openURL(`profile/${slug}`);
          }
        };
      }
    }
  ],
  [
    "div",
    {
      tag: View,
      attrs() {},
      wrapText: Text
    }
  ]
]);

const MarkupNative = ({ ast, wrapIn }) =>
  <Markup ast={ast} tagMap={tagMap} wrapIn={wrapIn} />;

MarkupNative.propTypes = propTypes;

export default MarkupNative;

export const builder = mb(tagMap);
