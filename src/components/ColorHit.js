import React from 'react'

class ColorHit extends React.Component {
    constructor(){
        super()
        this.state = {
            prevColoringBoxNumber: 1,
            clickedBoxId: 0,
            total: 0,
            topScores: [
                {id: 1, name: 'A', score: 9},
                {id: 2, name: 'B', score: 4},
                {id: 3, name: 'C', score: 7},
                {id: 4, name: 'D', score: 3},
                {id: 5, name: 'E', score: 0}
            ],
            newUser: {id: '', name: '', score: 0},
            timer: '',
            coloringBoxNumber: 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('userInput').disabled = true
        document.getElementById('start').disabled = true
        document.getElementById('start').style.backgroundColor = 'gray'
        this.state.newUser.id = this.state.topScores.length + 1
        setTimeout( () => {
                this.state.timer = setInterval( () => {
                if(this.state.total < 10){
                    this.randomColorDisplay()
                    
                }else {
                    document.getElementById(this.state.prevColoringBoxNumber).style.backgroundColor = 'darkgray'
                    this.setState((prevState) => {
                        return {
                            topScores: prevState.topScores.concat(prevState.newUser),
                        }
                    })
                    clearInterval(this.state.timer)
                }
            },700)
        }, 1500)
    }

    handleUsernameChange = (e) => {
        const name = e.target.value
        this.setState( prevState => {
            prevState.newUser.name = name
            return {
                newUser: prevState.newUser
            }
        })
    }

    handleRestart = () => {
        clearInterval(this.state.timer)
        document.getElementById('userInput').disabled = false
        document.getElementById('start').disabled = false
        document.getElementById('start').style.backgroundColor = 'blue'
        document.getElementById(this.state.coloringBoxNumber).style.backgroundColor = 'darkgray'
        this.setState(prevState => {
            return {
                newUser: {id: '', name: '', score: 0},
                total: 0
            }
        })
    }

    randomColorDisplay = () => {
        document.getElementById(this.state.prevColoringBoxNumber).style.backgroundColor = 'darkgray'

        let coloringBoxNumber = Math.trunc(Math.random()*10) || 1
        while(this.state.prevColoringBoxNumber == coloringBoxNumber){
            coloringBoxNumber = Math.trunc(Math.random()*10) || 1
        }
                      
        document.getElementById(coloringBoxNumber).style.backgroundColor = 'red'
        
        this.setState( prevState => {
            return {
                total: this.state.total + 1
            }
        })
        
        setTimeout( () => {
            if(coloringBoxNumber == this.state.clickedBoxId){                     
                this.setState( prevState => {
                    prevState.newUser.score += 1
                    return {newUser: prevState.newUser}
                })
            }
            this.state.clickedBoxId = 0
        },900)
        
        this.state.prevColoringBoxNumber = this.state.coloringBoxNumber = coloringBoxNumber
    }

    render(){
        const divStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: 'darkgray',
            margin: '20px',
            border: 'none',
            outline: 'none',
            borderRadius: '10px'
        }
        return (
            <div id="userInfo-game-topScores">
                <div id="userInfo-topScores">
                    <div id="color-hitting">
                        <h1>Color Hitting . . .</h1>
                    </div>
                    <div id="userInfo">
                        <h1>Welcome to the game...</h1>
                        <div style={{display: 'flex'}}>
                            <form onSubmit={this.handleSubmit}>
                                <h3>Username:</h3>
                                <input id="userInput" type="text" value={this.state.newUser.name} placeholder="Enter your name..." onChange={this.handleUsernameChange}/>
                                <input id="start" type="submit" value="Start" />
                            </form>
                            <button style={{height: '25px', alignSelf: 'flex-end'}} onClick={this.handleRestart}>Restart</button>
                        </div>
                    </div>
                    <div id="topScores">
                        <h1>Highest scores</h1>
                        <hr/>
                        <ol>
                            {
                                this.state.topScores.sort((a,b) => b.score - a.score).slice(0,5).map( (player,index) => {
                                    
                                    return <li key={player.id} id="score-list" ><h1>{index + 1 + '. '}{player.name}</h1><h1>{player.score}</h1></li>
                                })
                            }
                        </ol>
                    </div>
                </div>
                <div id="main-game-div">
                    <div>
                        <h2>Total chances - 10</h2>
                    </div>
                    <div>
                        <hr/>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {
                                (() => {
                                    const boxes = []
                                    for(let i = 1; i <= 9; i++){
                                        boxes.push(<button style={divStyle} key={i} id={i} onClick={ () => {
                                            this.state.clickedBoxId = i
                                        }}></button>)
                                    }
                                    return boxes
                                })()
                            }
                        </div>
                        <hr/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h2>Hits: {this.state.newUser.score}</h2>
                        <h2>Remaining: {10 - this.state.total}</h2>  
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorHit