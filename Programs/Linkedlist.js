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
        addElementE(value,index){
            this.count=1
            var temp = this.rootNode
            if(index == 1){
                this.rootNode = new Node(value)
                this.rootNode.nextNode=temp
            }
            else{
            while(this.count!=index-1 && temp.nextNode!=null){
                temp = temp.nextNode;
                this.count++;
            }
            var temp1 = temp.nextNode
            temp.nextNode = new Node(value);
            temp = temp.nextNode
            temp.nextNode = temp1
        }
        }
        removeElement(index){
            this.count=1;
            var temp = this.rootNode
            if(index == 1){
                this.rootNode = temp.nextNode
            }
            else {
                while(this.count!=index-1 && temp.nextNode!=null){
                temp = temp.nextNode
                this.count++
            }
            var pre = temp
            temp = temp.nextNode
            pre.nextNode = temp.nextNode
        }        
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
list.addElementE(10,4)
list.addElementE(33,4)
list.removeElement(4)
list.removeElement(5)
list.printElements();