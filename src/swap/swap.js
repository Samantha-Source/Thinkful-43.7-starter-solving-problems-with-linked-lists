/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */
function swap(list, x, y) {
    //accepts list - a linked list
        // x - a node in the linked list
        // y - a node in the linked list
    
    // if the list is empty then
    if(!list.head){
        //return the list
        return list;
    } 

    //declare a variable x_next and initalize it to the next pointer of x
    let x_next = x.next;
    //declare a variable x_prev and initialize it to the previuos node to x, null if x is the head
    let x_prev = list.findWithPrevious((node)=> node === x)[1];
    //declare a variable y_prev and intitialize it to the previous node to y, null if y is the head
    let y_prev = list.findWithPrevious((node) => node === y)[1];

    //set the next pointer of x to the next pointer of y
    x.next = y.next;
    //set the next pointer of y to x_next
    y.next = x_next;

    //if x is not the head of the list then 
    if(x_prev){
        //set next pointer of x_prev to y
        x_prev.next = y
        //else
    } else {
        //set head to y
        list.head = y;
    }
        

    //if y is not the head of the list then
    if(y_prev){
        //set next pointer of y_prev to x
        y_prev.next = x;
        //else
        } else {
        //set head to x
        list.head = x;
    }
    //return the list
    return list;
}

module.exports = swap;
