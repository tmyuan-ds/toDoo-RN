import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

import {Transition, Transitioning} from "react-native-reanimated";

class TransitionBox extends React.Component{

constructor(props){
    super(props);
    this.state={
        randomWidth: 50,
        listView: true,
    }
    this.ref = React.createRef();
    this.buttonRef = React.createRef();
}

componentDidMount(){
    setInterval(()=> {
        this.generateNewWidth();
    }, 2000);
}

generateNewWidth(){
    let rW = Math.random() *300 + 50;
    this.setState({randomWidth: rW})
    // this.setState({randomWidth: `${rW}%`});
    this.ref.current.animateNextTransition();
}

switchView(viewState){
    this.setState({listView: viewState});
    this.buttonRef.current.animateNextTransition();

}

    boxTransition = (
        <Transition.Together>
            <Transition.Change durationMs={1500}/>
        </Transition.Together>
    )

    buttonTransition = (
        <Transition.Together>
            <Transition.Change interpolation="easeIn" durationMs={500}/>
        </Transition.Together>
    )
        
    
    render(){
        return(
            <View>
                <Transitioning.View>
                    <Transitioning.View 
                    ref={this.ref}
                    transition={this.boxTransition}
                    style={[styles.blueBox, 
                    {width:this.state.randomWidth}]}>
                    </Transitioning.View>

                    <TouchableOpacity onPress={()=>this.generateNewWidth()}>
                        <Text>Hello World</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonHolder}>
                        <TouchableOpacity onPress={()=> this.switchView(true)}>
                            <Text>List View</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=> this.switchView(false)}>
                            <Text>Grid View</Text>
                        </TouchableOpacity>

                        <Transitioning.View 
                            ref={this.buttonRef}
                            transition={this.buttonTransition}
                            style={[styles.buttonBg,
                            {left: this.state.listView? "0%": "50%"},
                            ]}>
                        </Transitioning.View>

                    </View>
                </Transitioning.View>
            </View>
        );
    }
}

const styles = {
    blueBox: {
        width:100,
        height:100,
        backgroundColor: "blue"
    },

    buttonHolder: {
        width: "80%",
        height: 50,
        borderRadius:30,
        borderColor: "black",
        borderWidth: 1,
        alignSelf:"center",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        overflow:"hidden",
    },

    buttonBg: {
        width: "50%",
        height: 50,
        backgroundColor: "skyblue",
        position: "absolute",
        zIndex:-1,
        borderRadius: 30,
        left: "0%",
    }
}

export default TransitionBox;