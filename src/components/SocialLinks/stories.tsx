import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import SocialLinks, { SocialLinksProps } from '.'

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks
} as Meta

export const Default: Story<SocialLinksProps> = (args) => (
  <SocialLinks {...args} />
)

Default.args = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com'
}
export const Light: Story<SocialLinksProps> = (args) => (
  <SocialLinks {...args} />
)

Light.args = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  color: 'light'
}
