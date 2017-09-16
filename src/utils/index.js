

const formatTime = (time) => new Date(time).toLocaleString()

const isEmptyObj = (obj) => {
    for(let i in obj) {
        return false
    }
    return true
}

const formatDuration = (time) => {
    const min = Math.floor(time / 60)
    const sec = time - min * 60
    return `${min}' ${sec}"` 
}

export {
    formatTime,
    isEmptyObj,
    formatDuration
}