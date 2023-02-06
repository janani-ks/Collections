class Node{
    data;
    nextNode;
    constructor(value){
        this.data= value
    }
}
class Stack {
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
        var temp = this.rootNode;
        var pre = null
        if(this.rootNode.nextNode==null){
            this.rootNode = null
        }
        else{
            while(temp.nextNode != null){
                pre = temp
                temp = temp.nextNode;
            }
        pre.nextNode = null;
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

var stack = new Stack();
stack.addElement(12);
stack.addElement(4);
stack.addElement(10);
stack.removeElement();
//stack.removeElement();
//stack.removeElement();
stack.printElements();