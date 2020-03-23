import React from 'react';
import { connect } from 'react-redux';
import { selectedMovie } from '../actions/index';

const MovieList = (props) => {
    const listItems = props.movies.map((movie) => {
        return (
            <div key={movie.title}>
                <span>{movie.title}</span>
                <button onClick={() => props.selectedMovie(movie)}>Details</button>
            </div>
        )
    })
    return (
        <div className='list-container'>
            <h2>Movie List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};



const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = {
    selectedMovie: selectedMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
