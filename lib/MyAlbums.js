import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      albums: [
        {
          album: "smite",
          imgURL: "http://www.xboxachievements.com/images/news/smite-logo.jpg",
          link: "/album/smite"
        },
        {
          album: "league of legends",
          imgURL: "http://www.logicalincrements.com/assets/img/articles/lol/leaguelogo.jpg",
          link: "/album/league"
        },
        {
          album: "dota 2",
          imgURL: "http://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg?t=1471028674",
          link: "/album/dota2"
        },
        {
          album: "arena of heroes",
          imgURL: "http://walzmusic.com/blog/wp-content/uploads/2013/04/arenaofheroes.png",
          link: "/album/heroes"
        },
        {
          album: "deadbreed",
          imgURL: "http://www.deadbreed.com/img/deadbreed.png",
          link: "/album/deadbreed"
        },
        {
          album: "gigantic",
          imgURL: "http://cdn3.dualshockers.com/wp-content/uploads/2016/02/gigantic1.png",
          link: "/album/gigantic"
        },
      ]
    }
  },
  render() {
    return (
      <main className="myAlbums__main">
        <h1 className="myAlbums__header">My Albums</h1>

            {
              this.state.albums.map((album, i) => {
                return <div className="myAlbums__div">
                          <Link key={i} id={i} to={album.link}><img src={album.imgURL} alt={album.album} className="myAlbums__img"/>{album.album}</Link>
                        </div>
              })
            }

      </main>
    )
  }
})
