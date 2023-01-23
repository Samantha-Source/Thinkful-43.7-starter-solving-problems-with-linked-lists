const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEnd(list) {
    //if the list is empty return null
    if (!list.head) {
        return null;
    }

    //declare a variable named pointer1 and initialize it to the head of the list
    let pointer1 = list.head;
    //declare a variable named i and initialize it to 0
    let i = 0;
    //while i is less than 2 and the next pointer of pointer1 is not null do
    while(i < 2 && pointer1.next) {
        //set pointer1 to its next pointer
        pointer1 = pointer1.next;
        //increment i
        i++;
    }

    //if i is less than 2 return null
    if(i < 2){
        return null;
    }
        
    //declare a variable names pointer 2 and initilize it to the head of the list 
    let pointer2 = list.head;    
    
    //while the next pointer of pointer1 is not null do
    while(pointer1.next){
        //set pointer1 to its next pointer
        pointer1 = pointer1.next;
        //set pointer 2 to its next pointer
        pointer2 = pointer2.next;
    }
    //return pointer2
    return pointer2;
}

module.exports = thirdFromEnd;
