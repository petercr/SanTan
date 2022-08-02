import type { NextComponentType } from 'next';

const Card: NextComponentType = () => (
  <div>
    <h1>This is a card</h1>
    <p>With some text</p>
    <style jsx>{`
      div {
        color: red;
        background: blue;
      }
    `}</style>
  </div>
);

export default Card;
