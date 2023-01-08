import { Component } from "react";
import User from "./User";
import Users from "./Users";

class App extends Component {
    state = {
        users: [
            {
                ime: "Branko",
                prezime: "Branković",
                dob: 32,
            },
            {
                ime: "Janko",
                prezime: "Janković",
                dob: 42,
            },
            {
                ime: "Stanko",
                prezime: "Stanković",
                dob: 52,
            },
        ],

        tekst: "Ovo su korisnici: ",
    };

    render() {
        const { users } = this.state;
        return (
            <div>
              <h1>{this.state.tekst}</h1>
                <Users users={users} />
                
            </div>
        );
    }
}
export default App;
