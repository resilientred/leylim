!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):e.lComponents=i()}(this,function(){"use strict";return[{name:"l-one-column",thumbnail:"l-one.png",template:'\n  <div class="l-one-column">\n    <div class="l-col" contenteditable>\n      <h3>Title</h3>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem impedit autem dolor explicabo dolorem adipisci, magnam ipsa sit nostrum nam ipsum dicta neque repellendus nihil cupiditate officiis, consequatur beatae?</p>\n    </div>\n  </div>',style:".l-one-column {\n    display: flex;\n  }",onUpdate:function(e,i){console.log(e,i),i.fields={},i.fields.x=1}},{name:"l-two-column",thumbnail:"l-two.png",template:'\n  <div class="l-two-column">\n    <div class="l-col" contenteditable>\n      <h3>Title</h3>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque rem impedit autem dolor explicabo dolorem adipisci, magnam ipsa sit nostrum nam ipsum dicta neque repellendus nihil cupiditate officiis, consequatur beatae?</p>\n    </div>\n    <div class="l-col" contenteditable>\n      <h3>Title</h3>\n      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam tempore, velit voluptatibus neque quibusdam, repudiandae accusantium aspernatur ipsa, reprehenderit porro repellat impedit. Dolorem adipisci voluptatem natus minima. Ex, perferendis neque.</p>\n    </div>\n  </div>',style:".l-two-column {\n    display: flex;\n  }"}]});
