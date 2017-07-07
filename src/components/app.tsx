import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-reducer';
import reducers from '../shared/store/reducers/search-reducer';


let store = createStore(reducers);

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export default class App extends React.Component<any, {}> {
   public render() {
       return (
         <Provider store={store}>
            <div className="container-fluid">Hello!</div>
         </Provider>
       );
  }
}
