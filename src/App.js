import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Page from './components/Page'
import Contact from './components/Contact'

import Apotek from './img/portfolio/thumbnails/apotek_agency.png'
import Liberty from './img/portfolio/thumbnails/making_people_free.png'
import ApotekPge from './img/portfolio/apotek1.jpg'
import LibertyPge from './img/portfolio/liberty.jpg'

import './css/App.css'
import './scss/custom.scss'



const routes = [
  {
  name: 'Home',
  path: '/themediamasons/',
  Component: Page,
  content: {
    text: `The Media Masons are a graphic design company specialising in many different areas of design and quickly deliver professional-grade productions.\nThe MediaMasons provide artwork for Print Web and Video. Here at The MediaMasons we listen to your needs and deliver to our best understandings, we are a very small organisation allowing us to form a personal relationship with each and every costumer we come in contact with, this enables us to get a better understanding into what you really need from us, giving us the ability to give our suggestions and in turn communicating our vision for the projects we engage in.\n
    The MediaMasons are a team of designers who are always a phone call away if needed, you will always be given the ability to communicate personally with the specific designer who is dealing with your project.\nWe strive in creating a masterpiece everytime round and produce work to a high standard in order to have every costumer leave pleased with what they've recieved to an extent in which they can and WILL return with any of their future graphic design needs.`
    }
  },
  {
  name:'Services',
  path:'/themediamasons/services',
  Component: Page,
  content:{
    column:[
      {
        title: "Web Design",
        text:`MediaMasons design professional, search engine friendly, both static and dynamic websites.\nWether you need a complete website fully navigational ready for the web, a flat design layout (either .jpg or png), Email Newletters or just a web banner. We are willing and capable of taking up any project no matter the size. We can incorporate flash into html based sites and we can also design fully functional flash only sites.\n
        The sites created are hand coded and they follow all web standards and we always try to incorporate CSS and XHTML to increase site performance and productivity.
        \nWe also encourage collaborations with design agencies who desire our skills.`
        }, {
          title: "Graphic Design",
          text:`We also specialize in professional, eye-catching print design. Print design is an extremely popular form of business and personal advertisement.\nBrochures, flyers, letterheads and business cards are all products we can produce to please the highest of client needs.\nThe MediaMasons dont just design regular Print, we produce smart, witty, unique, one-of-a-kind projects with a great sense of creativity incorporated.\nIf you are a starting company or a well known company, The MediaMasons will help, with our teams skills and knowledge of design techniques and history of design.`
          }
      ]
    }
    }, {
      name: 'Portfolio',
      path: '/themediamasons/portfolio',
      Component: Page,
      content: {
        thumbnail: [{
          id:1,
          title: 'Apotek Agency',
          img: Apotek,
          path:'/portfolio/apotek'
          }, {
            id:2,
            title: 'Liberty',
            img: Liberty,
            path: '/portfolio/liberty'
        }]
      }
      }, {
        name: 'Contact Us',
        path: '/themediamasons/contact',
        Component: Contact,
        }, {
          path: '/themediamasons/portfolio/liberty',
          Component: Page,
          content:{
            portfolioColumn:[
              {
              title: 'Liberty',
              description: 'www.makingpeoplefree.org.uk'
              }, {
                img: LibertyPge,
                source: `www.makingpeoplefree.org.uk`,
                }
            ]
          }
          }, {
              path:'/themediamasons/portfolio/apotek',
              Component: Page,
              content:{
                portfolioColumn:[
                  {
                  title: 'Apotek',
                  description: `Foremost Healthcare, Social Care and Workplace Trainers, Domiciliary Care Agency, Services and Management.
                  Apotel agency & learning is the trading name for Reynolds & Archer (UK) Limited, a company formed over ten
                  years ago to provide training, health and social care services.`,
                  source:`www.apotekagency.co.uk`
                  }, {
                      img: ApotekPge,
                      source: '',
                      }
                  ]
              }
              }
  ]


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar buttons={routes} />
        <Switch>
        {
        routes.map(({name, path, content, Component}) => (
          
            <Route exact key={path} path={path} >
                <Component key={path} content={content} />
            </Route>
        ))
        }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
