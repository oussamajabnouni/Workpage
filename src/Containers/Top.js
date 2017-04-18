import React, {Component} from 'react'
import {connect} from 'react-redux'
import { spaceFetchData,addSpace } from './../Redux/Actions/actionCreators'

import SpaceItem from './../Components/spaces/SpaceItem'
import SpaceAdd from './../Components/spaces/SpaceAdd'

import { Grid } from 'semantic-ui-react'

class Top extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
                <Grid >
                <Grid.Row centered columns={7} textAlign='center'>
                        <SpaceItem space={{id:'',name:'home'}} />
                        {
                            this.props.spaces.map( (space,i)=> 
                                               <SpaceItem key={i} space={space}  />)
                        }             
                        <SpaceAdd {...this.props}/>
                </Grid.Row>
                </Grid>
            </div>
        )
    }
}

function  mapStateToProps(state) {
    return {
        spaces: state.space,
        isLoading: state.spaceIsLoading
    };
}

function mapDispatchtoProps(dispatch){
   return {
        fetchData: () => dispatch(spaceFetchData()),
        addSpace: () => dispatch(addSpace())
    };
}

export default connect(mapStateToProps,mapDispatchtoProps)(Top);