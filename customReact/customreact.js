function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type) //create one dom element 
    domElement.innerHTML = reactElement.children //add the children of the reactelement
    domElement.setAttribute('href', reactElement.props.href) //setattribute to dom element
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement); //append the dom element ot container
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}
    
const reactElement = {
    type: 'a', //define the type of the element
    props: { 
        href: "https://google.com",
        target: '_blank' 
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector("#root")     

customRender(reactElement, mainContainer)
