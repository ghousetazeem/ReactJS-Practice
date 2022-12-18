import React from 'react';
import './content.css';

function Content({ types }) {
  return (
    <div className="content">

      <Contentsection type={types} />
      <Contentcard />

    </div>
  );
}

const Contentsection = ({ type }) => (
  <div className="content-section">
    <p className="content-para">
      Our
      {' '}
      {type}
      {' '}
      Service
    </p>
    <br />
    <p>
      Top 100 Television Movies. Best of Rotten Tomatoes.
      <br />
      {' '}
      Movies with 40 or more critic reviews vie for their place in history at Rotten Tomatoes.
      {' '}
      <br />
      Eligible movies are ...
    </p>
  </div>

);

const Contentcard = () => (
  <div className="card-container">
    <Cardsection image="http://placeimg.com/280/400/spiderman" />
    <Cardsection image="http://placeimg.com/280/400/avergas" />
    <Cardsection image="http://placeimg.com/280/400/animals" />
    <Cardsection image="http://placeimg.com/280/400/dogs" />
    <Cardsection image="http://placeimg.com/280/400/moon" />

  </div>

);

const Cardsection = ({ image }) => (
  <div className="card" style={{ backgroundImage: `url(${image})` }} />
);
export default Content;
