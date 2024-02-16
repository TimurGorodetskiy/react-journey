function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerText = reactElement.children;

  const props = reactElement.props;

  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      domElement.setAttribute(key, props[key]);
    }
  }

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com/',
    target: '_blank',
  },
  children: 'Click to visit Google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
