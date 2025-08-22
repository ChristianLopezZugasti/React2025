import React from "react"

interface Props {
    title: string
}

export const MyTitle = React.memo(({title}: Props) => {
    console.log('madres')
  return (
    <h3> {title} </h3>
  )
})
