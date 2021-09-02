class paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3
            friction:0,
            density:1.2			
			}

            function keyPressed() {
                if (keycode === UP_ARROW) {
                    matter.body.applyforces(paper,object.body.position,{x:130,y-145});

                    
                }
            }