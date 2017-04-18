// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import label ,{ labelIsLoading } from './label'; 
import user ,{ userIsLoading } from './user';
import message ,{ messageIsLoading } from './message';
import post ,{ postIsLoading } from './post';
import space ,{ spaceIsLoading } from './space';
import comment ,{ commentIsLoading } from './comment';
import reply ,{ replyIsLoading } from './reply';
import reaction ,{ reactionIsLoading } from './reaction';
import coworker from './coworker';
import error from './error';

const rootReducer = combineReducers({
  label,
  labelIsLoading,
  user,
  userIsLoading,
  message,
  messageIsLoading,
  post,
  postIsLoading,
  space,
  spaceIsLoading,
  comment,
  commentIsLoading,
  reply,
  replyIsLoading,
  reaction,
  reactionIsLoading,
  coworker,
  error,
  routing : routerReducer
});

export default rootReducer;
