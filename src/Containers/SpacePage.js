import React, {Component} from 'react';
import {connect} from 'react-redux'
import { labelFetchData,addLabel,
         postFetchData,addPost,
         reactionFetchData,addReaction} from './../Redux/Actions/actionCreators'

import LabelItem from './../Components/label/LabelItem'
import LabelAdd from './../Components/label/LabelAdd'
import { Grid } from 'semantic-ui-react'

class SpacePage extends Component {

    componentDidMount(){
        this.props.fetchLabelData(this.props.params.spaceid);
        this.props.fetchPostData(this.props.params.spaceid);
        this.props.fetchReactionData();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.params !== this.props.params){
           this.props.fetchLabelData(nextProps.spaceid);
           this.props.fetchPostData(this.props.params.spaceid);
           this.props.fetchReactionData();
        }
    }

    render() {
        return (
            <Grid columns={4} >

                {
                // Fetch labels
                    this.props.labels.filter((label) =>
                        label.spaceID==this.props.params.spaceid)
                        .map((label,i)=> 
                        <Grid.Column  key={i} >
                        <LabelItem label={label} {...this.props} />  
                        </Grid.Column>)
                }                   
            
                {
                // Add Label button
                this.props.labels.length < 4
                ?
                <Grid.Column  >
                    <LabelAdd {...this.props}/>
                </Grid.Column>
                :
                null
                }

            </Grid>
        );
    }
}

function mapStateToProps(state){
    return {
        labels : state.label,
        isLabelLoading : state.labelIsLoading,
        posts : state.post,
        isPostLoading : state.postIsLoading,
        reactions : state.reaction,
        isReactionLoading : state.reactionIsLoading

    }
}

function mapDispatchtoProps(dispatch){
   return {
        fetchLabelData: (spaceId) => dispatch(labelFetchData(spaceId)),
        addLabel: () => dispatch(addLabel()),
        fetchPostData: (spaceId) => dispatch(postFetchData(spaceId)),
        addPost: () => dispatch(addPost()),
        fetchReactionData: () => dispatch(reactionFetchData()),
        addReaction: (reaction,postID) => dispatch(addReaction(reaction,postID))
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(SpacePage);