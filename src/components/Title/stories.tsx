import { Story, Meta } from '@storybook/react/types-6-0'
import Title, { TitleProps } from '.'

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TitleProps> = (args) => <Title {...args} />
Default.args = {
  children: 'Title'
}
