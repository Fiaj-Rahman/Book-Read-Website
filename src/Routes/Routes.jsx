import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPages from "../ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";
import BookDetailsPage from "../Pages/BookDetailsPage/BookDetailsPage";
import ListedBooks from "../Component/ListedBooks/ListedBooks";
import PagesToRead from "../Component/PagesToRead/PagesToRead";
import { elements } from "chart.js";
import ReadAllBooks from "../Component/ListedBooks/ReadAllBooks";
import WishlistContent from "../Component/Content/WishlistContent";
import Category from "../Component/Category/Category";
import ContactUs from "../Component/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPages/>,

      children: [
        {
          path: "/",
          element: <Home/>
        },

        {
            path: "/book-details/:bookId",
            element: <BookDetailsPage/>
        },

        {
            path: "/ListedBooks",
            element: <ListedBooks/>,

            children:[
              {
                 index: true,
                 elements : <ReadAllBooks/>
              },
              {
                path:'wishlist',
                element:<WishlistContent/>
              }
            ]
        },

        {
            path: "/PagesToRead",
            element: <PagesToRead/>
        },

        {
          path: "/Category",
          element: <Category/>
      },

      {
        path: "/ContactUs",
        element: <ContactUs/>
    },
      ],
    },

  ]);
  




  export default router