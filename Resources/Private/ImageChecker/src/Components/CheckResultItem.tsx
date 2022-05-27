import React from 'react';

import { Icon } from '@neos-project/react-ui-components';

import CheckResult from '../Interfaces/CheckResult';

import './CheckResultItem.vanilla-css';

interface Props {
    label: string;
    checkResult: CheckResult;
}

const CheckResultItem: React.FC<Props> = ({ label, checkResult }) => {
    return (
        <>
            <tr className="image-check-result">
                <td className="image-check-result__label">{label}:</td>
                <td className={['image-check-result__icon', !checkResult.isValid && 'error'].join(' ')}>
                    <Icon icon={checkResult.isValid ? 'check-circle' : 'exclamation-triangle'} />
                </td>
                <td className="image-check-result__value" title={checkResult.value}>
                    {checkResult.value}
                </td>
            </tr>
            {checkResult.errorMessage && (
                <tr>
                    <td colSpan={3}>
                        <p className="image-check-result__error-message">{checkResult.errorMessage}</p>
                    </td>
                </tr>
            )}
        </>
    );
};

export default React.memo(CheckResultItem);
