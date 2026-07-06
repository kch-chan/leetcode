/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const searchNumber = target - nums[i];

        if (map.has(searchNumber)) {
            return [map.get(searchNumber), i];
        }

        map.set(nums[i], i);
    }
};
