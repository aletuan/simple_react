const contentNode = document.getElementById("content");

/*
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const message = continents.map(c => `Hello ${c}!`).join(',');

var component = <h1>{message}</h1>;
*/

class IssueList extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue list</div>
        );
    }
}

//ReactDOM.render(component, componentNode);
ReactDOM.render(<IssueList />, contentNode);
