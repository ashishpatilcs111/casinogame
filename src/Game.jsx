import React from 'react'
import './Home.css'
import { useState } from 'react'

import backCard from './back.png'
import card1 from './card1.png'
import card2 from './card2.png'
import card3 from './card3.png'
import card4 from './card4.png'
import card5 from './card5.png'
import card6 from './card6.png'
import card7 from './card7.png'
import card8 from './card8.png'
import card9 from './card9.png'
import card10 from './card10.png'
import card11 from './card11.jpg'
import card12 from './card12.png'
import card13 from './card13.png'



const Game = () => {

    const[dragon, setDragon]=useState(0);
    const[tie,setTie]=useState(0)
    const[tiger,setTiger]=useState(0)

    const[count, setCount]=useState(100);


    var a=0;
    var b=0;
    var c=0;
    function addDragon(){
        
        if(count>0)
        {
            a=a+10;
            setDragon(dragon+10)
            document.getElementById('dragonScore').innerHTML=dragon+10;
            setCount(count-10)
            document.getElementById('count').innerHTML=count-10;
        }
        else
        alert('not Sufficient funds')
        
        
    }
    function addTie(){
        if(count>0)
        {
            b=b+10;
            setTie(tie+10)
            document.getElementById('tieScore').innerHTML=tie+10;
            setCount(count-10)
            document.getElementById('count').innerHTML=count-10;
        }
        else
        alert('not Sufficient funds')

    }
    function addTiger(){
        if(count>0)
        {
            c=c+10;
            setTiger(tiger+10)
            document.getElementById('tigerScore').innerHTML=tiger+10;
            setCount(count-10)
            document.getElementById('count').innerHTML=count-10;
        }
        else
        alert('not Sufficient funds')

    }

    //Timer Code is Here


     var countDownDate = new Date();
	countDownDate.setMinutes(countDownDate.getMinutes()+1);
	countDownDate=countDownDate.getTime();
    var seconds;
    function newGame(){
        /*
        var x = setInterval(function(){
            var now = new Date().getTime();
    
            var distance = countDownDate-now;
             seconds=Math.floor((distance%(1000*60))/1000);
             document.getElementById('timer').innerHTML=parseInt(seconds-48);
             if(parseInt(seconds-48)==0)
             {
                clearInterval(x);
             }
        },1000);
        */

        const myInterval = setInterval(myTimer, 1000);
        var timer = 10;
        function myTimer() {
            console.log(timer--);
            document.getElementById('timer').innerHTML=timer;
            console.log(timer)
            function myStopFunction() {
                        clearInterval(myInterval);
            }
            if(timer==0)
            {
                myStopFunction();
            }
        }

        

        setDragon(0)
        setDragon(0)
        document.getElementById('dragonScore').innerHTML= 0;
        setTie(0)
        document.getElementById('tieScore').innerHTML= 0;
        setTiger(0)
        setTiger(0)
        document.getElementById('tigerScore').innerHTML=0;


        document.getElementById('card1').src=backCard;

        document.getElementById('show').disabled=false;

        document.getElementById('card2').src=backCard;

        
    }


    function showCards(){
        var c1 = parseInt(Math.random()*13);
        var c2 = parseInt(Math.random()*13);

        switch(c1)
        {
            case 1:
                document.getElementById('card1').src = card1;
                break;
                case 2:
                document.getElementById('card1').src = card2;
                break;
                case 3:
                document.getElementById('card1').src = card3;
                break;
                case 4:
                document.getElementById('card1').src = card4;
                break;
                case 5:
                document.getElementById('card1').src = card5;
                break;
                case 6:
                document.getElementById('card1').src = card6;
                break;
                case 7:
                document.getElementById('card1').src = card7;
                break;
                case 8:
                document.getElementById('card1').src = card8;
                break;
                case 9:
                document.getElementById('card1').src = card9;
                break;
                case 10:
                document.getElementById('card1').src = card10;
                break;
                case 11:
                document.getElementById('card1').src = card11;
                break;
                case 12:
                document.getElementById('card1').src = card12;
                break;
                case 13:
                document.getElementById('card1').src = card13;
                break;
        }


        switch(c2)
        {
            case 1:
                document.getElementById('card2').src = card1;
                break;
                case 2:
                document.getElementById('card2').src = card2;
                break;
                case 3:
                document.getElementById('card2').src = card3;
                break;
                case 4:
                document.getElementById('card2').src = card4;
                break;
                case 5:
                document.getElementById('card2').src = card5;
                break;
                case 6:
                document.getElementById('card2').src = card6;
                break;
                case 7:
                document.getElementById('card2').src = card7;
                break;
                case 8:
                document.getElementById('card2').src = card8;
                break;
                case 9:
                document.getElementById('card2').src = card9;
                break;
                case 10:
                document.getElementById('card2').src = card10;
                break;
                case 11:
                document.getElementById('card2').src = card11;
                break;
                case 12:
                document.getElementById('card2').src = card12;
                break;
                case 13:
                document.getElementById('card2').src = card13;
                break;
        }

        if(c1>c2)
        {
            setCount(count+dragon*2)
            document.getElementById('count').innerHTML=count+dragon*2;
            alert('Heyy You won '+dragon*2 + " amount");
        }
        else if(c1<c2)
        {
            setCount(count+tie*8)
            document.getElementById('count').innerHTML=count+tie*8;
            alert('Heyy You won '+tie*8 + " amount");


        }
        else{
            setCount(count+tiger*2)
            document.getElementById('count').innerHTML=count+tiger*2;
            alert('Heyy You won '+tiger*2 + " amount");


        }

        document.getElementById('show').disabled=true;
    }



  return (
    <div className='game-home'>
        <h1>Dragon vs Tiger</h1>
      <div className='section-one'>
        <div className='card' >
            <img src={backCard} id='card1'/>
        </div>
        <div className='count'><h3 id='timer'></h3></div>
        <div className='card'>
        <img src={backCard} id='card2'/>

        </div>
      </div>


      <div className='section-two'>
        <div className='bet bet-on-dragon'>
            <h2>Dragon</h2>
            <h1 className='back'>1:1</h1>
            <h2 id='dragonScore' value={dragon}>00</h2>
            <button className='btn btn-add' onClick={addDragon}>+</button>
        </div>
        <div className='bet bet-on-tie'>
            <h2>Tie</h2>
            <h1 className='back'>1:8</h1>
            <h2 id='tieScore' value={tie}>00</h2>
            <button className='btn btn-add' onClick={addTie}>+</button>
        </div>
        <div className='bet bet-on-tiger'>
            <h2>Tiger</h2>
            <h1 className='back'>1:1</h1>
            <h2 id='tigerScore' value={tiger}>00</h2>
            <button className='btn btn-add' onClick={addTiger}>+</button>
        </div>
      </div>


    <div className='section-three'>
        <div className='amount'>
        <div id='count' value={count}>100</div>
        <button className='btn'><a href="/add">+</a></button>
        </div>
        <div><button className='btn' onClick={showCards} id='show'>Show Cards</button></div>
        <div><button className='btn' onClick={newGame}>Next Game</button></div>
        
    </div>
    </div>
  )
}

export default Game
