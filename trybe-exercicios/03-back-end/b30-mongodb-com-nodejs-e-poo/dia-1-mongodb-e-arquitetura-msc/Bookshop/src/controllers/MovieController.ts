  import { Request, Response } from 'express';
  import MovieService from '../services/MovieService';

  class MovieController {
    constructor(private movieService = new MovieService()) {}

    internalError = 'Internal server error';

    public getMovies = async (req: Request, res: Response): Promise<Response> => {
      try {
        const movies = await this.movieService.getMovies();

        return res.status(200).send(movies);
      } catch (err: unknown) {
        return res.status(500).send({ message: this.internalError });
      }
    };
  }

  export default MovieController;
