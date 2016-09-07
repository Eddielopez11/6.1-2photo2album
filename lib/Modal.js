import React from 'react'

export default React.createClass({

  render() {
    return (
      <div className={`modal ${this.props.modalOpenClass}`}>
        <img
          src="https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg"
          alt="try"
          className="modal__image"
        />
      </div>
    )
  }
})
