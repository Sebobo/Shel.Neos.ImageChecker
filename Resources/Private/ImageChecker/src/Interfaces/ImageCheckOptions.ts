export interface ImageCheckOptions {
    fileName: {
        allowedPattern: string;
    };
    fileSize: {
        default?: number;
        svg?: number;
        jpg?: number;
        png?: number;
    };
    fileDimensions: {
        maxWidth: number;
        maxHeight: number;
        minWidth: number;
        minHeight: number;
    };
}
