import React from 'react';
import { Card } from 'react-bootstrap';
import './App.css';

const Title = (props) =>
  <h1 className={`title ` + props.colorName}>
    {props.children}
  </h1>
;

const Subtitle = (props) =>
  <div>{props.children}</div>
;

const MyCard = (props) =>
  <Card>
    <Card.Body>
      <Card.Title>{props.title || "Titre de carte"}</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo in augue vulputate laoreet. Nullam quam ligula, elementum id sodales sit amet, tempus in neque. Vestibulum et facilisis nulla. Aenean eget tellus sapien. Morbi eget libero convallis, pretium nibh at, aliquet magna. Cras in tincidunt est. Pellentesque condimentum diam lacus. Etiam viverra lacus at tellus congue, sit amet bibendum lectus egestas. Mauris lacus ligula, varius vitae lorem eu, eleifend viverra mi. Vestibulum lobortis laoreet libero, in facilisis ipsum laoreet id. Sed luctus volutpat placerat. Pellentesque luctus porta velit vel malesuada. Nullam at velit vehicula, semper est ut, ornare odio. Etiam urna massa, congue ac mauris eu, viverra vulputate lectus. Nulla venenatis sit amet orci a ultrices.
      </Card.Text>
    </Card.Body>
  </Card>
;

function App() {
  return (
    <div className="App">
      <Title colorName="red">
        HELLO les dev !
      </Title>
      <Subtitle>
        <p>
          Comment allez-vous <span>aujourd'hui</span>?
        </p>
      </Subtitle>

      <div class="card-list">
        <MyCard title="Bonjour les amis!" />
        <MyCard title="J'aime faiiiiim" />
        <MyCard title="C'est quand les vacances ?" />
        <MyCard title="Quand est-ce qu'on mange ?" />
        <MyCard />
      </div>
    </div>
  );
}

export default App;