import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Components/Logo',
  component: Logo
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

export const White: Story<LogoProps> = (args) => <Logo {...args} />

White.args = {
  color: 'white'
}

export const Black: Story<LogoProps> = (args) => <Logo {...args} />

Black.args = {
  color: 'black'
}
