// Given a list lst and a number N, create a new list that contains each
// number of lst at most N times without reordering. For example if N = 2, and
// the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2]
// since this would lead to 1 and 2 being in the result 3 times, and then take
// 3, which leads to [1,2,3,1,2,3].

function deleteNth(arr, n) {
    // ...
    if (!arr) {
        return null;
    }
    if (n < 1) {
        return [];
    }

    let result = [];
    let itemCounts = {};
    for (let index = 0; index < arr.length; index++) {
        let item = arr[index];
        let count = itemCounts[item] || 0;
        if (count < n) {
            result.push(item);
            itemCounts[item] = count + 1;
        }
    }

    return result;
}