document.addEventListener('DOMContentLoaded', function() {
    var mouse = { x: 0, y: 0 };
    const colorlist = ["#fe218b","#8000ff","#40ff3d","#ff3d3d","#ff9a00","#ff00f7","#00f7ff"];

    window.onmousemove = function(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        var dot = document.createElement('div');
        dot.className = 'dot';
        dot.innerHTML = '♥';
        
        dot.style.left = mouse.x + 'px'; 
        dot.style.top = mouse.y + 'px'; 
        dot.style.color = colorlist[Math.floor(Math.random() * colorlist.length)];
        document.body.appendChild(dot);
        
        setTimeout(function() {
            document.body.removeChild(dot);
        }, 3000); 
    };
});
