import React, {Component} from 'react';

import {connect} from 'react-redux'

import { messageFetchData,addMessage } from './../Redux/Actions/actionCreators'
import MsgList from './../Components/mainChat/MsgList'
import ForMe from './../Components/forMe/forMe'

import { Grid, Segment } from 'semantic-ui-react'

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (

            <Grid className="home-container" >

                <Grid.Column width={10} >
                    <Segment ><MsgList {...this.props} /></Segment>
                </Grid.Column>

                <Grid.Column width={6} >
                    <Segment><ForMe {...this.props} /></Segment>
                </Grid.Column>

            </Grid>

        );
    }
}


function  mapStateToProps(state) {
    return {
        messages: state.message,
        isLoading: state.messageIsLoading
    };
}

function mapDispatchtoProps(dispatch){
   return {
        fetchData: () => dispatch(messageFetchData()),
        addMessage: (message) => dispatch(addMessage(message))
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(HomePage);