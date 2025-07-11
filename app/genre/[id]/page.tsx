import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';

type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    const discoverMovies = await getDiscoverMovies(id);

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col space-y-5 mt-20 xl:mt-32">
                <h1 className="text-6xl font-bold px-10">Results for Genre</h1>
                <MoviesCarousel
                    title={genre}
                    movies={discoverMovies}
                    isVertical
                />
            </div>
        </div>
    );
}

export default GenrePage;
