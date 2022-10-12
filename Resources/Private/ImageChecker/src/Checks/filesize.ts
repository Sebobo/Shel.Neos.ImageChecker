const MAX_FILE_SIZE = 2048; // in KB

interface FileSizeCheckOptions {
    default?: number;
    svg?: number;
    jpg?: number;
    png?: number;
}

export function checkFileSize(url: string, options: FileSizeCheckOptions): Promise<CheckResult> {
    return fetch(url, { method: 'HEAD' }).then((response) => {
        if (response.ok) {
            // maxSize is given in KB, so we convert the actual filesize to KB too
            const fileSize = parseInt(response.headers.get('Content-Length')) || 0;
            const fileType = response.headers.get('Content-Type');

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

            // filSize is in bytes, maxSize is in KB
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
                errorMessage: isValid ? '' : `File size must be less or equal than ${maxSize} KB`,
            };
        }

        return {
            isValid: false,
            value: 'n/a',
            errorMessage: 'Error while fetching file size',
        };
    });
}
