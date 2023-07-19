var img=document.getElementById("img");
var quote=document.getElementById("quote");
var author=document.getElementById("author");
var authorBorn=document.getElementById("born");
var authorDie=document.getElementById("die");
var layer=document.getElementById("layer");
var newRandomNumber;
var oldRandomNumber;

quoteList=[
{quoteText:`“Be yourself; everyone else is already taken.”`,quoteAuthor:`--Oscar Wilde`,authorImg:`<img src="imgs/Oscar Wilde.png" alt="Oscar Wilde" >`,born:`Born: October: 16, 1854`,die:`Die: November: 30, 1900`},
{quoteText:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,quoteAuthor:`― Marilyn Monroe`,authorImg:`<img src="imgs/Marilyn Monroe.jpg" alt="Marilyn Monroe">`,born:`Born: June 1, 1926`,die:`Die: August 4, 1962`},
{quoteText:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,quoteAuthor:`― Albert Einstein`,authorImg:`<img src="imgs/Albert Einstein.jpg" alt="Albert Einstein" >`,born:`Born: March 14, 1879`,die:`Die: April 18, 1955`},
{quoteText:`“So many books, so little time.”`,quoteAuthor:`― Frank Zappa`,authorImg:`<img src="imgs/Frank Zappa.jpg" alt="Frank Zappa"  >`,born:`Born: December 21, 1940`,die:`Die: December 04, 1993`},
{quoteText:`“A room without books is like a body without a soul.”`,quoteAuthor:`― Marcus Tullius Cicero`,authorImg:`<img src="imgs/Marcus Tullius Cicero.jpg" alt="Marcus Tullius Cicero"  >`,born:`Born: January 15, 0106`,die:`Die: December 31, 0043`},
{quoteText:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,quoteAuthor:`― Bernard M. Baruch`,authorImg:`<img src="imgs/Bernard M. Baruch.jpg" alt="Bernard M. Baruch"  >`,born:`Born: August 19, 1870`,die:`Die: June 20, 1965`},
{quoteText:`“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”`,quoteAuthor:`― William W. Purkey`,authorImg:`<img src="imgs/William W. Purkey.jpg" alt="William W. Purkey"  >`,born:`Born: August 22, 1929`,die:`still alive until now`},
{quoteText:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,quoteAuthor:`― Dr. Seuss`,authorImg:`<img src="imgs/Dr. Seuss.jpg" alt="Dr. Seuss"  >`,born:`Born: March 02, 1904`,die:`Die: September 24, 1991`},
{quoteText:`“You only live once, but if you do it right, once is enough.”`,quoteAuthor:`― Mae West`,authorImg:`<img src="imgs/Mae West.jpg" alt="Mae West" >`,born:`Born: August 17, 1893`,die:`Die: October 22, 1980`},
{quoteText:`“Be the change that you wish to see in the world.”`,quoteAuthor:`― Mahatma Gandhi`,authorImg:`<img src="imgs/Mahatma Gandhi.jpg" alt="Mahatma Gandhi"  >`,born:`Born: October 02, 1869`,die:`Die: January 30, 1948`}
]






function displayNewQuote(){
    layer.setAttribute("class","position-absolute dark-layer top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center flex-column");
newRandomNumber=Math.floor(Math.random() * 10);
if((oldRandomNumber !=newRandomNumber)||(oldRandomNumber==undefined)){
    quote.innerHTML=quoteList[newRandomNumber].quoteText;
    author.innerHTML=quoteList[newRandomNumber].quoteAuthor;
    img.innerHTML=quoteList[newRandomNumber].authorImg;
    authorBorn.innerHTML=quoteList[newRandomNumber].born;
    authorDie.innerHTML=quoteList[newRandomNumber].die;
 
    oldRandomNumber=newRandomNumber;
}
else{
    newRandomNumber-=1;
    if(newRandomNumber>-1){
        quote.innerHTML=quoteList[newRandomNumber].quoteText;
        author.innerHTML=quoteList[newRandomNumber].quoteAuthor;
        img.innerHTML=quoteList[newRandomNumber].authorImg;
        authorBorn.innerHTML=quoteList[newRandomNumber].born;
    authorDie.innerHTML=quoteList[newRandomNumber].die;
        
        oldRandomNumber=newRandomNumber;
    }

    else{
        newRandomNumber+=2
        quote.innerHTML=quoteList[newRandomNumber].quoteText;
        author.innerHTML=quoteList[newRandomNumber].quoteAuthor;
        img.innerHTML=quoteList[newRandomNumber].authorImg;
        authorBorn.innerHTML=quoteList[newRandomNumber].born;
    authorDie.innerHTML=quoteList[newRandomNumber].die;
    
        oldRandomNumber=newRandomNumber;

    }
}
}