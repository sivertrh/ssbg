function generateSide(height, width, depth, thickness) {
    return '     <svg width="100" height="100"> <path d="m 15 10 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -5 " fill="transparent" stroke="black"/></svg>'
}

function generateFront(height, width, depth, thickness) {
    return '     <svg width="100" height="100"> <path d="m 15 10 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -5 " fill="transparent" stroke="black"/></svg>'

}

function generateBottom (height, width, depth, thickness) {
    return '     <svg width="100" height="100"> <path d="m 15 10 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -5 " fill="transparent" stroke="black"/></svg>'

}

function generateBack(height, width, depth, thickness) {
    return '     <svg width="100" height="100"> <path d="m 15 10 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 10 v -5 h 10 v 5 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 10 h 5 v 10 h -5 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -10 v 5 h -10 v -5 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -10 h -5 v -10 h 5 v -5 " fill="transparent" stroke="black"/></svg>'

}

    return '    <svg width="200" height="200"><path d="m 120 190 v-70 h -37 v 25 h-20 v -55.5 h 40 v -30 h -40 v -20 h 77" fill="transparent" stroke="black"/></svg>'
}

function generateBox(height, width, depth, thickness){
    var html = "";
    html += generateSide(height, width, depth, thickness);
    html += generateFront(height, width, depth, thickness);
    html += generateBottom(height, width, depth, thickness);
    html += generateBack(height, width, depth, thickness);
    html += generateCorner(height,depth,thickness);
    return html;
}

height = 20;
width = 40;
depth = 20;
thickness = 0.5;


document.getElementById("content").innerHTML = generateBox(height, width, depth, thickness);