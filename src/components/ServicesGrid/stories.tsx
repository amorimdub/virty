import { Story, Meta } from '@storybook/react/types-6-0'
import ServicesGrid, { ServicesGridProps } from '.'

import mock from './mock'

export default {
  title: 'Components/ServicesGrid',
  component: ServicesGrid
} as Meta

export const Default: Story<ServicesGridProps> = (args) => (
  <ServicesGrid {...args} />
)

Default.args = {
  items: mock
}
