// Time complexity: O(n^2)
// Space complexity: O(1)

function deliveryIdTracker(deliveryIds){

    let isDuplicateFound = false;

    for(let i = 0; i < deliveryIds.length; i++){
        for(let j = 0; j < deliveryIds.length; j++){
            
            if (i === j){
                continue;
            } else if (deliveryIds[i] === deliveryIds[j]){
                isDuplicateFound = true;
                break;
            } else {
                isDuplicateFound = false;
            }
        }

        if(!isDuplicateFound){
            return deliveryIds[i];
        }
    }

    return;
}

console.log(deliveryIdTracker([1, 2, 3, 3, 2, 1, 4]));