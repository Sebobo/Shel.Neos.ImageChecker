import * as React from 'react';
import PropTypes from 'prop-types';

import ImageCheck from './Components/ImageCheck';
import I18nRegistry from './Interfaces/I18nRegistry';
import style from './ImageEditor.module.css';

interface EditorProps {
    value: string | { __identity: string };
    i18nRegistry: I18nRegistry;
    options: Record<string, any>;
}

export default function makeCustomImageEditor(DefaultImageEditor: any, defaults: ImageCheckOptions) {
    return class MyImageEditor extends React.PureComponent<EditorProps> {
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

        constructor(props) {
            super(props);

            this.translate = this.translate.bind(this);
        }

        componentDidMount() {
            this.mergeOptions();
        }

        componentDidUpdate(prevProps: Readonly<EditorProps>) {
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

        translate(id?: string, fallback?: string, params?: Record<string, any>): string {
            return this.props.i18nRegistry.translate(id, fallback, params, 'Shel.Neos.ImageChecker', 'Main');
        }

        render() {
            const { value } = this.props;
            const { options } = this.state;

            return (
                <div className={style.imageEditorContainer}>
                    <DefaultImageEditor {...this.props} />
                    {value && options && <ImageCheck value={value} options={options} translate={this.translate} />}
                </div>
            );
        }
    };
}
