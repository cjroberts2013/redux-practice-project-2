import React from 'react';
import { connect } from 'react-redux';
import { selecteMovie } from '../actions/index';

const MovieList = (props) => {
    const listItems = props.movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button>Details</button>
            </div>
        )
    })
}