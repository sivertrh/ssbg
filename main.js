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

function generateBox(height, width, depth, thickness){
    var html = "";
    html += generateSide(height, width, depth, thickness);
    html += generateFront(height, width, depth, thickness);
    html += generateBottom(height, width, depth, thickness);
    html += generateBack(height, width, depth, thickness);
    return html;
}

height = 20;
width = 40;
depth = 20;
thickness = 0.5;

document.getElementById("content").innerHTML = generateBox(height, width, depth, thickness);