import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { select } from "@storybook/addon-knobs"

import Heading from './Heading';

storiesOf("Heading", module).add("default", () => {
  return <Heading />
});

