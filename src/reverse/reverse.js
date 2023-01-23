const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
    // accepts list - a linked list, potentially empty, to be reversed

    //declare a variable named reversedList and initialize it it to an empty LinkedList
    let reversedList = new LinkedList();
    //declare a variable node initilzed to the head of the list
    let node = list.head;
    //while the node pointer is not null do
    while (node) {
        //insert the node value at the head of the reversedList
        reversedList.insertAtHead(node.value);
        //move the node pointer along to the next node
        node = node.next;
    }
    //return the reversedList
    return reversedList;

}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    if(list.length <= 1) {
        return list;
    }

    const head = list.head.value;
    list.remove((node, index) => index === 0);
    const reversedList = reverseRecursive(list);
    reversedList.insert(head);
    return reversedList;
}

module.exports = { reverseIterative, reverseRecursive };
