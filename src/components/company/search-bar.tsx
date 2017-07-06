import * as React from 'react';

export interface Props {
  name: string;
}

export default class SearchBar extends React.Component<any, any> {
  render() {

    return (
        <fieldset>       
              <input type="text"/>                             
              <button>Go!</button>
        </fieldset>
    );
  }
}

