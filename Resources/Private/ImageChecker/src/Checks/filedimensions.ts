const MAX_HEIGHT = 10000;
const MAX_WIDTH = 10000;
const MIN_HEIGHT = 0;
const MIN_WIDTH = 0;

export function checkFileDimensions(
    dimensions: { width: number; height: number },
    options: { maxWidth: number; maxHeight: number; minWidth: number; minHeight: number },
    translate: TranslateMethod
): Promise<CheckResult> {
    let { width, height } = dimensions;

    if (!width) {
        width = 0;
    }
    if (!height) {
        height = 0;
    }

    const maxWidth = options?.maxWidth || MAX_HEIGHT;
    const maxHeight = options?.maxHeight || MAX_WIDTH;
    const minWidth = options?.minWidth || MIN_HEIGHT;
    const minHeight = options?.minHeight || MIN_WIDTH;

    const smallEnough = (width === 0 || width <= maxWidth) && (height === 0 || height <= maxHeight);
    const bigEnough = width >= minWidth && height >= minHeight;

    const errorMessage = translate(
        'checks.dimensions.error',
        `Image dimensions must be between ${minWidth}x${minHeight}px and ${maxWidth}x${maxHeight}px`,
        {
            minWidth,
            minHeight,
            maxWidth,
            maxHeight,
        }
    );

    return Promise.resolve({
        isValid: smallEnough && bigEnough,
        value: width || height ? `${width} x ${height}px` : 'n/a',
        errorMessage: smallEnough && bigEnough ? '' : errorMessage,
    });
}
