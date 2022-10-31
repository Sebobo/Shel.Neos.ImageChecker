import React from 'react';

import { Icon } from '@neos-project/react-ui-components';

import style from './CheckResultItem.module.css';

interface Props {
    label: string;
    checkResult: CheckResult;
}

const CheckResultItem: React.FC<Props> = ({ label, checkResult }) => {
    return (
        <>
            <tr className={style.imageCheckResult}>
                <td className={style.imageCheckResult__label}>{label}:</td>
                <td className={[style.imageCheckResult__icon, !checkResult.isValid && style.error].join(' ')}>
                    <Icon icon={checkResult.isValid ? 'check-circle' : 'exclamation-triangle'} />
                </td>
                <td className={style.imageCheckResult__value} title={checkResult.value}>
                    {checkResult.value}
                </td>
            </tr>
            {checkResult.errorMessage && (
                <tr>
                    <td colSpan={3}>
                        <p
                            className={style.errorMessage}
                            dangerouslySetInnerHTML={{ __html: checkResult.errorMessage }}
                        ></p>
                    </td>
                </tr>
            )}
        </>
    );
};

export default React.memo(CheckResultItem);
