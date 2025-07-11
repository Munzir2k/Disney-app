import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MoviesCarousel from '@/components/MoviesCarousel';
import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies
} from '@/lib/getMovies';

export default async function Home() {
    const upcommingMovies = await getUpcomingMovies();
    const popularMovies = await getPopularMovies();
    const topRatedMovies = await getTopRatedMovies();

    return (
        <main className="">
            <CarouselBannerWrapper />

            <div className="flex flex-col space-y-2 xl:-mt-48">
                <MoviesCarousel movies={upcommingMovies} title="Upcomming" />
                <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
                <MoviesCarousel movies={popularMovies} title="Popular" />
            </div>
        </main>
    );
}
