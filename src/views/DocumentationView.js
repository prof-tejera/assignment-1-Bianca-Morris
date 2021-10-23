import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Input from "../components/generic/Input";
import DisplayTime from "../components/generic/DisplayTime";
import DisplayRounds from "../components/generic/DisplayRounds";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "'medium'",
              },
            ]}
          />
          <DocumentComponent
            title="Button "
            component={<Button onClick={() => alert('Button pressed!')} />}
            propDocs={[
              {
                prop: "type",
                description: "HTML attribute type of the button ('button' | 'submit' | 'reset')",
                type: "string",
                defaultValue: "'button'",
              },
              {
                prop: "disabled",
                description: "Is the button clickable?",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "onClick",
                description: "Function defining what to do when button is clicked",
                type: "function",
                defaultValue: "undefined",
              },
              {
                prop: "variant",
                description: "One of: ('primary' | 'secondary' | 'success' | 'danger' | 'warning')",
                type: "string",
                defaultValue: "'primary'",
              },
              {
                prop: "children",
                description: "What to render inside of the button",
                type: "node OR array of nodes",
                defaultValue: "'Click Me'",
              },
            ]}
          />
          <DocumentComponent
            title="Input "
            component={<Input name="docInput" onChange={(e) => console.log(e.value)} />}
            propDocs={[
              {
                prop: "type",
                description: "HTML attribute type of the input ('text' | 'number' | 'submit')",
                type: "string",
                defaultValue: "'text'",
              },
              {
                prop: "placeholder",
                description: "Placeholder text for the input",
                type: "string",
                defaultValue: "'Enter text here...'"
              },
              {
                prop: "disabled",
                description: "Is is possible to enter text?",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "onChange",
                description: "Function defining what to do when text is updated",
                type: "function",
                defaultValue: "undefined",
              },
              {
                prop: "name",
                description: "An identifier for this input",
                type: "string",
                defaultValue: "undefined",
              },
              {
                prop: "value",
                description: "Current value of the input (should match 'type' prop)",
                type: "string or number",
                defaultValue: "''",
              },
            ]}
          />
          <DocumentComponent
            title="Display Time "
            component={<DisplayTime hours={0} minutes={0} seconds={0} />}
            propDocs={[
              {
                prop: "hours",
                description: "A numeric representation of hours; max 2 digits",
                type: "number",
                defaultValue: "0",
              },
              {
                prop: "minutes",
                description: "A numeric representation of minutes; max 2 digits",
                type: "number",
                defaultValue: "0",
              },
              {
                prop: "seconds",
                description: "A numeric representation of seconds; max 2 digits",
                type: "number",
                defaultValue: "0",
              },
            ]}
          />
           <DocumentComponent
            title="Display Rounds "
            component={<DisplayRounds />}
            propDocs={[
              {        
                prop: "currRound",
                description: "The current round",
                type: "number",
                defaultValue: "0",
              },
              {
                prop: "totalRounds",
                description: "The total number of rounds selected",
                type: "number",
                defaultValue: "0"
              },
              {
                prop: "isRest",
                description: "Is this a rest interval?",
                type: "boolean",
                defaultValue: "false",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
