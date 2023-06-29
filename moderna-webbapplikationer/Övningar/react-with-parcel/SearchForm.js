import React from "react";
import CompareButton from "./CompareButton.js";
import SearchField from "./SearchField.js";

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city1: "",
            city2: ""
        }
    }

    render() {
        const town1 = this.props.town1;
        const town2 = this.props.town2;

        return (<form>
            <label>
                Stad 1
                <input
                    name="city1"
                    placeholder={town1[0].name} />
            </label>
            <label>
                Stad 2
                <input
                    name="city2"
                    placeholder={town2[0].name} />
            </label>
            <input type="submit" value="Jämför" />
        </form>)
    }
}

{/* <SearchField city={town1[0].name} />
            <SearchField city={town2[0].name} />
            <CompareButton />  */}