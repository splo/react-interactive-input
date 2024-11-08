import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InteractiveInput from '../src/InteractiveInput';

const meta = {
  title: 'Components/InteractiveInput',
  component: InteractiveInput,
  tags: ['autodocs'],
} satisfies Meta<typeof InteractiveInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const LargeSteps: Story = {
  args: {
    step: 10,
  },
};

export const MinMaxValue: Story = {
  args: {
    min: -100,
    max: 100,
  },
};

export const WithCustomClass: Story = {
  render: () => <InteractiveInput className="fancy-input" />,
};
