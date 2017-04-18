import React, {Component} from 'react';

import { Dropdown,Icon } from 'semantic-ui-react'


class PostReaction extends Component {


    handleClick(choice){
              this.props.addReaction(choice,this.props.post.id)
    }

    render() {
        return (
            <div >
                 <div className="reaction-container">
                {// fetch reactions for this post
                    this.props.reactions.filter((reaction)=> reaction.postId == this.props.post.id)
                    .map((reaction,i)=>
                    <div className="reaction" key={i}>
                    <Icon name='empty heart' />4
                    </div>)
                
                }
                </div>
                <div className="add-reaction" >
                    <Dropdown icon="smile">
                        <Dropdown.Menu >
                            <Dropdown.Item icon="empty heart" onClick={(event)=>this.handleClick('heart')}/>
                            <Dropdown.Item icon="empty star" onClick={(event)=>this.handleClick('star')}/>
                            <Dropdown.Item icon="frown" onClick={(event)=>this.handleClick('sad')}/>
                            <Dropdown.Item icon="meh"onClick={(event)=>this.handleClick('meh')} />
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default PostReaction;