import React from "react";
import { storiesOf } from "@storybook/react-native";
import DatePublication from "./date-publication";

const props = {
  date: new Date("2017-07-01T14:32:00.000Z"),
  publication: "The Sunday Times"
};

storiesOf("DatePublication", module).add("DatePublication", () =>
  <DatePublication {...props} />
);
