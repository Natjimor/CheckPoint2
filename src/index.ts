import {getCat,getFact} from "./services/getData"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        const factData = await getFact();
        this.render(factData.results)
    }

    render(factData?:string) {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML= "";
            const card = this.ownerDocument.createElement("div")
            const button = this.ownerDocument.createElement('button');
            button.textContent = "Change"
            card.appendChild(button)
            button.addEventListener("click",async (cat)=>
            const catData = await getCat(cat);
            const cats = catData.this.ownerDocument.createElement("cat-container")
            

            )


            this.shadowRoot?.appendChild(card);
        }
        
    }
}

customElements.define('app-container', AppContainer)