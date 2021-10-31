export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/';
export const NEXT_API =
  process.env.NEXT_PUBLIC_NEXT_URL || 'http://localhost:3000/api/';
export const IMG_API =
  process.env.NEXT_PUBLIC_IMG_URL || 'http://localhost:8000';

// @TODO In deployment check that the URL direction is correct
export const IMG_VOTE_API =
  process.env.NEXT_PUBLIC_IMG_VOTE_URL ||
  'http://localhost:8000/api/v1/photocontestupload/';

// Public API route for build process: 'https://api-farmacia-del-mar.herokuapp.com/api/v1/';
