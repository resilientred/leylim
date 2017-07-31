/* eslint-disable */
export default {
  name: 'l-one-column', // tmp name
  thumbnail: 'l-one.png',
  template: `
  <div class="l-one-column">
    <div class="l-col" contenteditable>
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem impedit autem dolor explicabo dolorem adipisci, magnam ipsa sit nostrum nam ipsum dicta neque repellendus nihil cupiditate officiis, consequatur beatae?</p>
    </div>
    <div class="l-col" contenteditable>
      <h3>Title</h3>
      <div><img src="http://icons.iconarchive.com/icons/limav/game-of-thrones/512/Baratheon-icon.png" /></div>
    </div>
  </div>`,
  style: `.l-one-column {
    display: flex;
  }`,
  // onUpdate(options, component) {
  // }
}