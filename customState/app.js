const root = document.querySelector('#root');

let counter = 0;
let gap = 1;

function CustomElement(type, props, children) {
  this.type = type;
  this.props = props;
  this.children = children;
}

function render(element, container) {
  const props = element.props;

  const customElement = document.createElement(element.type);
  customElement.innerHTML = element.children;

  if (Object.keys(props).length !== 0) {
    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        customElement.setAttribute(key, props[key]);
      }
    }
  }

  container.appendChild(customElement);
}

function increaseCounter() {
  counter = counter + gap;
  document.querySelector('span').innerText = counter;
}

function decreaseCounter() {
  counter = counter - gap;
  document.querySelector('span').innerText = counter;
}

const customH1 = new CustomElement(
  'h1',
  { style: 'color: red' },
  'My customStateAPP'
);

const customAddButton = new CustomElement(
  'button',
  { class: 'add' },
  'Add value'
);
const customRemoveButton = new CustomElement(
  'button',
  { class: 'remove' },
  'remove value'
);
const customCounter = new CustomElement('span', {}, counter);
const customInput = new CustomElement('input', { type: 'number' });

render(customH1, root);
render(customAddButton, root);
render(customRemoveButton, root);
render(customCounter, root);
render(customInput, root);

document.querySelector('.add').addEventListener('click', increaseCounter);
document.querySelector('.remove').addEventListener('click', decreaseCounter);
document
  .querySelector('input')
  .addEventListener(
    'change',
    (getInputValue = () =>
      (gap = parseFloat(document.querySelector('input').value)))
  );

console.log(counter);
