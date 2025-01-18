import{
    ALL_CATEGORY_FAIL,
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ADMIN_CATEGORY_REQUEST,
    ADMIN_CATEGORY_SUCCESS,
    ADMIN_CATEGORY_FAIL,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,
    NEW_CATEGORY_RESET,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_RESET,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_RESET,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_FAIL,
    CATEGORY_DETAILS_SUCCESS,
    
    CLEAR_ERRORS,
} from "../constants/categoryConstants";


export const categorysReducer = (state = { categorys: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
    case ADMIN_CATEGORY_REQUEST:
      return {
        loading: true,
        categorys: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        categorys: action.payload.categorys,
        categorysCount: action.payload.categorysCount,
        resultPerPage: action.payload.resultPerPage,
        filteredCategorysCount: action.payload.filteredCategorysCount,
      };

    case ADMIN_CATEGORY_SUCCESS:
      return {
        loading: false,
        categorys: action.payload,
      };
    case ALL_CATEGORY_FAIL:
    case ADMIN_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newCategoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
      case NEW_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_CATEGORY_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          category: action.payload.category,
        };
      case  NEW_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_CATEGORY_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export const categoryReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_CATEGORY_REQUEST:
      case UPDATE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_CATEGORY_FAIL:
      case UPDATE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_CATEGORY_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_CATEGORY_RESET:
        return {
          ...state,
          isUpdated: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

export const categoryDetailsReducer = (state = {category: {} }, action) =>{
    switch(action.type){
        case CATEGORY_DETAILS_REQUEST:
            return{
                loading: true,
                ...state,
            };
        case CATEGORY_DETAILS_SUCCESS:
            return{
                loading: false,
                product: action.payload,
            };
        case CATEGORY_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

// export const newReviewReducer = (state = {}, action) => {
//     switch (action.type) {
//       case NEW_REVIEW_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case NEW_REVIEW_SUCCESS:
//         return {
//           loading: false,
//           success: action.payload,
//         };
//       case NEW_REVIEW_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case NEW_REVIEW_RESET:
//         return {
//           ...state,
//           success: false,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export const productReviewsReducer = (state = { reviews: [] }, action) => {
//     switch (action.type) {
//       case ALL_REVIEW_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case ALL_REVIEW_SUCCESS:
//         return {
//           loading: false,
//           reviews: action.payload,
//         };
//       case ALL_REVIEW_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
  
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export const reviewReducer = (state = {}, action) => {
//     switch (action.type) {
//       case DELETE_REVIEW_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case DELETE_REVIEW_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isDeleted: action.payload,
//         };
//       case DELETE_REVIEW_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case DELETE_REVIEW_RESET:
//         return {
//           ...state,
//           isDeleted: false,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };