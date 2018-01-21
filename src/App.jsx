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
        const borderStyle = {border: "1px solid silver", padding: 6};
        return (
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderStyle}>Id</th>
                        <th style={borderStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_id={1}>Error console when click Add button</IssueRow>
                    <IssueRow issue_id={2}>Missing bottom border on panel</IssueRow>
                    <IssueRow issue_id={3}>Wrong title content</IssueRow>
                    <IssueRow issue_id={4}>Wrong title format</IssueRow>
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 4};

        return (
            <tr>
                <td style={borderStyle}>{this.props.issue_id}</td>
                <td style={borderStyle}>{this.props.children}</td>
            </tr>
        )
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
