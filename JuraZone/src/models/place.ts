export class Place {
    name: String;
    description: String;
     location: {
        coordinates: [
            number,
            number
        ],
        type: point
    };
    tripHref: String;
    tripId: String;
    pictureUrl : String;
}