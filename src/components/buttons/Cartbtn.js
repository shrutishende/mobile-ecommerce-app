import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cartbtn = () => {
    const state = useSelector((state) => state.addItem);
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2">
                <span className="fa fa-shopping-cart me-1">
                    Cart ({state.length})
                </span>
            </NavLink>
        </>
    );
};

export default Cartbtn;
