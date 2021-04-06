import { Story, Meta } from '@storybook/react/types-6-0'

import TextArea, { TextAreaProps } from '.'

export default {
  title: 'TextArea',
  component: TextArea
} as Meta

export const Default: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const WithLabel: Story<TextAreaProps> = (args) => <TextArea {...args} />

WithLabel.args = {
  label: 'Name'
}

export const Disabled: Story<TextAreaProps> = (args) => <TextArea {...args} />

Disabled.args = {
  label: 'Name',
  disabled: true
}

export const WithError: Story<TextAreaProps> = (args) => <TextArea {...args} />

WithError.args = {
  label: 'Name',
  error: 'Name required'
}
