export default interface I18nRegistry {
    translate: (id?: string, fallback?: string, params?: {}, packageKey?: string, sourceName?: string) => string;
}
