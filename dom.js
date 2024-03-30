//html dom methods...
/*
html dom methods(functions)->action which can be performed on HTML elements
html dom properties -> values of HTML elements that can be set or changed

we change the properties(attributes) of html elements using DOM methods..
In DOM-> 
HTML elements-> Objects

document object is the owner of all other object in the web page.
the whole web page is inside a javascript object named->document
now we can control the whole web page accessing the object's properties and methods

## finding HTML Elements.....
Method ----	Description
document.getElementById(id)	          ---- Find an element by element id
document.getElementsByTagName(name)	  ---- Find elements by tag name
document.getElementsByClassName(name) ---- Find elements by class name// not an array -> collection object 
document.querySelector(.classname/#id) -- Find elements by css selector // not an array-> collection object

##changing HTML Elements

Property ---- Description
element.innerHTML=new html content       ---- change inner HTML of an element
element.attribute= newValue              ---- change attribue value
element.style.property=newStyle          ---- change style of HTML element

*/

// const element=document.getElementById("demo");
// element.innerHTML="ekhun theke khela suru hobe"
// console.dir(element)

// // get the first element with .anchor css selector aka class name
// const firstLink=document.querySelector('.anchor');

// //get all the elements with .anchor css selector aka class name
// const links=document.querySelectorAll('.anchor');//


function validate(){
    const form=document.forms["myForm"]
    console.dir(form['fname'].value)
    if(form['fname'].value===''){
        alert("name must be here")
        
    }
    return false;
}

const p=document.querySelector('#test')
p.style.color='red'
p.style.fontSize='10px'
p.style.textAlign='center'

const animate=document.querySelector('#animate');
const container=document.querySelector('#container')
function Animate(){
    
    let pos=0;
    const id=setInterval(play,5);
    function play(){
        if(pos<350){
            pos++
            animate.style.color='white'
            animate.style.top=pos+'px'
            animate.style.left=pos+'px'
        }else{
            clearInterval(id)
        }
    }
}

const links=document.querySelectorAll('.anchor')

links[0].addEventListener('mouseover',()=>{
    links[1].innerHTML='Life';
})
links[0].addEventListener('mouseout',()=>{
    links[1].innerHTML='jannat'
})

links[1].addEventListener('mouseover',()=>{
    container.style.color='blue'
})


// event propagation -->Event bubbling and Event capturing 
// if third parameter is false(default)->bubbling->insider 
//                 element's event will fire first then will proceed to outside

// if third parameter is true->capturing->
//                                     outsider element's event will fire first 
//                                     then proceed inside..
animate.addEventListener('click',()=>{console.log("animate clicked!!")},true)
container.addEventListener('click',()=>{console.log("container clicked!!!")},true)


/*
  ------ Node relationship ------
  parentNode
  childNodes[childnumber]
  firstChild
  lastChild
  nextSibling
  previousSibling

  access the html property of that node--> nodeValue
  read the node name(p/div/text..) --> nodeName
  node type                       --> nodeType

  document.body->return the body of the html 
  document.documentElement->return the whole document 

  -------- Creating/updating/removing HTML Elemets(Nodes)--------

  -create HTML tag/elemet/node--> document.createElement('tagName')-> 'p'/'a'/'div'
  -create a text for the element--> document.createTextNode("text for the node")
  -push the text into the element-> appendChild(nodename) -> append the new element as the last child
  -inset before a specific element->insertBefore(a,b)-> b is existing, a will be inserted before b
  -remove an html element -> element.remove()
                          -> parent.removeChild(child)//not child number.. need to get the child element
  -replace a child element -> parent.replaceChild(child)//not child number.. need to get the child element


  ------ NodeList vs HTMLCollection ---------

  -const collection=document.getElementsByTagName('p')
  -collection becomes an array-like list of HTML 'p' elements
  -elements in the collection can be accessed by index number--> collection[0]->gives first p tag
  -lenght property-> collection.length-> gives the number of elements in the collection
  - browser returns HTMLCollection for ->(getElementsByClassName(),getElementsByTagName())

  -NodeList->object->list(collection) of nodes extracted from a document
  -browser return NodeList object for ->(childNodes,QuerySelectorAll()) property.
  -length property-> nodelist.length

  -HTMLCollection can be accessed by->id,name,index number
  -NodeList can only be accessed by->index number

  -HTMLCollection is always live-> if we add a <li> element to a list in the dom, collection will also change
  -NodeList will not change.

*/

const testValue=test.childNodes[0].nodeValue;
// test.firstChild.nodeValue
console.log(`this is ${testValue}`)


const div1=document.querySelector('#div1');

const para=document.createElement("p")
const node=document.createTextNode("testing create Element")

para.appendChild(node);
div1.appendChild(para);// insert as the last child node

// insert before a specific child

const thirdChild=div1.childNodes[2];
// paragraph will be added before thirdchild
div1.insertBefore(para,thirdChild);

// testing HTML collection

const collection=document.querySelector('#collection')

const pcollection=collection.getElementsByTagName('p');

console.log(`total number of p is ${pcollection.length}`)

let id=0
for(const x of pcollection){
    setTimeout(()=>{
        const text=document.createTextNode(`i'm ${id++} paragraph`)
        x.appendChild(text)
        x.style.color='red'
    },5000)
}