
import "./App.css";
import contactsArr from './contacts.json'
import { useState } from 'react'


function App() {
  const [contacts, setContacts] = useState(contactsArr.splice(0, 5))

  return (

    <table className="App">
      <tr>
        <th> Picture </th>
        <th> Name </th>
        <th> Popularity </th>
        <th> Won Oscar </th>
        <th> Won Emmy </th>
      </tr>

      {
        contacts.map((elm, index) => {

          return (
            <tr key={index}>
              <td><img src={elm.pictureUrl} style={{ width: 200 }} /></td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              <td>{elm.wonOscar && <p>🏆</p>}</td>
              <td>{elm.wonEmmy && <p>🏆</p>} </td>
            </tr>
          )
        })
      }

    </table>

  )
}
export default App;
