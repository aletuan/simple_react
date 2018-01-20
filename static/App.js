var componentNode = document.getElementById("content");
var component = React.createElement(
  "h1",
  null,
  "Hello, World ! Hello Again."
);
ReactDOM.render(component, componentNode);