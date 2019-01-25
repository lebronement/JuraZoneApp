export class Place {
    name: String;
    description: String;
    location: GeoJsonPoint;
    tripHref: String;
    tripId: String;
    pictureUrl : String;
}
export class GeoJsonPoint {
    type: string;
    coordinates: number[];
}