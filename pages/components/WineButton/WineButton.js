import React from "react"
import S from "./WineButton.module.scss"

const WineButton = props => {
  const {activeButton, index, inColor, event, handleSort, children} = props
  const isActive = activeButton === index

  return (
    <button
      className={`${S.buttonType} ${isActive && S.buttonTypeActive}`}
      onClick={() => {
        inColor(index)
        handleSort(event)
      }}>
      {children}
    </button>
  )
}

export default WineButton
