import { Story, Meta } from '@storybook/react/types-6-0'

import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Default: Story<InputProps> = (args) => <Input {...args} />

export const WithLabel: Story<InputProps> = (args) => <Input {...args} />

WithLabel.args = {
  label: 'Name'
}

export const Disabled: Story<InputProps> = (args) => <Input {...args} />

Disabled.args = {
  label: 'Name',
  disabled: true
}

export const WithError: Story<InputProps> = (args) => <Input {...args} />

WithError.args = {
  label: 'Name',
  error: 'Name required'
}
