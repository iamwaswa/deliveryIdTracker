// Time complexity: O(n)
// Space complexity: O(n)

function deliveryIdTracker(deliveryIds) {

    let deliveryIdMap = new Map();

    deliveryIds.forEach((deliveryId) => {

        if(deliveryIdMap.has(deliveryId)){
            deliveryIdMap.set(deliveryId, 2);
        } else {
            deliveryIdMap.set(deliveryId, 1);
        }
    });

    let uniqueId;

    deliveryIdMap.forEach((value, key) => {
        if(value === 1){
            uniqueId = key;
        }
    });

    return uniqueId;
}

console.log(deliveryIdTracker([1, 2, 3, 4, 1, 2, 3, 5]));