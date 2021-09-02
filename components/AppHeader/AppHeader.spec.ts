import { render } from '@testing-library/vue'
import AppHeader from '~/components/AppHeader/AppHeader.vue'

describe('AppHeader', () => {
  it('should render', () => {
    render(AppHeader)
  })
})
