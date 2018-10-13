import React, {Component} from 'react';
import ActorList from "./ActorList";

class HomePage extends Component {
    state = {
        actors:[
            {
            name: "Anthony Hopkins",
            description:"Anthony Hopkins was born on December 31, 1937, in Margam, Wales, to Muriel Anne (Yeats) and Richard Arthur Hopkins, a baker." ,
            photo:"https://m.media-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_UY209_CR5,0,140,209_AL_.jpg",
            top:"1."
            },
            {
                name: " Brad Pitt",
                description:"An actor and producer known as much for his versatility as he is for his handsome face, Golden Globe-winner Brad Pitt's mostwidely recognized role may be Tyler Durden in Dövüs Kulübü (1999).",
                photo:"https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX140_CR0,0,140,209_AL_.jpg",
                top:"2."

            },
            {
                name:" Jeremy Irons",
                description:"British actor Jeremy Irons was born in Cowes, Isle of Wight, a small island off the south coast of England. He is the son of Barbara Anne Brereton (Sharpe) and Paul Dugan Irons, an accountant.",
                photo:"https://m.media-amazon.com/images/M/MV5BMTY5Mzg2NDY5OV5BMl5BanBnXkFtZTcwMDQwNzA0Mg@@._V1_UY209_CR9,0,140,209_AL_.jpg",
                top:"3."
            },
            {
                name:" Leonardo DiCaprio",
                description:"Few actors in the world have had a career quite as diverse as Leonardo DiCaprio's. DiCaprio has gone from relatively humble beginnings.",
                photo:"https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY209_CR7,0,140,209_AL_.jpg",
                top:"4."
            },
            {
                name:" Samuel L. Jackson",
                description:"Samuel L. Jackson is an American producer and highly prolific actor, having appeared in over 100 films, including Zor ölüm 3 (1995).",
                photo:"https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX140_CR0,0,140,209_AL_.jpg",
                top:"5."
            },
            {
              name:" Kevin Spacey",
                description:"Kevin Spacey Fowler, better known by his stage name Kevin Spacey, is an American actor of screen and stage, film director, producer, screenwriter and singer.",
                photo:"https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_UY209_CR58,0,140,209_AL_.jpg",
               top:"6."
            }
        ]
    };

    render() {
        return (
            <div>
                <h2>Actors & Actresses</h2>
                <ActorList actors={this.state.actors}/>
            </div>
        );
    }
}



export default HomePage;