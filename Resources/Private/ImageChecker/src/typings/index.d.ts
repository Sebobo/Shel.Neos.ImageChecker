declare module '*.css';
declare module '*.module.css';

type TranslateMethod = (id?: string, fallback?: string, params?: Record<string, any>) => string;

type Image = {
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
};

type ImageCheckOptions = {
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
};

type CheckResult = {
    isValid: boolean;
    errorMessage?: string;
    value: string;
};
