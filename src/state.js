const state = {
    // apartments: [
    //     {building: 'Built in 2003', category: 'Building house', area: '342 m2', rooms: '8', photoUrl: 'https://photos.zillowstatic.com/fp/f630ee05d3c35f407a167a4e0b0e1a49-cc_ft_768.jpg'},
    //     {building: 'Built in 2008', category: 'Building house', area: '411 m2', rooms: '9', photoUrl: 'https://photos.zillowstatic.com/fp/0318cc405e8521204e79e350602a72be-cc_ft_768.jpg'},
    //     {building: 'Built in 2011', category: 'Building house', area: '246 m2', rooms: '5', photoUrl: 'https://photos.zillowstatic.com/fp/2db5e09196ba1001903674588aa68e83-cc_ft_768.jpg'},
    //     // {building: 'Built in 2009', category: 'Building house', area: '221 m2', rooms: '4', photoUrl: 'https://photos.zillowstatic.com/fp/23531826cb463b692a7bbeca049ddc5e-uncropped_scaled_within_1536_1152.webp'},
    //     // {building: 'Built in 2005', category: 'Building house', area: '307 m2', rooms: '7', photoUrl: 'https://photos.zillowstatic.com/fp/f500f87d9653c8e65b98a0ecbb714bc4-uncropped_scaled_within_1536_1152.jpg'}

    // ],
    // villas: [

    // ]
    villaPage: {
        text: 'add your comment',
        comments: [],
        // addComment() {
        //     let newComment = {
        //         id: 0,
        //         // cmnt: state.comment,
        //         likesCount: 0,
        //         dislikesCount: 0
        //     };
        //     state.comments.push(newComment);
        //     // state.comments.newComment = '';
        // },
        // updateNewComment(newComment) {
        //     state.comment = newComment;
        // },
        like: 0,
        dispatch(action){
            if(action.type === 'ADD-COMMENT'){
                let newComment = {
                    id: 0,
                    // cmnt: state.comment,
                    likesCount: 0,
                    dislikesCount: 0
                };
                state.comments.push(newComment);
                // state.comments.newComment = '';
            }
            else if(action.type === 'UPDATE-NEW-COMMENT'){
                state.comment = action.newComment;
            }
        }
    }
}

export default state;
