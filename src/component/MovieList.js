import MovieItem from './MovieItem.js'

const MovieList = ({dummy, category}) => {

    const filterDummy = category === 'cateAll'
    ? dummy : dummy.filter((it) => (it.year === category));

    return (
        <div className="MovieList">
            <ul>
                {filterDummy.map((it)=>(
                    <MovieItem key={it.id} {...it} dummy={dummy}/>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;