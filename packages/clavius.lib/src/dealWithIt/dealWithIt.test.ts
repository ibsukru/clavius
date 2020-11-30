import dealWithIt from './dealWithIt'

test.each(['Hello world', undefined])('dealWithIt %s', text => {
  expect(dealWithIt(text)).toMatchSnapshot()
})
