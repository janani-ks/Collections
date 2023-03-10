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
            let temp = this.rootNode;
            while(temp.nextNode != null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }
    removeElement(){
        let temp = this.rootNode
        this.rootNode = temp.nextNode
    }

    printElements(){
        let temp = this.rootNode;
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

let queue = new Queue(); // u
queue.addElement(12);
queue.addElement(4);
queue.addElement(10);
queue.addElement(12);
queue.removeElement();
queue.removeElement();
queue.printElements();
