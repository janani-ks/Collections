class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Queue {
    addElement(value){
        if(this.rootNode == null){
            this.rootNode= new Node(value)
        }else{
            var temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }
    removeElement(){
        var temp = this.rootNode
        this.rootNode = temp.nextNode
    }

    printElements(){
        var temp = this.rootNode;
        if(temp == null){
            console.log("Is empty!")
        }else{
        while(temp != null ){
            console.log(temp.data)
            temp = temp.nextNode;
        }
    }
    }
}

var queue = new Queue(); // u
queue.addElement(12);
queue.addElement(4);
queue.addElement(10);
queue.addElement(12);
queue.removeElement();
queue.removeElement();
queue.printElements();