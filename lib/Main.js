import React from 'react'
import Modal from './Modal.js'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: {
        "Smite": [
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg",
            alt: "tyr"
          },
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/aa/SkinArt_Bellona_Default.jpg",
            alt: "bellona"
          },
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8a/SkinArt_Amaterasu_Default.jpg",
            alt: "amaterasu"
          }
        ],
        "League of Legends": [
          {
            src: "https://i.kinja-img.com/gawker-media/image/upload/s--Yoog9Zsk--/c_scale,fl_progressive,q_80,w_800/1363576383705807507.jpg",
            alt: "league of legends 1"
          },
          {
            src: "https://i.kinja-img.com/gawker-media/image/upload/s--xW0i_Wdt--/c_scale,fl_progressive,q_80,w_800/1363576384150819475.jpg",
            alt: "league of legends 2"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Ekko.jpg",
            alt: "league of legends 3"
          }
        ],
        "Dota 2": [
          {
            src: "http://www.pcgamesn.com/sites/default/files/juggernaut.jpg",
            alt: "juggernaut"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/lycan.jpg",
            alt: "lycan"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/sniper_0.jpg",
            alt: "sniper"
          }
        ],
        "Arena of Heroes": [
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncpjlv2ln.jpg",
            alt: "arena of heroes 1"
          },
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncerxtwdj.jpg",
            alt: "arena of heroes 2"
          },
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgnbpohz694.jpg",
            alt: "arena of heroes 3"
          }
        ],
        "Deadbreed": [
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339940031.jpg",
            alt: "deadbreed 1"
          },
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339939641.jpg",
            alt: "deadbreed 2"
          },
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339939267.jpg",
            alt: "deadbreed 3"
          }
        ],
        "Gigantic": [
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789669-giganticscreenshot-tytotheswift.jpg",
            alt: "tyto the swift"
          },
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789668-giganticscreenshot-tripp.jpg",
            alt: "tripp"
          },
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789667-giganticscreenshot-roland.jpg",
            alt: "roland"
          }
        ]
      }
    }
  },
  getInitialState(){
    return {
      currentAlbum: Object.keys(this.props.albums)[0],
      modalOpenClass: "modal",
      currentImageSrc: "",
      currentImageAlt: ""
    }
  },
  onAlbumClick(e) {
    var album = e.target.innerText
    this.setState({
      currentAlbum: album
    })
  },
  onImageClick(e) {
    var clickedImageEl = e.target
    console.log(e.target);
    this.setState({
      modalOpenClass: "modal modal--show",
      currentImageSrc: clickedImageEl.src,
      currentImageAlt: clickedImageEl.alt
    })
  },
  onBackgroundModalClick() {
    this.setState({
      modalOpenClass: "modal"
    })
  },
  onPrevClick() {
    console.log("prev");
  },
  onNextClick() {
    console.log("next");
  },
  render() {
    let albumNames = Object.keys(this.props.albums)
    return (
      <section className="myAlbums__main">
        <div className="myAlbums__nav">
          <h2 className="myAlbums__header">My Albums</h2>
          <ul className="myAlbums__ul">
            {
              albumNames.map((album, i) => {
                return <li className="myAlbum" key={i} onClick={this.onAlbumClick}>{album}</li>
              })
            }
          </ul>
        </div>
        <div className="currentAlbum">
          <h1 className="myAlbums__header">{this.state.currentAlbum}</h1>
          {
            this.props.albums[this.state.currentAlbum].map((image, i) => {
              return <img key={i}
                          src={image.src}
                          alt={image.alt}
                          onClick={this.onImageClick}
                          className="image"/>
            })
          }
          <Modal modalOpenClass={this.state.modalOpenClass}
          currentImageSrc={this.state.currentImageSrc}
          currentImageAlt={this.state.currentImageAlt}
          onModalClick={this.onBackgroundModalClick}
          onPrevClick={this.onPrevClick}
          onNextClick={this.onNextClick}
          />
        </div>
      </section>
    )
  }
})
