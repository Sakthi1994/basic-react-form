import React, {Component} from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

const TableBody = props => {

    const rows = props.characterData.map((map, index) => {
        return (
          <tr key={index}>
            <td>{map.name}</td>
            <td>{map.job}</td>
            <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
          </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody
                  characterData={characterData}
                  removeCharacter={removeCharacter}
                />
            </table>
        );
    }
}

export default Table;
