import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import ParticipantCard from '../../App/Components/ParticipantCard'

test('ParticipantCard component renders correctly if name is string', () => {
  const tree = renderer.create(<ParticipantCard name='TEST' />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ParticipantCard component renders correctly if name is null', () => {
  const tree = renderer.create(<ParticipantCard name={null} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('ParticipantCard component renders correctly if name is undefined', () => {
  const tree = renderer.create(<ParticipantCard name={undefined} />).toJSON()
  expect(tree).toMatchSnapshot()
})
