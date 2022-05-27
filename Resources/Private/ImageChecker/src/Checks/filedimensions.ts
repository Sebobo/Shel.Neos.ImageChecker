import CheckResult from '../Interfaces/CheckResult';

const MAX_HEIGHT = 10000;
const MAX_WIDTH = 10000;
const MIN_HEIGHT = 0;
const MIN_WIDTH = 0;

export function checkFileDimensions(
    dimensions: { width: number; height: number },
    options: { maxWidth: number; maxHeight: number; minWidth: number; minHeight: number }
): Promise<CheckResult> {
    const maxWidth = options?.maxWidth || MAX_HEIGHT;
    const maxHeight = options?.maxHeight || MAX_WIDTH;
    const minWidth = options?.minWidth || MIN_HEIGHT;
    const minHeight = options?.minHeight || MIN_WIDTH;

    const smallEnough =
        (dimensions.width === 0 || dimensions.width <= maxWidth) &&
        (dimensions.height === 0 || dimensions.height <= maxHeight);

    const bigEnough = dimensions.width >= minWidth && dimensions.height >= minHeight;

    const errorMessage = `Image dimensions must be between ${minWidth}x${minHeight} and ${maxWidth}x${maxHeight}`;

    return Promise.resolve({
        isValid: smallEnough && bigEnough,
        value: `${dimensions.width} x ${dimensions.height}px`,
        errorMessage: smallEnough && bigEnough ? '' : errorMessage,
    });
}
