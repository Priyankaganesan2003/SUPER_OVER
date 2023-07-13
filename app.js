let cskruns=["_","_","_","_","_","_"];
let miruns=["_","_","_","_","_","_"];

let cskscores=0;
let miscores=0;
let ballcounter=0;

function strikeBall(){
    ballcounter++;
    let run=Math.floor(Math.random()*5)*2;
    if(run==8)
    {
        run='w';
    }

    //csk
    if(ballcounter<=6)
    {
        if(run!='w')
        {
            cskscores=cskscores+run;
            document.getElementById("cskscore").textContent=cskscores;
        }
        
            cskruns[ballcounter-1]=run;
                document.getElementById("cskruns").textContent=cskruns;
    }

   else  if(ballcounter<=12 && ballcounter>6)
    {
        if(run!='w')
        {
            miscores=miscores+run;
            document.getElementById("miscores").textContent=miscores;
        }
        miruns[ballcounter-7]=run;
        document.getElementById("miruns").textContent=miruns;
        if(miscores> cskscores)
        {
            ballcounter=12;
        }
    }
    
    if(ballcounter >=12)
    {
        document.getElementById("bat").disabled=true;
        let maxScore=Math.max(cskscores,miscores)

        if(cskscores==maxScore)
        {
            document.getElementById("csk").classList.add('winner');
        }
        else if(miscores==maxScore)
        {
            document.getElementById("mi").classList.add('winner');
        }
    }
}