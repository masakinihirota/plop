import type { Meta, StoryObj } from "@storybook/react";
import { Ccc } from '.';

type T = typeof Ccc

export default {
  component: Ccc,
} satisfies Meta<T>;

export const Default: StoryObj<T> = {};
