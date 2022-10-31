import manifest from '@neos-project/neos-ui-extensibility';

import makeCustomImageEditor from './ImageEditor';

manifest('Shel.Neos.ImageChecker:ImageEditor', {}, (globalRegistry, { frontendConfiguration }) => {
    const { enabled, defaults } = frontendConfiguration['Shel.Neos.ImageChecker:ImageChecker'];

    if (!enabled) {
        return;
    }

    const editorsRegistry = globalRegistry.get('inspector').get('editors');
    const standardImageEditorDefinition = editorsRegistry.get('Neos.Neos/Inspector/Editors/ImageEditor');

    editorsRegistry.set('Neos.Neos/Inspector/Editors/ImageEditor', {
        ...standardImageEditorDefinition,
        component: makeCustomImageEditor(standardImageEditorDefinition.component, defaults),
    });
});
