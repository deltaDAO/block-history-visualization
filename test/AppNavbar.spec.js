import { mount } from '@vue/test-utils'
import AppNavbar from '@/components/AppNavbar.vue'

describe('AppNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppNavbar)
    expect(wrapper.vm).toBeTruthy()
  })
})
