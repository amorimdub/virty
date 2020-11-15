import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Entre em contato'
}

export const dark: Story = (args) => <Button {...args} />

dark.args = {
  children: 'Enviar',
  color: 'dark'
}
