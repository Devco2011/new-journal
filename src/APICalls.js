const dataURL = "https://newjournal-eff52-default-rtdb.firebaseio.com"

export const getAll = () => {
    return fetch(`${dataURL}/journalList.json`)
        .then(response => response.json())

}

const testItem = {
    "title": "This is a Test",
    "fbid": "-MNiZJwayQ05wqzOmygb"
}

export const createChristList = (listObj) => {
    return fetch(`${dataURL}/journalList.json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listObj)
    })
}

export const updateChristList = (listObj) => {
    const updateObj = {
        "title": listObj.title
    }
    return fetch(`${dataURL}/journalList/${listObj.fbid}.json`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listObj)
    })
}

export const deleteChristList = (listObj) => {
    return fetch(`${dataURL}/journalList/${listObj.fbid}.json`, {
        method: "DELETE",
    })
}

// updateChristList(testItem);
//createChristList(testItem)
deleteChristList(testItem)