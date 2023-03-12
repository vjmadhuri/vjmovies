import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <main>
            <section className="my-5">
                <header>
                    <h1 className="ms-3">
                    <FontAwesomeIcon icon = {faFilm}
                    className="me-2 fa-xl"
                />
                        Movies On the Tip
                    </h1>
                </header>
                <hr />
                <p  className="ms-3" >
                    Welcome to the Movies on the Tip App.
                    In here you can 
                    <ul><br />
                        <li>
                            Search Movies that are already in Theaters, Top Rated Indian Movies, Top Rated Movies around the World.
                        </li><br />
                        <li>
                            Search movies that will be coming soon to your near by Theaters. 
                        </li><br />
                        <li>
                            Add your favourite movies  in the favourite Movies List.  
                        </li>
                    </ul> <br />
                    And enjoy the Experience on Movies on the Tip. 
                </p>
            </section>
        </main>
    );
};

export default Home;