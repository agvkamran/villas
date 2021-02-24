const ADD_COMMENT = 'ADD_COMMENT';
const UPDATE_NEW_COMMENT = 'UPDATE_NEW_COMMENT';
const LIKE_COMMENT = 'LIKE_COMMENT';


let initialState = {
    comments: []
}

const villaReducer = (state = initialState, action) => {
    if (action.type === ADD_COMMENT) {
        let newComment = {
            id: Math.floor(Math.random() * 100000),
            text: state.text,
            likesCount: 0,
            buttonDisabled: false
        };

        return {
            ...state,
            comments: [
                ...state.comments,
                newComment
            ]
        };
    }
    else if (action.type === UPDATE_NEW_COMMENT) {
        return {
            ...state,
            text: action.newComment
        };
    }
    else if (action.type === LIKE_COMMENT) {
        let idx = state.comments.findIndex((comment) => comment.id === action.commentId);
        return {
            ...state,
            comments: [
                ...state.comments.slice(0, idx),
                {
                    id: state.comments[idx].id,
                    text: state.comments[idx].text,
                    likesCount: state.comments[idx].likesCount + 1,
                    buttonDisabled: true
                },
                ...state.comments.slice(idx + 1)
            ]
        };
    }
    return state;
}

export const addCommentAC = () => {
    return {
        type: ADD_COMMENT
    }
}

export const onChangeCommitAC = (cmnt) => {
    return {
        type: UPDATE_NEW_COMMENT, newComment: cmnt
    }
}

export const likeCommentAC = (commentId) => {
    return {
        type: LIKE_COMMENT, commentId: commentId
    }
}


export default villaReducer;



