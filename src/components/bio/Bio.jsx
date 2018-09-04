import React, { Component } from 'react';
import Connect from './connect/Connect';
import { withStyles } from '@material-ui/core/styles';
import Media from 'react-media';

const styles = {
  root: {
    color: 'red'
  },
  bioGridContainer: {
    display: 'grid',
    gridTemplateColumns: '1.3fr 1fr'
  },
  imageGridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr'
  }
};

class Bio extends Component {
  render() {
    return (
      <div>
        <h1>Adrianne H Lee</h1>
        <div className={this.props.classes.bioGridContainer}>
          <div className="bio">
            <p>
              Hello, welcome to my simple-dimple website. I’m a user experience
              designer and researcher in Canada currently  working to improving
              the value of Government of Canada’s  digital products.
            </p>
            <p>
              Here are some key things that make me excited to do the work  I do
              - solving the right problems, developing candid and meaningful
              relationships with my coworkers, and learning everyday.
            </p>
            <p>
              I am flexible and proficient with my tools. My favourites are
               online and collaborative (E.g. G Suite, Lucidchart), reliable and
              comprehensive (E.g. Adobe’s Creative Suite), and easy to map
              information on (E.g. Excel).
            </p>
            <p>
              I work with Jumping Elephants, a design consultancy in Ottawa. I
              graduated from the Industrial Design, Bachelor of Design program
              from OCAD University. For my full résumé, please see here.
            </p>
          </div>
          <Media
            query="(min-width: 599px)"
            render={() => (
              // tablet & desktop only
              <div className={this.props.classes.imageGridContainer}>
                <div className="spacer" />
                <img
                  src="https://picsum.photos/300/300"
                  alt="Adrianne H. Lee"
                />
                <Connect />
                <div className="spacer" />
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Bio);
