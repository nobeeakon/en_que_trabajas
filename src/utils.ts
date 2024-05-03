export const HTTP_CODES = {
    200: {
        ok: 200,
        multiStatus: 207,
    },
    400: {
        badRequest: 400,
    },
    500: {
        internalServerError: 500,
    },
};

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const degreesToRadians = (degrees: number): number =>
    (degrees % 360) * (Math.PI / 180);
const radiansToDegrees = (radians: number): number =>
    (radians % (2 * Math.PI)) * (180 / Math.PI);

const EARTH_RADIUS = 6371008.8; // in meters
/** Converts distance in meters to radians */
const distanceToRadians = (meters: number): number => meters / EARTH_RADIUS;

/** Calculate destination coordinates given a start point, bearing and distance.
 * @param origin center coordinates
 * @param distance distance in meters
 * @param bearing angle
 */
export const getCoordinatesDestination = (
    origin: { lat: number; lng: number },
    distance: number,
    bearing: number
) => {
    const latRadians = degreesToRadians(origin.lat);
    const lngRadians = degreesToRadians(origin.lng);
    const bearingRadians = degreesToRadians(bearing);
    const distanceRadians = distanceToRadians(distance);

    const newLatRadians = Math.asin(
        Math.sin(latRadians) * Math.cos(distanceRadians) +
            Math.cos(latRadians) *
                Math.sin(distanceRadians) *
                Math.cos(bearingRadians)
    );
    const newLngRadians =
        lngRadians +
        Math.atan2(
            Math.sin(bearingRadians) *
                Math.sin(distanceRadians) *
                Math.cos(latRadians),
            Math.cos(distanceRadians) -
                Math.sin(latRadians) * Math.sin(newLatRadians)
        );

    return {
        lat: radiansToDegrees(newLatRadians),
        lng: radiansToDegrees(newLngRadians),
    };
};
