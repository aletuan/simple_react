const contentNode = document.getElementById("content");

/*
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const message = continents.map(c => `Hello ${c}!`).join(',');

var component = <h1>{message}</h1>;
*/

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Filter</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the table of Issues</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the Issue Add entry form</div>
        );
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

//ReactDOM.render(component, componentNode);
ReactDOM.render(<IssueList />, contentNode);
