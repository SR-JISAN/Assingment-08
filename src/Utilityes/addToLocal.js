
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
export {addToLS}