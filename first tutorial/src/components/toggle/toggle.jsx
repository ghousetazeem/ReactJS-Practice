import React from 'react';
import './toggle.css';

class Toggle extends React.Component {
    state = {
      showphoto: false,
    }

    image = () => (
      this.setState((photo) => ({ showphoto: !photo.showphoto }))
    )

    render() {
      const { showphoto } = this.state;
      return (
        <div className="toggles_app">
          <p>Photo</p>
          <button type="button" onClick={this.image}>
            {' '}
            {showphoto ? 'hide photo' : 'show photo'}
            {' '}
          </button>
          {showphoto ? (<img src="https://placeimg.com/800/400/nature" alt="" />) : (<p>Photo Hidden</p>) }

        </div>
      );
    }
}

function toggles() {
  return (
    <div className="toggle_contain">
      <Toggle />
    </div>
  );
}

export default toggles;
