//variables
 let btn =document.querySelector('#new-quote');
 let quote= document.querySelector('.quote');
 let person = document.querySelector('.person');

 const quotes =[{
    quote:'“Success usually comes to those who are too busy to be looking for it.” ' ,
    person:'-Henry David Thoreau'
 },{
    quote:'“If you are not willing to risk the usual, you will have to settle for the ordinary.” ',
    person:'- Jim Rohn'
 },{
    quote:'“The secret of getting ahead is getting started.”  ',
    person:'-Mark Twain'
 },{
    quote:'“But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders.” ',
    person:'―Charles Darwin'
 },{
    quote:'“Life is never fair, and perhaps it is a good thing for most of us that it is not.” ',
    person:'—Oscar Wilde'
 },{
    quote:'"We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out." ',
    person:'—Ray Bradbury'
 },{
    quote:'“Impossible is just an opinion.” ',
    person:'—Paulo Coelho'
 },{
    quote:'“All our dreams can come true, if we have the courage to pursue them.” ',
    person:'—Walt Disney'
 },{
    quote:'“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. Twenty-six times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.” ',
    person:'—Michael Jordan'
 },{
    quote:'“Imagination is everything. It is the preview of life`s coming attractions.” ',
    person:'—Albert Einstein'
 },];


btn.addEventListener('click',function(){
   
    let random =Math.floor(Math.random()*quotes.length);

     quote.innerText = quotes[random].quote;
     person.innerText = quotes[random].person;


})



















