import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import WorkoutCard from '../../App/Components/WorkoutCard'

test('WorkoutCard component renders correctly if name is string', () => {
  const tree = renderer.create(<WorkoutCard title="DEMO TITLE" tag="DEMO TAG" image="DEMO IMAGE" />).toJSON()
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
