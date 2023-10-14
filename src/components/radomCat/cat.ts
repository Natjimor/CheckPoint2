
export enum cat_props {
    "image"="image",
    "fact"="fact"
}
class Cat extends HTMLElement {
    fact?: string;
    image?: string;
    
    static get observedAttributes(){
      return   
    }
    attributeChangedCallback(propName:cat_props, _:string| undefined, newValue: string| undefined ){
        switch (propName) {
            case cat_props.fact:
                this.fact = newValue
                break;

            case cat_props.image:
                this.image = newValue
                break;
        
            default:
                break;
        }
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML=`
            <img src="${this.image}" alt="">
            <p>${this.fact}</p>
            `
        }
    }
}

customElements.define('cat-container', Cat)