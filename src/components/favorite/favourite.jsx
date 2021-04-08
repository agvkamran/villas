import axios from 'axios';
import React from 'react';
// import './favourite.css';
import ApartmentCard from '../apartmentCard/apartmentCard'


class Favourite extends React.Component {
    
    state = {
        villas: [],
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(data => {
                let villas = data.data.apartments.filter((x) => {
                    let findRes = this.props.favouritePage.favourites.find((x2) => x2 === x.id);
                    return findRes !== undefined;
                });

                this.setState({
                    villas: villas
                });
            })
    }

    render() {
        return (
            <div className='content-favourite'>
                {this.state.villas.map((a) => {
                    return (
                        <div key={a.id} className='apartment'>
                            <ApartmentCard a={a} seeMore={this.seeMore} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Favourite;


// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         "API-KEY": "f598884e-e0f7-439c-b88e-13e628f2f1c1"
//     }
// });

// export const usersAPI = {
//     getUsers(currentPage = 1, pageSize = 5) {
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data
//             })
//     },
//     // unfollowUser(u){
//     //     return instance.delete(`follow/${u.id}`)
//     // }
//     follow(userId) {
//         return instance.post(`follow/${userId}`)
//     },
//     unfollow(userId) {
//         return instance.delete(`follow/${userId}`)
//     },
//     getProfile(userId) {
//         return profileAPI.getProfile(userId)
//     }
// }

// export const profileAPI = {
//     getProfile(userId) {
//         return instance.get(`profile/` + userId)
//     },
//     getStatus(userId) {
//         return instance.get(`profile/status/` + userId)
//     },
//     updateStatus(status) {
//         return instance.put(`profile/status/`, { status: status })
//     }
// }
