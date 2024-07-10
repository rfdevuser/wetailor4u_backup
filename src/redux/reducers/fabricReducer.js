import {
    FETCH_FABRIC_REQUEST,
    FETCH_FABRIC_SUCCESS,
    FETCH_FABRIC_FAILURE,
  } from "../actions/types";
  
  // Initial state
  const initialState = {
    fabric: [],         // Array to store fetched fabrics
    loading: false,   // Indicates if fabrics are currently being fetched
    totalCount: 0,    // Total count of available fabrics
    error: null,      // Stores any error occurred during fetching fabrics
  };
  
  // Reducer function
  const fabricReducer = (state = initialState, action) => {
    switch (action.type) {
      // Action to handle when fabrics fetching is requested
      case FETCH_FABRIC_REQUEST:
        return {
          ...state,
          loading: true,  // Set loading to true while fetching
          error: null,    // Clear any previous errors
        };
      // Action to handle successful fetching of fabrics
      case FETCH_FABRIC_SUCCESS:
        return {
          ...state,
          loading: false,                           // Set loading to false
          fabric: [...state.fabric, ...action.payload.jdList],  // Merge fetched fabrics with existing ones
          totalCount: action.payload.totalCount,   // Update total count of fabrics
          error: null,                             // Clear any previous errors
        };
      // Action to handle failure in fetching fabrics
      case FETCH_FABRIC_FAILURE:
        return {
          ...state,
          loading: false,  // Set loading to false
          fabric: [],        // Clear fabrics array as fetching failed
          error: action.payload,  // Store the error message
        };
      // Default case: return the current state if action type doesn't match
      default:
        return state;
    }
  };
  
  export default fabricReducer;
  