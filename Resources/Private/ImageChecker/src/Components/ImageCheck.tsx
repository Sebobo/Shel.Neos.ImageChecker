import React, { useCallback, useEffect, useState } from 'react';

// @ts-ignore
import backend from '@neos-project/neos-ui-backend-connector';
import { IconButton } from '@neos-project/react-ui-components';

import CheckResultItem from './CheckResultItem';
import { checkFilename, checkFileSize, checkFileDimensions } from '../Checks';

import style from './ImageCheck.module.css';

interface Props {
    value: string | { __identity: string };
    options: ImageCheckOptions;
    translate: TranslateMethod;
}

const ImageCheck: React.FC<Props> = ({ value, options, translate }) => {
    const [image, setImage] = useState<Image>(null);
    const [fileNameCheck, setFileNameCheck] = useState<CheckResult>(null);
    const [fileSizeCheck, setFileSizeCheck] = useState<CheckResult>(null);
    const [fileDimensionsCheck, setFileDimensionsCheck] = useState<CheckResult>(null);
    const [imageCheckVisible, setImageCheckVisible] = useState<boolean>(false);

    const toggleImageCheck = useCallback(() => {
        setImageCheckVisible((prevState) => !prevState);
    }, []);

    const hasWarning =
        fileNameCheck?.isValid === false || fileSizeCheck?.isValid === false || fileDimensionsCheck?.isValid === false;

    // Refetch image data when the image identity changes
    useEffect(() => {
        if (typeof value !== 'string' && value?.__identity) {
            const { loadImageMetadata } = backend.get().endpoints;
            loadImageMetadata(value.__identity).then(setImage);
        }
    }, [value]);

    // Rerun checks if image changes
    useEffect(() => {
        if (image) {
            checkFilename(image.originalImageResourceUri, options.fileName, translate).then(setFileNameCheck);
            checkFileSize(image.originalImageResourceUri, options.fileSize, translate).then(setFileSizeCheck);
            // The dimensions check does not work for SVGs yet as the dimensions are not stored in the image metadata
            if (image.mediaType !== 'image/svg+xml') {
                checkFileDimensions(image.originalDimensions, options.fileDimensions, translate).then(
                    setFileDimensionsCheck
                );
            }
        } else {
            setFileNameCheck(null);
            setFileSizeCheck(null);
            setFileDimensionsCheck(null);
        }
    }, [image]);

    // Show image check if a warning is present
    useEffect(() => {
        if (hasWarning) {
            setImageCheckVisible(true);
        }
    }, [hasWarning]);

    if (!image) return null;

    return (
        <div className={style.imageCheck}>
            <IconButton
                icon={hasWarning ? 'exclamation-triangle' : 'info'}
                size="small"
                style={hasWarning ? 'warn' : imageCheckVisible ? 'brand' : 'lighter'}
                title={
                    hasWarning
                        ? translate('checks.hasWarnings', 'The asset is invalid')
                        : translate('checks.valid', 'The asset is valid')
                }
                onClick={toggleImageCheck}
            />
            {imageCheckVisible && (
                <div className={style.imageCheck__results}>
                    <table>
                        {fileNameCheck && (
                            <CheckResultItem
                                label={translate('checks.filename.label', 'Filename')}
                                checkResult={fileNameCheck}
                            />
                        )}
                        {fileSizeCheck && (
                            <CheckResultItem
                                label={translate('checks.filesize.label', 'Filesize')}
                                checkResult={fileSizeCheck}
                            />
                        )}
                        {fileDimensionsCheck && (
                            <CheckResultItem
                                label={translate('checks.dimensions.label', 'Dimensions')}
                                checkResult={fileDimensionsCheck}
                            />
                        )}
                    </table>
                </div>
            )}
        </div>
    );
};

export default React.memo(ImageCheck);
