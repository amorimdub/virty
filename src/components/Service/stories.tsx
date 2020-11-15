import { Story, Meta } from '@storybook/react/types-6-0'
import Service, { ServiceProps } from '.'

import mock from './mock'

export default {
  title: 'Components/Service',
  component: Service
} as Meta

export const Default: Story<ServiceProps> = (args) => <Service {...args} />

Default.args = {
  ...mock
}
