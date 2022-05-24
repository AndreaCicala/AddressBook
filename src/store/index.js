import { createStore } from "redux";

// Initial state
const initialState = {
  addressBookList: [
    {
      name: "Andrea",
      surname: "Cicala",
      phone: 32020211,
    },
  ],
};

const generic = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        addressBookList: [...state.addressBookList, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        addressBookList: state.addressBookList.filter(
          (obj) => obj.name !== action.payload
        ),
      };
    case "SUPERMEGASTATUSCREATORMEGA":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};

const store = createStore(generic, initialState);

export default store;
