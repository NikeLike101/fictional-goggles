

// localStorage.setItem('key', 'hello')
// localStorage.setItem('key', 'privet')
// localStorage.removeItem('secret')
// alert(localStorage.getItem('secret'))

// sessionStorage.setItem('prive', 'wqerty')


const newArray = localStorage.getItem('arr')


// 60000 --  1 min
// 1000 -- 1 sec


const setLocalStorage = (key, value, timeOfLife) => {
    if (value === undefined) return
    const date = new Date()
    const newObject = { data: value }
    if (timeOfLife !== undefined) {
        newObject.timeToExpire = date.getTime() + timeOfLife
    }
    localStorage.setItem(key, JSON.stringify(newObject))
}
// makeHTML()

const getLocalStorage = (key) => {
    const info = JSON.parse(localStorage.getItem(key))
    if(info === null) return 'no data'
    
    if (info?.timeToExpire && info.timeToExpire <= Date.now()) {
        localStorage.removeItem(key)
        return 'expired'
    }
    console.log(info);
    return info.data
}


const modifyArray = (arr) => {

        if(arr.length > 4) STORAGE_KEY = '123' 
}

