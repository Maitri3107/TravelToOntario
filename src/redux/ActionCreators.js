import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../Shared/baseUrl';

export const addComment = ( comment) => ({
    type: ActionTypes.ADD_COMMENT, 
    payload: comment
    
});

export const postComment = (placeId, rating, author, comment) => (dispatch) => {

    const newComment = {
        placeId : placeId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); 
        alert('Your comment could not be posted\nError: '+error.message); });
};
    

export const fetchPlaces = () => (dispatch) => {
    dispatch(placesLoading(true));

    return fetch(baseUrl + 'places')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(places => dispatch(addPlaces(places)))
    .catch(error => dispatch(placesFailed(console.error.message)));
}

 
export const addPlaces = (places) => ({
    type: ActionTypes.ADD_PLACES,
    payload: places
});

export const placesLoading = () => ({
    type: ActionTypes.PLACES_LOADING
});

export const placesFailed = (errmess) => ({
    type: ActionTypes.PLACES_FAILED,
    payload: errmess
});

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading())

    return fetch(baseUrl + 'leaders')
        .then(response => {
            if(response.ok)
                return response 
            else {
                var error = Error('Error' + response.status + ':' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => {
            dispatch(leadersFailed(error.message))
        })
}

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})



export const fetchPromos = () => (dispatch) => {
  
    dispatch(promosLoading());
  
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(console.error.message)));
 }
  
 export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
 });
  
 export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
 });
  
 export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
 });



export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => {
        console.log("commects fetch from serevrr", comments)
        dispatch(addComments(comments))})
    .catch(error => {
        console.log("commects fetch from serevrr", error)
         dispatch(commentsFailed(console.error.message))});
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const postFeedback = (feedback) => () => {
    feedback.date = new Date().toISOString();

    return fetch(baseUrl + 'feedback', {
        body: JSON.stringify(feedback),
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json'
        },
        method: 'POST',
    }).then(response => {
        if(response.ok)
            return response 
        else {
            var error = new Error('Error' + response.status + ':' + response.statusText)
            error.response = response
            throw error  
        }
    })
    .then(response => response.json())
    .then(feedback => alert('Your feedback is submitted \n' + JSON.stringify(feedback)))
    .catch(error => alert('Your feedback could not be sent'))
} 
