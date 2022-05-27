import CheckResult from '../Interfaces/CheckResult';

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
            const fileSize = (parseInt(response.headers.get('Content-Length')) || 0) / 1024;
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

            const isValid = fileSize <= maxSize;

            return {
                isValid,
                value: Math.round(fileSize) + ' KB',
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
