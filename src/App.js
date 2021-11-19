import React from 'react';
import Button from './Button';
import Product from './Product';
import Tiles from './Tiles';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import story from './assets/our_story.png';

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
              <Product
                  productStatus="Best seller"
                  bagImage={bag2}
                  bagName="The stylish bag"
                  bagPrice="€250,-"
              />
              <Product
                  productStatus="New collection"
                  bagImage={bag3}
                  bagName="The simple bag"
                  bagPrice="€300,-"
              />
              <Product
                  productStatus="New collection"
                  bagImage={bag4}
                  bagName="The trendy bag"
                  bagPrice="€150,-"
              />
          </main>
          <footer>
              <Tiles
                  tileTitle="The brand"
                  tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat tincidunt neque. Duis commodo tellus eget mi tincidunt, nec mattis.
                  Ut ut augue faucibus, ullamcorper velit in, rhoncus eros. Donec sed viverra libero, nec blandit lacus. Ut a turpis lacus."
              />
              <Tiles
                  brandImage={brand}
              />
              <Tiles
                  brandImage={story}
              />
              <Tiles
                  tileTitle="Our story"
                  // tileText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat tincidunt neque. Duis commodo tellus eget mi tincidunt, nec mattis.
                  // Ut ut augue faucibus, ullamcorper velit in, rhoncus eros. Donec sed viverra libero, nec blandit lacus. Ut a turpis lacus."
                  // tileText2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat tincidunt neque. Duis commodo tellus eget mi tincidunt, nec mattis.
                  // Ut ut augue faucibus, ullamcorper velit in, rhoncus eros. Donec sed viverra libero, nec blandit lacus. Ut a turpis lacus."
              >
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat tincidunt neque. Duis commodo tellus eget mi tincidunt, nec mattis.
                      Ut ut augue faucibus, ullamcorper velit in, rhoncus eros. Donec sed viverra libero, nec blandit lacus. Ut a turpis lacus.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi feugiat tincidunt neque. Duis commodo tellus eget mi tincidunt, nec mattis.
                      Ut ut augue faucibus, ullamcorper velit in, rhoncus eros. Donec sed viverra libero, nec blandit lacus. Ut a turpis lacus.</p>
              </Tiles>
          </footer>

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



