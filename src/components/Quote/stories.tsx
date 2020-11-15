import { Story, Meta } from '@storybook/react/types-6-0'
import Quote, { QuoteProps } from '.'

export default {
  title: 'Components/Quote',
  component: Quote
} as Meta

export const Default: Story<QuoteProps> = (args) => <Quote {...args} />

Default.args = {
  author: 'Thomas Jefferson',
  quote: 'Descobri que quanto mais eu trabalho mais sorte eu pareço ter',
  imageUrl:
    'https://image.shutterstock.com/image-vector/abstract-background-design-vector-260nw-127625360.jpg'
}
