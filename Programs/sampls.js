
class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class LinkedList{
        rootNode = null;
        count = 1
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
        swapadjacent(){
            var temp = this.rootNode.nextNode.nextNode
            var pre = this.rootNode
            this.rootNode = this.rootNode.nextNode
            this.rootNode.nextNode = pre
        while(temp != null&& temp.nextNode != null){
        pre.nextNode = temp.nextNode
        pre = temp
        var next = temp.nextNode.nextNode
        temp.nextNode.nextNode = temp
        temp = next
       }
       pre.nextNode = temp
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
var list = new LinkedList()
list.addElement(1);
list.addElement(2);
list.addElement(3);
list.addElement(5);
list.addElement(10);
list.addElement(7);
list.printElements();
list.swapadjacent();
console.log("\n");
list.printElements();