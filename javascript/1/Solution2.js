/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    const map = new Map();


    for(index in nums){
        
        var requiredPair  = target - nums[index];

        if(map.has(requiredPair)){
            return [map.get(requiredPair), index];
        }

        map.set(nums[index], index);
    }


   

};