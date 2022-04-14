const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

const seattle = {
  title: "Seattle",
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function ()
  {

    for (let i =0; i < hours.length; i++)
    {
      const randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers)
      this.randomCookiesPerHour[i] =Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    title.totalCookiesSold = total;
  }
// };
//  console.log(seattle.maxCustomers)

render: function ()
  {  //get on screen
    const containerElm = document.getElementById('cookie-stand-locations');
    //article
    const articleElm = document.createElement('article');
    containerElem.appendChild(articleElem);
  //heading
    const headerElm = document.createElemenet('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    //ul
    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // list items
    for (let i=0; i < this.randomCookiesPerHour.length; i++){
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot =hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSold}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;
    
  }

};
seattle.generateRandomCookiesPerHour();
seattle.render()

function randomInRange(min, max)
  {
    const span = max - min +1;
    const randInSpan = Math.floor(Math.random()* span);
    return min + randInSpan;
  }
