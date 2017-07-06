import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export default class Hello extends React.Component<any, any> {

  getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
  }

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + this.getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}