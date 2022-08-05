import type { NextComponentType } from 'next';

const Card: NextComponentType = () => (
  <div>
    <h1>Cape Cod World</h1>
    <p>Bringing Your Ideas To The World 🌎</p>
    <style jsx>{`
      div {
        background: rgba(255, 255, 255, 0.81);
        border: 1px solid #000000;
        box-shadow: 8px 7px 8px rgba(0, 0, 0, 0.29);
        border-radius: 20px;
        padding: 1rem;
      }
    `}</style>
  </div>
);

export default Card;
