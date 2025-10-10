
const getStoreApp =()=>{
    const appData = localStorage.getItem('App');
    if(appData){
        const storedData =JSON.parse(appData)
        return storedData
    }
    else{
        return []
    }
}
export const removeFromLS = (id) => {
  const stored = localStorage.getItem("App");
  if (stored) {
    const parsed = JSON.parse(stored); 
    const updated = parsed.filter(itemId => itemId !== id); 
    localStorage.setItem("App", JSON.stringify(updated)); 
  }
};


const addToLS =(id)=>{
    const storeApp = getStoreApp()
    if(storeApp.includes(id)){
        
        alert('already installed')

    }
    else{
        storeApp.push(id)
        const AppData =JSON.stringify(storeApp)
        localStorage.setItem("App",AppData)
    }
}
export {addToLS,getStoreApp}