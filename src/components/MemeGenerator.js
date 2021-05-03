import React, { Component } from 'react'
import axios from 'axios'

class MemeGenerator extends Component {
    state = {
        content1:'',
        content2:'',
        content3:'',
        content4:'',
        content5:'',

        top1: 50,
        left1: 590,
        size1: 50,
        red1:255,
        green1:255,
        blue1:255,

        top2: 100,
        left2: 590,
        size2: 50,
        red2:255,
        green2:255,
        blue2:255,

        top3: 150,
        left3: 590,
        size3: 50,
        red3:255,
        green3:255,
        blue3:255,

        top4: 200,
        left4: 590,
        size4: 50,
        red4:255,
        green4:255,
        blue4:255,

        top5: 250,
        left5: 590,
        size5: 50,
        red5:255,
        green5:255,
        blue5:255,

        choosenContent: 0,
        memesImg:[],
        memeUrl:"https://i.imgflip.com/26am.jpg"
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes").then(response => this.setState({memesImg:response.data.data.memes}))
    }

    pickContent = e => {
        this.setState({
            choosenContent: e.target.value
        })
    }

    removeContents = () => {
        this.setState({
            content1:'',
            content2:'',
            content3:'',
            content4:'',
            content5:''
        })
    }

    editContent = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0: 
                this.setState({
                    content1:e.target.value
                })
                break;
            case 1: 
                this.setState({
                    content2:e.target.value
                })
                break;
            case 2: 
                this.setState({
                    content3:e.target.value
                })
                break;
            case 3: 
                this.setState({
                    content4:e.target.value
                })
                break;
            case 4: 
                this.setState({
                    content5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeTop = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    top1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    top2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    top3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    top4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    top5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeLeft = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    left1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    left2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    left3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    left4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    left5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeSize = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    size1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    size2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    size3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    size4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    size5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeRed = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    red1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    red2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    red3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    red4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    red5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeGreen = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    green1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    green2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    green3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    green4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    green5:e.target.value
                })
                break;
            default: break;
        }
    }

    arrangeBlue = e => {
        switch(Number.parseInt(this.state.choosenContent)) {
            case 0:
                this.setState({
                    blue1:e.target.value
                })
                break;
            case 1:
                this.setState({
                    blue2:e.target.value
                })
                break;
            case 2:
                this.setState({
                    blue3:e.target.value
                })
                break;
            case 3:
                this.setState({
                    blue4:e.target.value
                })
                break;
            case 4:
                this.setState({
                    blue5:e.target.value
                })
                break;
            default: break;
        }
    }

    generateMeme = e => {
        const randomIntFromRange = (min, max) => {
            return Math.floor(Math.random()*(max - min + 1) + min);
        }

        e.preventDefault()
        const imgIndex = randomIntFromRange(0, this.state.memesImg.length)
        this.setState({
            memeUrl: this.state.memesImg[imgIndex].url
        })
    }


    render() {
        let {content1, content2, content3, content4, content5,
               top1, left1, size1, red1, green1, blue1,
               top2, left2, size2, red2, green2, blue2,
               top3, left3, size3, red3, green3, blue3,
               top4, left4, size4, red4, green4, blue4,
               top5, left5, size5, red5, green5, blue5} = this.state

        const contentStyle1 = {
            top: `${top1}px`,
            left: `${left1}px`,
            fontSize: `${size1}px`,
            color: `rgb(${red1}, ${green1}, ${blue1})`
        }

        const contentStyle2 = {
            top: `${top2}px`,
            left: `${left2}px`,
            fontSize: `${size2}px`,
            color: `rgb(${red2}, ${green2}, ${blue2})`
        }

        const contentStyle3 = {
            top: `${top3}px`,
            left: `${left3}px`,
            fontSize: `${size3}px`,
            color: `rgb(${red3}, ${green3}, ${blue3})`
        }

        const contentStyle4 = {
            top: `${top4}px`,
            left: `${left4}px`,
            fontSize: `${size4}px`,
            color: `rgb(${red4}, ${green4}, ${blue4})`
        }

        const contentStyle5 = {
            top: `${top5}px`,
            left: `${left5}px`,
            fontSize: `${size5}px`,
            color: `rgb(${red5}, ${green5}, ${blue5})`
        }


        return (
            <div className="generator-container">
                <div  className="form-container">
                    <input className="input-text" name="add-content" placeholder={"Edit content..."} onChange={this.editContent}/>

                    <span><input type="radio" name="contentValue" value="0" onChange={this.pickContent} checked={0===this.state.choosenContent}/> Content 1</span>
                    <span><input type="radio" name="contentValue" value="1" onChange={this.pickContent}/> Content 2</span>
                    <span><input type="radio" name="contentValue" value="2" onChange={this.pickContent}/> Content 3</span>
                    <span><input type="radio" name="contentValue" value="3" onChange={this.pickContent}/> Content 4</span>
                    <span><input type="radio" name="contentValue" value="4" onChange={this.pickContent}/> Content 5</span>

                    <button className="removeContent-btn" onClick={this.removeContents}>Remove all contents</button>

                    <label>TOP</label>
                    <input className="input-range" type="range" min="-800" max="800"
                    onChange={this.arrangeTop}/>

                    <label>LEFT</label>
                    <input className="input-range" type="range" min="-800" max="1000"
                    onChange={this.arrangeLeft}/>

                    <label>SIZE</label>
                    <input className="input-range" type="range" min="20" max="100"
                    onChange={this.arrangeSize}/>

                    <label>RED</label>
                    <input className="input-range red" type="range" min="0" max="255"
                    onChange={this.arrangeRed}/>

                    <label>GREEN</label>
                    <input className="input-range green" type="range" min="0" max="255"
                    onChange={this.arrangeGreen}/>

                    <label>BLUE</label>
                    <input className="input-range blue" type="range" min="0" max="255"
                    onChange={this.arrangeBlue}/>

                    <button className="generate-btn" onClick={this.generateMeme}>Generate</button>
                </div>

                <div className="img-container">
                    <h2 className="content" style={contentStyle1}>{content1}</h2>
                    <h2 className="content" style={contentStyle2}>{content2}</h2>
                    <h2 className="content" style={contentStyle3}>{content3}</h2>
                    <h2 className="content" style={contentStyle4}>{content4}</h2>
                    <h2 className="content" style={contentStyle5}>{content5}</h2>
                    <img src={this.state.memeUrl} alt="img-meme"/>
                </div>
            </div>
        )
    }
}

export default MemeGenerator