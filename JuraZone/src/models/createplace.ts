export class PlaceRequest {
    name: String;
    description: String;
     location: {
        coordinates: [
            number,
            number
        ],
        type: string
    };
    tripHref: String;
    tripId: String;
    pictureUrl : String;
}