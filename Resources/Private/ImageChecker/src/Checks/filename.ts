export function checkFilename(
    pathAndFilename: string,
    options: { allowedPattern: string },
    translate: TranslateMethod
): Promise<CheckResult> {
    const filename = pathAndFilename.split('/').pop();
    // TODO: Do we also need to check the extension?
    // const extension = filename.split('.').pop();

    const re = new RegExp(options.allowedPattern);
    const isValid = re.test(filename);

    return Promise.resolve({
        isValid: isValid,
        errorMessage: isValid
            ? ''
            : translate('checks.fileName.error', `The filename has to match the pattern "${options.allowedPattern}"`, {
                  allowedPattern: options.allowedPattern,
              }),
        value: filename,
    });
}
