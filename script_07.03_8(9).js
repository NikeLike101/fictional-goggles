document.body.outerHTML = `<body>
<div class="container">
  <p class="text">hello</p>
  <div class="button">click me</div>
</div>
<div class="painting">
  asdasd
  <div class="big__size">hello2</div>
  <section class="giga-class" id="super-id">HELLLO</section>
  <section style="background: #ff0" class="giga-class" id="super-id2">
    HELLLO
  </section>
  <section class="giga-class" id="super-id3">HELO</section>
  <section class="giga-class" id="super-id4">HEL2LLO</section>
  <section class="giga-class" id="super-id5">HELL1LO</section>
  <section class="giga-class" id="super-id6">HELLL4O</section>
  <section class="giga-class" id="super-id7">HELLL5O</section>
  <section class="giga-class" id="super-id8">HELLL00O</section>
</div>

<!-- <script src="script_06.03_7.js"></script> -->

<script src="script_07.03_8(9).js"></script>

<!-- <script src="script_29.02_6.js"></script> -->
<!-- <script src="script_22.02_4.js"></script> -->
<!-- <script src="script_27.02_5.js"></script> -->
<!-- <script src="script_20.02_3.js"></script>  -->
<!-- <script src="script.js"> -->
</body>`

const nodes = document.body.querySelectorAll('.giga-class')
const someString = 'clicked'
const painting = document.body.querySelector('.painting')
const button = document.body.querySelector('.button')
const nodesValues = Array.from(nodes).map(node => node.innerHTML)
const circles = []
console.log(painting);




const entireCloneNode = (node) => {
    const newNode = node.cloneNode()
    newNode.innerHTML = node.innerHTML
    return newNode
}
const handleClickOnNode = (node, index) => {
    nodes.forEach((nodeFromNodes, indexFromNodes) => {
        nodeFromNodes.classList.remove('active')
        // nodeFromNodes.innerHTML = nodesValues[indexFromNodes]
    })

    // node.setAttribute('style', 'background: #0ff;')
    node.classList.toggle('active')
    // node.innerHTML = `<span><img style="height: 15px; width: 15px;" src="https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"/>${someString}</span>`
    const img = document.createElement('img')
    img.src = "https://th.bing.com/th/id/OIG.MxQxUggA0RKmKdTjwAqw"   
    img.setAttribute('style', "height: 15px; width: 15px;")
    
    node.prepend(entireCloneNode(button))
}

nodes.forEach((node, index) => node.addEventListener
    ('click', () => {
        handleClickOnNode(node, index)
    }))



button.addEventListener('click', () => {
    // ...
    circles.forEach(circle => {

        const randomRed = Math.trunc(Math.random() * 256)
        const randomGreen = Math.trunc(Math.random() * 256)
        const randomBlue = Math.trunc(Math.random() * 256)

        const newStyles = `
            left: ${circle.x}px;
            top: ${circle.y}px;
            width: ${circle.size}px;
            height: ${circle.size}px;
            background: rgb(${randomRed}, ${randomGreen}, ${randomBlue});
        `
        circle.element.setAttribute('style', newStyles)



    })
})


window.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    if (e.target.classList.contains('button')) return
    const randomSize = Math.trunc(Math.random()*40+20)


    const circle = document.createElement('div')
circle.tagName = 'div'
circle.classList.add('circle')
    document.body.append(circle)
    circle.setAttribute('style',
    `width: ${randomSize}px;
    height: ${randomSize}px;
    left: ${e.clientX}px;
top: ${e.clientY}px;`)
   
    circles.push({ element: circle, x: e.clientX, y: e.clientY, size: randomSize })
})

// fillScreenByDots = (count) => {}
