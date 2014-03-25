if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++){
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i,1);
                i -= 1;
                arr.length -= 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        new_array = [];
        for (var i = 0; i < arr1.length; i++) {
            new_array.push(arr1[i]);
        }
        for (var n = 0; n < arr2.length; n++) {
            new_array.push(arr2[n]);
        }
        return new_array;
    },

    insert : function(arr, item, index) {
        for (var i = 0; i < arr.length; i++) {
            if (i === index) {
                arr.splice(i,0,item);
            }
        }
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var obj = {};
        var dups = [];
        for (var i = 0; i < arr.length; i++) {
            if (typeof obj[arr[i]] !== "undefined") {
                obj[arr[i]] += 1;
            }
            else {
                obj[arr[i]] = 0;
            }
        }
        for (var item in obj) {
            if (obj.hasOwnProperty(item)) {
                if (obj[item] > 0) {
                    dups.push(item);
                }
            }
        }
        return dups;
    },

    square : function(arr) {
        var squared = [];
        for (var i = 0; i < arr.length; i++) {
            squared.push(arr[i] * arr[i]);
        }
        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var solution = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                solution.push(i);
            }
        }
        return solution;
    }
  };
});
