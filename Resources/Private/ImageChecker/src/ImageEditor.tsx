import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
import { neos } from '@neos-project/neos-ui-decorators';
// @ts-ignore
import I18n from '@neos-project/neos-ui-i18n';

import ImageCheck from './Components/ImageCheck';
import I18nRegistry from './Interfaces/I18nRegistry';
import './ImageEditor.vanilla-css';
import { ImageCheckOptions } from './Interfaces/ImageCheckOptions';

interface EditorProps {
    value: string | { __identity: string };
    i18nRegistry: I18nRegistry;
    options: Record<string, any>;
}

export default function makeCustomImageEditor(DefaultImageEditor: any, defaults: ImageCheckOptions) {
    return class MyImageEditor extends PureComponent<EditorProps> {
        static propTypes = {
            value: PropTypes.oneOfType([PropTypes.shape({ __identifier: PropTypes.string }), PropTypes.string]),
            commit: PropTypes.func.isRequired,
            validationErrors: PropTypes.array,
            options: PropTypes.object,

            i18nRegistry: PropTypes.object.isRequired,
        };

        state = {
            options: {} as ImageCheckOptions,
        };

        componentDidMount() {
            this.mergeOptions();
        }

        componentDidUpdate(prevProps: Readonly<EditorProps>, prevState: Readonly<{}>, snapshot?: any) {
            if (this.props.value !== prevProps.value) {
                this.mergeOptions();
            }
        }

        mergeOptions() {
            const {
                options: {
                    features: { imageCheck },
                },
            } = this.props;

            this.setState({
                options: imageCheck
                    ? {
                          fileSize: {
                              ...defaults.fileSize,
                              ...imageCheck.fileSize,
                          },
                          fileDimensions: {
                              ...defaults.fileDimensions,
                              ...imageCheck.fileDimensions,
                          },
                          fileName: {
                              ...defaults.fileName,
                              ...imageCheck.fileName,
                          },
                      }
                    : defaults,
            });
        }

        render() {
            const { value } = this.props;
            const { options } = this.state;

            return (
                <div className="image-editor-container">
                    <DefaultImageEditor {...this.props} />
                    {value && options && <ImageCheck value={value} options={options} />}
                </div>
            );
        }
    };
}
