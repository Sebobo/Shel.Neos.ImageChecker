export default interface Image {
    mediaType: string;
    object: {
        __identity: string;
        __type: string;
    };
    originalDimensions: {
        width: number;
        height: number;
        aspectRatio: number;
    };
    originalImageResourceUri: string;
    previewDimensions: {
        width: number;
        height: number;
    };
    previewImageResourceUri: string;
}
