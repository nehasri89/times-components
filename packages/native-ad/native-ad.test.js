import "react-native";
import React from "react";
import NativeAd from "./native-ad";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<NativeAd />).toJSON();

  expect(tree).toMatchSnapshot();
});
