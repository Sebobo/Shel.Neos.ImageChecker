const MAX_FILE_SIZE = 2048; // in KB

interface FileSizeCheckOptions {
    default?: number;
    svg?: number;
    jpg?: number;
    png?: number;
}

export function checkFileSize(
    url: string,
    options: FileSizeCheckOptions,
    translate: TranslateMethod
): Promise<CheckResult> {
    return fetch(url, { method: 'HEAD', cache: 'no-cache' })
        .then(async (response) => {
            if (response.ok) {
                const fileType = response.headers.get('Content-Type');
                let fileSize = parseInt(response.headers.get('Content-Length')) || 0;

                // For SVGs we don't always get the actual size via a HEAD request, so we need to fetch the whole file
                if (!fileSize && fileType === 'image/svg+xml') {
                    const blob = await fetch(url, { method: 'GET', cache: 'no-cache' }).then((response) =>
                        response.blob()
                    );
                    fileSize = blob.size;
                }

                let maxSize = options.default || MAX_FILE_SIZE;
                switch (fileType) {
                    case 'image/png':
                        maxSize = options.png || maxSize;
                        break;
                    case 'image/jpeg':
                        maxSize = options.jpg || maxSize;
                        break;
                    case 'image/svg+xml':
                        maxSize = options.svg || maxSize;
                        break;
                }

                // fileSize is measured in bytes, maxSize is defined in KB
                const isValid = fileSize <= maxSize * 1024;

                let displayFileSize = fileSize;
                let unit = 'B';
                if (displayFileSize > 1024) {
                    displayFileSize /= 1024;
                    unit = 'KB';
                }
                if (displayFileSize > 1024) {
                    displayFileSize /= 1024;
                    unit = 'MB';
                }

                return {
                    isValid,
                    value: `${Math.round(displayFileSize)} ${unit}`,
                    errorMessage: isValid
                        ? ''
                        : translate('checks.fileSize.error', `File size must be less or equal than ${maxSize} KB`, {
                              maxSize,
                          }),
                };
            }
            throw new Error();
        })
        .catch(() => {
            return {
                isValid: false,
                value: 'n/a',
                errorMessage: translate('checks.fileSize.fetchError', 'Error while fetching file size'),
            };
        });
}
