import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const SharedLayout = lazy(()=>import("./SharedLayout/SharedLayout"))
const Home = lazy(()=> import("pages/Home/Home"));
const Movies = lazy(()=> import("pages/Movies/Movies"));
const MovieDetails = lazy(()=> import("pages/MovieDetails/MovieDetails"));
const Reviews = lazy(()=> import("./Reviews/Reviews"));
const Cast = lazy(()=> import("./Cast/Cast"));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={< Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
};
