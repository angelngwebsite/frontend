import React from 'react'
import './about-slider.scss'

import YouTube from 'react-youtube'

const AboutSlider = ({ children }) => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      frameborder: 0,
      autohide: 1,
    },
  }
  return (
    <section id="about-promos" className="center-column">
      <article className="promo">
        <div className="inner-wrapper">
          <div className="thumbnail">
            <YouTube
              videoId="X5lZ6_fNBL4"
              opts={opts}
              className="video-iframe"
              onReady={event => {
                // access to player in all event handlers via event.target
                event.target.mute()
                event.target.playVideo()
              }}
              onEnd={event => {
                event.target.playVideo()
              }}
            />
          </div>{' '}
        </div>{' '}
      </article>
    </section>
  )
}
export default AboutSlider

// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import './about-slider.scss'
// import Swiper from 'react-id-swiper'
// import Img from 'gatsby-image'

// import YouTube from 'react-youtube'

// const AboutSlider = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query AboutSlider {
//         allWordpressPost(
//           filter: { acf: { isAbout: { ne: null } } }
//           sort: { fields: date }
//         ) {
//           edges {
//             node {
//               id
//               wordpress_id
//               acf {
//                 aboutImages {
//                   localFile {
//                     childImageSharp {
//                       fluid(maxWidth: 1800) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       const params = {
//         spaceBetween: 20,
//         slidesPerView: 1,
//         loop: false,
//       }
//       const videoOptions = {
//         playerVars: {
//           // https://developers.google.com/youtube/player_parameters
//           autoplay: 1,
//           controls: 0,
//           rel: 0,
//           showinfo: 0,
//         },
//       }
//       return (
//         <section id="about-promos" className="center-column">
//           <Swiper {...params}>
//             {data.allWordpressPost.edges[0].node.acf.aboutImages.map(
//               (image, i) => {
//                 return (
//                   <article key={i} className="promo">
//                     <div className="inner-wrapper">
//                       <div className="thumbnail">
//                         {/* <Img
//                           style={{
//                             position: 'absolute',
//                             left: 0,
//                             top: 0,
//                             width: '100%',
//                             height: '100%',
//                           }}
//                           fluid={image.localFile.childImageSharp.fluid}
//                         /> */}

//                         <div className="video-background">
//                           <div className="video-foreground">
//                             <YouTube
//                               videoId="X5lZ6_fNBL4"
//                               opts={videoOptions}
//                               className="video-iframe"
//                               onReady={event => {
//                                 // access to player in all event handlers via event.target
//                                 // event.target.mute();
//                               }}
//                               onEnd={event => {
//                                 event.target.playVideo()
//                               }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </article>
//                 )
//               }
//             )}
//           </Swiper>
//         </section>
//       )
//     }}
//   />
// )

// export default AboutSlider
