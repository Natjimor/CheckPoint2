export const getFact = async () => {
    try {
        const fact = await fetch("https://catfact.ninja/fact").then(res=>res.json())
        console.log(fact)
        return fact

    } catch (error) {
       console.log(error) 
    }
}
export const getCat = async (text:string) => {
    try {
        const cat = await fetch("https://cataas.com/cat/says/"+`${text}`).then(res=>res.json())
        console.log(cat)
        return cat

    } catch (error) {
       console.log(error) 
    }
}
