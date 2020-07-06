import React from 'react';
import { connect } from 'react-redux';

import CommentList from '../components/comment-list';
import AddComment from '../components/add-comment';

import { addComment, delComment } from '../actions';

let App = (props) => {
    const {
        items, addComment, delComment
    } = props;

    return (
        <div>
            <CommentList items={items} delComment={delComment} />
            <AddComment addComment={addComment} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (user, comment) => dispatch(addComment(user, comment)),
        delComment: (id) => dispatch(delComment(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;