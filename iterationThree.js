// Time complexity: O(n)
// Space complexity: O(1)

function deliveryIdTracker(deliveryIds) {

    let uniqueDeliveryId = 0;

    deliveryIds.forEach((deliveryId) => {
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}

console.log(deliveryIdTracker([1, 3, 2, 1, 2, 3, 4, 5, 5]));