import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import NameForm from '../../App/Components/NameForm'

test('NameForm component renders correctly', () => {
  const tree = renderer.create(<NameForm />).toJSON()
  expect(tree).toMatchSnapshot()
})

// test('ParticipantCard component renders correctly if name is null', () => {
//   const tree = renderer.create(<ParticipantCard name={null} />).toJSON()
//   expect(tree).toMatchSnapshot()
// })

// test('ParticipantCard component renders correctly if name is undefined', () => {
//   const tree = renderer.create(<ParticipantCard name={undefined} />).toJSON()
//   expect(tree).toMatchSnapshot()
// })
