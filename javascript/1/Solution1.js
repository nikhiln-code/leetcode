/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    if(nums.size == 0){
        return 0
    }

    for(var i = 0; i< nums.length; i++){
        for(var j =0; j<nums.length; j++){
            if((num[i] + num[j]) === target){
                return {i, j};
            }
        }
    }
   
};