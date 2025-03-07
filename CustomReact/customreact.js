function customRender(reactElement, container){
    const domELement = document.createElement(reactElement.type);
    // domELement.innerHTML = reactElement.children;
    // domELement.setAttribute('href', reactElement.props.href);
    // domELement.setAttribute('target', reactElement.target); 
    // container.appendChild(domElement);
    const domELement2 = document.createElement(reactElement.type);
    domELement2.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domELement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domELement2);

}
const reactElement = {
    type:'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);