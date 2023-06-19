import type { Meta, StoryObj } from "@storybook/react";
import { Jjj } from '.';

type T = typeof Jjj

export default {
  component: Jjj,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
