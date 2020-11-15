import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

import mock from './mock'

export default {
  title: 'Components/Banner',
  component: Banner
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ width: '1200px', height: '1200px' }}>
    <Banner {...args} />
  </div>
)

Default.args = {
  ...mock
}
