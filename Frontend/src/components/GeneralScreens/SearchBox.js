import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Link,
  MenuItem,
  Select,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import classes from "./classes";
import SearchIcon from "@mui/icons-material/Search";
import "../../Css/Home.css";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/?search=${searchTerm}`);
    }

    setSearchTerm("");
  };

  return (
    // <form className="search-form" onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="search"
    //     placeholder="Search..."
    //     className=" m-4"
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //     value={searchTerm}
    //   />

    //   <button
    //     type="submit"
    //     className={searchTerm.trim() ? "searchBtn" : "disBtn"}
    //   >
    //     <i>
    //       {" "}
    //       <BiSearchAlt2 />{" "}
    //     </i>{" "}
    //   </button>
    // </form>

    <div className="searchform">
      <div className="flex item-center justify-center w-auto mx-auto">
        <form onSubmit={handleSubmit}>
          <Box sx={classes.searchForm}>
            {/* <IconButton>
            <div className="select mx-auto">
              <Select
                fullWidth
                style={{ height: "30px" }}
                value={category}
                onChange={categoryHandler}
              >
                <MenuItem value="all">All</MenuItem>
                {categories.map((category) => (
                  <NextLink
                    key={category}
                    href={`/search?category=${category}`}
                    passHref
                  >
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  </NextLink>
                ))}
              </Select>
            </div>
          </IconButton> */}
            <InputBase
              name="query"
              sx={classes.searchInput}
              placeholder="ຄົ້ນຫາພຣະສູດ... "
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <IconButton
              type="submit"
              sx={classes.searchButton}
              aria-label="search"
              style={{ color: "white" }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
