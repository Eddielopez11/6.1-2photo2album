import React from 'react'
import Modal from './Modal.js'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: {
        "smite": [
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg"
          },
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/aa/SkinArt_Bellona_Default.jpg"
          },
          {
            src: "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8a/SkinArt_Amaterasu_Default.jpg"
          }
        ],
        "league of legends": [
          {
            src: "https://i.kinja-img.com/gawker-media/image/upload/s--Yoog9Zsk--/c_scale,fl_progressive,q_80,w_800/1363576383705807507.jpg"
          },
          {
            src: "https://i.kinja-img.com/gawker-media/image/upload/s--xW0i_Wdt--/c_scale,fl_progressive,q_80,w_800/1363576384150819475.jpg"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Ekko.jpg"
          }
        ],
        "dota 2": [
          {
            src: "http://www.pcgamesn.com/sites/default/files/juggernaut.jpg"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/lycan.jpg"
          },
          {
            src: "http://www.pcgamesn.com/sites/default/files/sniper_0.jpg"
          }
        ],
        "arena of heroes": [
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncpjlv2ln.jpg"
          },
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncerxtwdj.jpg"
          },
          {
            src: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgnbpohz694.jpg"
          }
        ],
        "deadbreed": [
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339940031.jpg"
          },
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339939641.jpg"
          },
          {
            src: "http://images9.gry-online.pl/galeria/galeria_duze3/339939267.jpg"
          }
        ],
        "gigantic": [
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789669-giganticscreenshot-tytotheswift.jpg"
          },
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789668-giganticscreenshot-tripp.jpg"
          },
          {
            src: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789667-giganticscreenshot-roland.jpg"
          }
        ]
      }
    }
  },
  getInitialState(){
    return {
      currentAlbum: Object.keys(this.props.albums)[1],
      modalOpenClass: ""
    }
  },
  onImageClick() {
    this.setState({
      modalOpenClass: "modal--show"
    })
  },
  render() {
    let albumNames = Object.keys(this.props.albums)
    return (
      <section className="myAlbums__main">
        <ul>
          {
            albumNames.map((album, i) => {
              return <li key={i}>{album}</li>
            })
          }
        </ul>
        <h1 className="myAlbums__header">My Albums</h1>
        <div>
          {
            this.props.albums[this.state.currentAlbum].map((image, i) => {
              return <img key={i} src={image.src} alt="lit" onClick={this.onImageClick}/>
            })
          }
          <Modal modalOpenClass={this.state.modalOpenClass}/>
        </div>
      </section>
    )
  }
})
