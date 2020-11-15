import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SocialLinks from '.'

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks
} as Meta

export const Default: Story = (args) => <SocialLinks {...args} />

export const light: Story = (args) => <SocialLinks {...args} />

light.args = {
  color: 'light'
}
