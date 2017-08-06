import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = product => {
  const component = shallow(
    <Product product={product} />
  )

  return {
    component: component,
    image: component.find('img'),
    name: component.find('h6'),
    description: component.find('small'),
    price: component.find('b'),
  }
}

const p = {"id":1,"price":"$87.68","product_name":"Amitriptyline Hydrochloride","description":"synergize efficient metrics","product_image":"http://dummyimage.com/307x328.bmp/ff4444/ffffff"};

describe('Product component', () => {
  it('should render image with the url', () => {
    const { image } = setup(p)
    expect(image.prop('src')).toBe(p.product_image);
  });

  it('should render name', () => {
    const { name } = setup(p)
    expect(name.text()).toBe(p.product_name);
  });

  it('should render description', () => {
    const { description } = setup(p)
    expect(description.text()).toBe(p.description);
  });

  it('should render price', () => {
    const { price } = setup(p)
    expect(price.text()).toBe(p.price);
  });
})
