import React from 'react'
import Modal from './Modal.js'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: {
        "smite": {
            imgOne: "https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg",
            imgTwo: "https://hydra-media.cursecdn.com/smite.gamepedia.com/a/aa/SkinArt_Bellona_Default.jpg",
            imgThree: "https://hydra-media.cursecdn.com/smite.gamepedia.com/8/8a/SkinArt_Amaterasu_Default.jpg",
            imgFour: "https://hydra-media.cursecdn.com/smite.gamepedia.com/0/00/SkinArt_Awilix_Default.jpg",
            imgFive: "https://hydra-media.cursecdn.com/smite.gamepedia.com/5/53/SkinArt_Artemis_Default.jpg",
            imgSix: "https://hydra-media.cursecdn.com/smite.gamepedia.com/c/cd/SkinArt_NuWa_Default.jpg"
        },
        "league of legends": {
            imgOne: "http://www.altergamer.com/wp-content/uploads/2014/02/bg_champion_teemo_1920x1080-590x331.jpg",
            imgTwo: "https://i.kinja-img.com/gawker-media/image/upload/1363576383377081491.jpg",
            imgThree: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Ekko.jpg",
            imgFour: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Maokai.jpg",
            imgFive: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Ahri.jpg",
            imgSix: "http://www.pcgamesn.com/sites/default/files/League%20of%20Legends%20champions%20Morgana.jpg"
        },
        "dota 2": {
            imgOne: "http://www.pcgamesn.com/sites/default/files/juggernaut.jpg",
            imgTwo: "http://www.pcgamesn.com/sites/default/files/lycan.jpg",
            imgThree: "http://www.pcgamesn.com/sites/default/files/sniper_0.jpg",
            imgFour: "http://www.pcgamesn.com/sites/default/files/crystal%20maiden_0.jpg",
            imgFive: "http://www.pcgamesn.com/sites/default/files/omniknight.jpg",
            imgSix: "http://www.pcgamesn.com/sites/default/files/lich.jpg"
        },
        "arena of heroes": {
            imgOne: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncpjlv2ln.jpg",
            imgTwo: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgncerxtwdj.jpg",
            imgThree: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgnbpohz694.jpg",
            imgFour: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020727a0dgijgnb27cj5t5.jpg",
            imgFive: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020726a0dgijgmxe40999j.jpg",
            imgSix: "http://i1.2pcdn.com/node14/image/game/5178c69ac01d1ec0e5793b47/5178c80bc01d1ec0e5793b58/20130425020726a0dgijgmxjegwbn2.jpg"
        },
        "deadbreed": {
            imgOne: "http://images9.gry-online.pl/galeria/galeria_duze3/339940031.jpg",
            imgTwo: "http://images9.gry-online.pl/galeria/galeria_duze3/339939641.jpg",
            imgThree: "http://images9.gry-online.pl/galeria/galeria_duze3/339939267.jpg",
            imgFour: "http://images9.gry-online.pl/galeria/galeria_duze3/339938830.jpg",
            imgFive: "http://images9.gry-online.pl/galeria/galeria_duze3/339938299.jpg",
            imgSix: "http://images9.gry-online.pl/galeria/galeria_duze3/339937738.jpg"
        },
        "gigantic": {
            imgOne: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789669-giganticscreenshot-tytotheswift.jpg",
            imgTwo: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789668-giganticscreenshot-tripp.jpg",
            imgThree: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789667-giganticscreenshot-roland.jpg",
            imgFour: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789666-giganticscreenshot-naga.jpg",
            imgFive: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789672-giganticscreenshot-voden.jpg",
            imgSix: "http://static2.gamespot.com/uploads/scale_super/1197/11970954/2789661-giganticscreenshot-imani.jpg"
          }
      }
    }
  },
  getInitialState(){
    return {
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
    var currentAlbum = this.props.albums["smite"]
    return (
      <section className="myAlbums__main">
        <ul>
          {
            albumNames.map((image, i) => {
              return <li key={i}>{image}</li>
            })
          }
        </ul>
        <h1 className="myAlbums__header">My Albums</h1>
        <div>
          <img
            src="https://hydra-media.cursecdn.com/smite.gamepedia.com/9/93/SkinArt_Tyr_Default.jpg"
            alt="tyr"
            onClick={this.onImageClick}
          />
          <Modal modalOpenClass={this.state.modalOpenClass}/>
        </div>
      </section>
    )
  }
})
