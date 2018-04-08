function fun1(x) {
    
    var xe = tf.scalar(x).variable();
    
    var power3 = tf.tensor(3).toInt();
    var power4 = tf.tensor(4).toInt();
    
    // Value for draw    
    return ((a.mul(xe.pow(power4)).add(b.mul(xe.pow(power3))).add(c.mul(xe.square())).add(d.mul(xe)).add(e)).dataSync());    
    
}    

function drawCurve() {
    
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;
   
    var axes={}, ctx=canvas.getContext("2d");
    axes.x0 = .5 + .5*canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5*canvas.height; // y0 pixels from top to y=0
    axes.scale = 40;                 // 40 pixels from x=0 to x=1
    //axes.scale = 20;
    axes.doNegativeX = true;
   
    showAxes(ctx,axes);   
    
    funGraph(ctx,axes,fun1,"rgb(11,153,11)",2); 
        
}

function funGraph (ctx,axes,func,color,thick) {
    
    var xx, yy, dx=4, x0=axes.x0, y0=axes.y0, scale=axes.scale;
    var iMax = Math.round((ctx.canvas.width-x0)/dx);
    var iMin = axes.doNegativeX ? Math.round(-x0/dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;
   
    for (var i=iMin;i<=iMax;i++) {
        xx = dx*i;
        yy = scale*func(xx/scale);
        if (i==iMin) ctx.moveTo(x0+xx,y0-yy);
        else         ctx.lineTo(x0+xx,y0-yy);
       }
       ctx.stroke();
       
}

function showAxes(ctx,axes) {
    
    var x0=axes.x0, w=ctx.canvas.width;
    var y0=axes.y0, h=ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)"; 
    ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
    ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
    ctx.stroke();
    
}

function drawPoints(xP,yP){    
    
    var canvas = document.getElementById("canvas");
    if (null==canvas || !canvas.getContext) return;
    
    //var scale = 20;  // 20 canvas points for unity
    var scale = 40;  // 40 canvas points for unity
    
    ctx2=canvas.getContext("2d");
    for (var i = 0; i < xP.length; i++){    
        ctx2.beginPath();
        ctx2.arc((scale * xP[i]) + 0.5 + (.5*canvas.width),(-1 * scale * yP[i]) - 0.5 + (.5*canvas.height),4,0,(Math.PI/180)*360,true);
        ctx2.strokeStyle = "#f00";
        ctx2.lineWidth = 2;
        ctx2.fillStyle="#f99";
        ctx2.fill();
        ctx2.stroke();
    }    
    
}