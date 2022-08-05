import type { FunctionComponent } from 'react';
import PropTypes from 'prop-types';

interface Props {
  text: string;
}

const HeaderCard: FunctionComponent<Props> = ({ text }) => (
  <div>
    <h1>{text}</h1>
    <style jsx>{`
      div {
        background: radial-gradient(
              189.33% 1713.8% at 102.67% -29.78%,
              rgba(254, 133, 254, 0.23) 0%,
              rgba(252, 252, 252, 0) 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
          rgba(255, 255, 255, 0.99);
        filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
        border-radius: 20px;
        border: 1px solid #000000;
        padding: 1em;
      }
      h1 {
        font-size: 40px;
        color: black;
      }
    `}</style>
  </div>
);

HeaderCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderCard;
