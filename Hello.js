var DisplayList = []
var itemList = []


function additemsToDisplayList() {
    itemList.forEach(function (item) {
        DisplayList.push(item)
    })
}

function deleteItemFromDisplayList(item) {
    var index = DisplayList.indexOf(item)
    DisplayList.splice(index, 1)
}

function deleteItemFromItemList(item) {
    var index = itemList.indexOf(item)
    itemList.splice(index, 1)
}

