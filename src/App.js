import React from 'react';
import Button from './Button';
import Product from './Product';
import bag1 from './assets/bag_1.png';

import './App.css';

// Stappenplan opdracht 1
// 1. nav element maken
// 2. Wikkel de titel en nav in een fragment!
// 3. Schrijf één button element:
  // [] Tekst
  // [] Type (button)
  // [] Hoe krijgen we een event-listener op een react button? Om daarna console.log() iets in de console
  // [] Hoe krijgen we een button disabled?

// Stappenplan opdracht 2
// Volg de aanpak uit het demo project (in de README.md)

function App() {
    // function handleClick() {
    //     console.log("dit moet erin voor een niet anonieme functie");
    // }
  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
              <Button
                  type="button"
                  buttonName="to the collection"
                  buttonMessage="to the collection"
                  isDisabled={false}
              />
              <Button
                  type="button"
                  buttonName="shop all bags"
                  buttonMessage="shop all bags"
                  isDisabled={false}
              />
              <Button
                  type="button"
                  buttonName="pre-orders"
                  buttonMessage="pre-orders"
                  isDisabled={true}
              />
              {/*<button*/}
              {/*    type="button"*/}
              {/*    onClick={() => console.log("Hij doet het!") }*/}
              {/*>*/}
              {/*    to the collection*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    type="button"*/}
              {/*    onClick={() => console.log("Hij doet het!") }*/}
              {/*>*/}
              {/*    shop all bags*/}
              {/*</button>*/}
              {/*<button*/}
              {/*    type="button"*/}
              {/*    onClick={() => console.log("Hij doet het!") }*/}
              {/*>*/}
              {/*    pre-orders*/}
              {/*</button>*/}
          </nav>
          <main>
              <Product
                  productStatus="Best seller"
                  bagImage={bag1}
                  bagName="The handy bag"
                  bagPrice="€400,-"
              />
          </main>

      </>
  );
}

export default App;



// # Aanpak componenten maken
// 1. `components`-map maken
// 2. Bestandje maken met de naam van jouw component (`Testimonial.js`)
// 3. Functie schrijven (met hoofdletter) die een HTML-element returned
// 4. Exporteer de functie (component) uit het bestand
// 5. Importeer de functie (component) in App.js en gebruik hem als: `<Component />`
// 6. Plak je de orignele HTML in jouw custom component. Welke data heeft jouw component nodig?
// 7. Bedenk property-namen en geef informatie door aan het component vanaf `App.js`
// 8. Ontvang het props-object als parameter9. Vervang de statische tekst door dynamische waardes uit het props object



