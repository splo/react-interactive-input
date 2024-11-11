import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaskedInput from '../src/MaskedInput';

const meta = {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs'],
} satisfies Meta<typeof MaskedInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <p>The component</p>
        <MaskedInput name="default-input" {...args} />
      </div>
      <div>
        <p>
          A regular, vanilla input element with no masking applied, for
          comparison.
        </p>
        <input type="number" {...args} />
      </div>
    </div>
  ),
  args: {
    onChange: e => {
      console.log('handleChange', parseFloat(e.target.value), e);
    },
  },
};

export const WithStep: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <p>The component</p>
        <MaskedInput {...args} />
      </div>
      <div>
        <p>
          A regular, vanilla input element with no masking applied, for
          comparison.
        </p>
        <input type="number" {...args} />
      </div>
    </div>
  ),
  args: {
    step: 0.1,
  },
};
