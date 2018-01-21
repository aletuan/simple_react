const contentNode = document.getElementById("content");

/*
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const message = continents.map(c => `Hello ${c}!`).join(',');

var component = <h1>{message}</h1>;
*/

const issues = [
    {
        id: 1, 
        status: 'Open', 
        owner: 'Anh',
        created: new Date('2018-01-21'), 
        effort: 5, 
        completionDate: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, 
        status: 'Assigned', 
        owner: 'Tien',
        created: new Date('2018-01-19'), 
        effort: 30000, 
        completionDate: new Date('2020-01-01'),
        title: 'Missing bottom border on panel',
    },
];


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
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
        return (            
            <table style={{borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th style={borderStyle}>Id</th>
                        <th style={borderStyle}>Status</th>
                        <th style={borderStyle}>Owner</th>
                        <th style={borderStyle}>Created</th>
                        <th style={borderStyle}>Effort</th>
                        <th style={borderStyle}>Completion Date</th>
                        <th style={borderStyle}>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderStyle = {border: "1px solid silver", padding: 4};
        const issue = this.props.issue;

        return (
            <tr>
                <td style={borderStyle}>{issue.id}</td>
                <td style={borderStyle}>{issue.status}</td>
                <td style={borderStyle}>{issue.owner}</td>
                <td style={borderStyle}>{issue.created.toDateString()}</td>
                <td style={borderStyle}>{issue.effort}</td>
                <td style={borderStyle}>{issue.completionDate ? issue.completionDate.toString(): ''}</td>
                <td style={borderStyle}>{issue.title}</td>
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
                <IssueTable issues={issues}/>
                <hr />
                <IssueAdd />
            </div>
        );
    }
}

//ReactDOM.render(component, componentNode);
ReactDOM.render(<IssueList />, contentNode);
