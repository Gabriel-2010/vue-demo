import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomePage from '@/components/HomePage.vue'
import SubPage from '@/components/SubPage.vue'

describe('HomePage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Home Page'
    const wrapper = shallowMount(HomePage, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})

describe('SubPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Sub Page'
    const wrapper = shallowMount(SubPage, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
