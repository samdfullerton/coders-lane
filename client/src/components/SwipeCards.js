import React, { useState, useEffect }from "react";
import TinderCard from "react-tinder-card";
import './SwipeCards.css';
import API from "../utils/api"

export default function SwipeCards() {
    const [people, setPeople]=useState([]);

        // dummy data for tests
        // {
        //     name:"Kaney",
        //     url:"https://thesource.com/wp-content/uploads/2018/08/Kanye-West.jpg",
        //     language: []
        // },
        // {
        //     name:"Sparta",
        //     url:"https://urbanislandz.com/wp-content/uploads/2018/05/Tommy-Lee-Sparta-2.jpg"
        // }
 useEffect(() => {
API.getPeopleList()
.then(response => setPeople(response.data))
 },[])
    
    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
    const outOfFrame = (name) => {
        console.log(name + ' left the screen')
      }
      return (
        <div className= "card">
            <div className="tinderCards__cardContainer">
{/* this is whole Join() card  function */}
            {people.map((person) =>(
        <TinderCard 
        className="swipe"
        key ={person.name}
        preventSwipe={['up', 'down']}
        onSwipe={(dir)=> swiped(dir, person.name)}
        onCardLeftScreen={() => 
            outOfFrame(person.name)} 
        > <div style={{backgroundImage: `url(${person.url})`}} className="card">
                            
        <h3> {person.name}</h3>
        </div>
        </TinderCard>
        
        )
        )}
             </div> 
        </div>
      )
}  
