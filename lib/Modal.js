import React from 'react'

export default React.createClass({

  render() {
    return (
      <div className={this.props.modalOpenClass}>
        <span onClick={this.props.onModalClick}
              className="modal__close">Close Image
        </span>
        <span className="modal__prev" onClick={this.props.onPrevClick}>{'<'}
        </span>
        <img
          src={this.props.currentImageSrc}
          alt={this.props.currentImageAlt}
          className="modal__image"
        />
      <span className="modal__next" onClick={this.props.onNextClick}>{'>'}
        </span>
      </div>
    )
  }
})
