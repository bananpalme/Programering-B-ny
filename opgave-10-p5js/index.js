function setup(){
    createCanvas(windowWidth, windowHeight)
    background('mediumaquamarine')
    
}

function draw(){
    let red = map(mouseX, 0, windowWidth, 0, 255)

    let green = map(mouseY, 0, windowHeight, 0, 255)

    select('#info').html(mouseX + ', ' + mouseY)
    fill(red, 170, 170)
    stroke(255, 255, 100)
    square(mouseX - 10, mouseY, 10 )
    stroke(255, 255, 100)
    square(mouseX - 10, mouseY - 10, 10 )
    square(mouseX, mouseY - 10, 10 )
    square(mouseX - 20, mouseY - 10, 10 )
    square(mouseX - 20, mouseY - 20, 10 )
    square(mouseX - 10, mouseY - 20, 10 )
    square(mouseX, mouseY - 20, 10 )
    square(mouseX - 30, mouseY - 20, 10 )
    square(mouseX + 10, mouseY - 20, 10 )
    square(mouseX - 20, mouseY - 30, 10 )
    square(mouseX - 10, mouseY - 30, 10 )
    square(mouseX, mouseY - 30, 10 )
    square(mouseX - 30, mouseY - 30, 10 )
    square(mouseX + 10, mouseY - 30, 10 )
    square(mouseX - 40, mouseY - 30, 10 )
    square(mouseX + 20, mouseY - 30, 10 )
    square(mouseX - 20, mouseY - 40, 10 )
    square(mouseX - 10, mouseY - 40, 10 )
    square(mouseX, mouseY - 40, 10 )
    square(mouseX - 30, mouseY - 40, 10 )
    square(mouseX + 10, mouseY - 40, 10 )
    square(mouseX - 40, mouseY - 40, 10 )
    square(mouseX + 20, mouseY - 40, 10 )
    square(mouseX + 10, mouseY - 50, 10 )
    square(mouseX, mouseY - 50, 10 )
    square(mouseX - 20, mouseY - 50, 10 )
    square(mouseX - 30, mouseY - 50, 10 )
    stroke(red, green, 170)
    noFill()
    ellipse(mouseX, mouseY, frameCount % 60 * 2.5)
    
}
