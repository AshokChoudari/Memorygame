const cells=["","","","","","","","","","","","","","","",""]
        const colors=['red','pink','green','yellow','blue','orange','brown','skyblue']
        const arr=[]
        let clickedCard=null
        let clickPresent=false
        let count=0;
        let minMoves=10000;
        const main=document.querySelector('#main')
        // createBoard()
        function startGame(e){
            main.innerHTML=''
            createBoard()
            console.log(e)
        }
        function createBoard(){
            main.innerHTML=`<div class="sc" id="score">Moves:</div>`
            const outerDiv=document.createElement('div')
            outerDiv.classList.add('boxs')
            cells.forEach((cell,idx)=>{
                const div=document.createElement('div')
                div.classList.add('box','hidden')
                div.id=idx
                outerDiv.append(div)
            })
            // console.log(outerDiv)
            main.append(outerDiv)
            giveColors()
        }

        function giveColors(){

            colors.forEach(c=>{
                let r=parseInt(Math.random()*16)
                while(arr.indexOf(r)!=-1){
                    r=parseInt(Math.random()*16)
                }
                const div=document.getElementById(r)
                arr.push(r)
                div.classList.add(c)
                div.contain=c
                div.onclick=showColor
                r=parseInt(Math.random()*16)
                while(arr.indexOf(r)!=-1){
                    r=parseInt(Math.random()*16)
                }
                const div2=document.getElementById(r)
                arr.push(r)
                div2.classList.add(c)
                div2.contain=c
                div2.onclick=showColor
            // colors.splice(c,1);
            })

        }
        
        function showColor(e){
            // console.log(e.target)
            count++;
            e.target.classList.remove('hidden')
            e.target.onclick=''
            setTimeout(()=>{
                // e.target.classList.add('hidden')
                if(!clickedCard){
                clickedCard=e.target;
                }
                else{
                    if(clickedCard.contain!==e.target.contain){
                        clickedCard.classList.add('hidden')
                        e.target.classList.add('hidden')
                        clickedCard.onclick=showColor
                        e.target.onclick=showColor
                    }
                    else{
                        clickedCard.classList.add('done')
                        e.target.classList.add('done')
                        count--
                    }
                    clickedCard=null
                    // clickPresent=false
                }
            },300)
            
            score.innerHTML=`Moves: ${count}`
            // console.log(count +" "+clickPresent)
            // .trim()
            checkGameOver()
        }

        function checkGameOver(){
            let c=0
            cells.forEach((cell,idx)=>{
                let check=document.getElementById(idx)
                if(check.onclick!=null){
                    c++
                }
            })
            if(c==0){
                const overMsg=document.createElement('div')
                overMsg.classList.add('gameOver')
                minMoves=(minMoves<count)?minMoves:count
                overMsg.innerHTML=`
                <h3><span class="overMsg">Game Over! </span> Moves: ${count}, Minimum Moves:${minMoves}</h3>
                <button onclick="playAgain(this)">Play Again</button>`
                main.append(overMsg)
            }
        }
        function playAgain(e){
            main.innerHTML=''
            main.innerHTML=`<button onclick="startGame(this)">Start the Game</button>`
            arr.splice(0,arr.length)
            count=0
        }