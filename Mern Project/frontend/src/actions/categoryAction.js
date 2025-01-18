import axios from "axios";

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
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    CATEGORY_DETAILS_REQUEST,
    CATEGORY_DETAILS_FAIL,
    CATEGORY_DETAILS_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/categoryConstants";

// Get All Categorys
export const getCategory =
  (keyword = "", currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_CATEGORY_REQUEST });

      let link = `/api/v1/categorys?keyword=${keyword}&page=${currentPage}`;

      // if (category) {
      //   link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
      // }

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CATEGORY_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Categorys For Admin
export const getAdminCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_CATEGORY_REQUEST });

    const { data } = await axios.get("/api/v1/admin/categorys");

    dispatch({
      type: ADMIN_CATEGORY_SUCCESS,
      payload: data.categorys,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Category
export const createCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CATEGORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/category/new`,
      categoryData,
      config
    );

    dispatch({
      type: NEW_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Category
export const updateCategory = (id, categoryData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CATEGORY_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/category/${id}`,
      categoryData,
      config
    );

    dispatch({
      type: UPDATE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATEGORY_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/category/${id}`);

    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Categorys Details
export const getCategorysDetails = (id)=> async (dispatch)=>{
    try {
        dispatch({ type: CATEGORY_DETAILS_REQUEST });
        const {data} = await axios.get(`/api/v1/category/${id}`);

        dispatch({
            type: CATEGORY_DETAILS_SUCCESS,
            payload: data.product,
          });
        
    } catch (error) {
        dispatch({
            type: CATEGORY_DETAILS_FAIL,
            payload: error.response.data.message,
          });
    }
};

// // NEW REVIEW
// export const newReview = (reviewData) => async (dispatch) => {
//   try {
//     dispatch({ type: NEW_REVIEW_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.put(`/api/v1/review`, reviewData, config);

//     dispatch({
//       type: NEW_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: NEW_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Get All Reviews of a Product
// export const getAllReviews = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ALL_REVIEW_REQUEST });

//     const { data } = await axios.get(`/api/v1/reviews?id=${id}`);

//     dispatch({
//       type: ALL_REVIEW_SUCCESS,
//       payload: data.reviews,
//     });
//   } catch (error) {
//     dispatch({
//       type: ALL_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// // Delete Review of a Product
// export const deleteReviews = (reviewId, productId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_REVIEW_REQUEST });

//     const { data } = await axios.delete(
//       `/api/v1/reviews?id=${reviewId}&productId=${productId}`
//     );

//     dispatch({
//       type: DELETE_REVIEW_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     dispatch({
//       type: DELETE_REVIEW_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };