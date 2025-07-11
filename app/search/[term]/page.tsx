import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchMovies } from '@/lib/getMovies';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        term: string;
    };
};

async function Search({ params: { term } }: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term);

    // API to get search movies
    const searchMovies = await getSearchMovies(termToUse);
    // API to get poplar movies
    const popularMovies = await getPopularMovies();

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
                <h1 className="text-6xl font-bold px-10">
                    Results for {termToUse}
                </h1>
                <MoviesCarousel
                    title="Movies"
                    movies={searchMovies}
                    isVertical
                />
                <MoviesCarousel
                    title="You may also like"
                    movies={popularMovies}
                />
            </div>
        </div>
    );
}

export default Search;
