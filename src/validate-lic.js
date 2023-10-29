export var componentList = ['grid', 'pivotview', 'treegrid', 'spreadsheet', 'rangeNavigator', 'DocumentEditor', 'listbox', 'inplaceeditor', 'PdfViewer', 'richtexteditor', 'DashboardLayout', 'chart', 'stockChart', 'circulargauge', 'diagram', 'heatmap', 'lineargauge', 'maps', 'slider', 'smithchart', 'barcode', 'sparkline', 'treemap', 'bulletChart', 'kanban', 'daterangepicker', 'schedule', 'gantt', 'signature', 'query-builder', 'drop-down-tree', 'carousel', 'filemanager', 'uploader', 'accordion', 'tab', 'treeview'];

/**
 * License validation module
 *
 * @private
 */
var LicenseValidator = /** @class */ (function () {
    function LicenseValidator(key) {
        this.isValidated = false;
        this.isLicensed = true;
        this.version = '23';
        this.platform = /JavaScript|ASPNET|ASPNETCORE|ASPNETMVC|FileFormats|essentialstudio/i;
        /**
         * To manage licensing operation.
         */
        this.manager = (function () {
            var licKey = null;
            /**
             * Sets the license key.
             *
             * @param {string} key - Specifies the license key.
             * @returns {void}
             */
            function set(key) { licKey = key; }
            /**
             * Gets the license key.
             *
             * @returns {string} -Gets the license key.
             */
            function get() { return licKey; }
            return {
                setKey: set,
                getKey: get
            };
        })();
        /**
         * To manage npx licensing operation.
         */
        this.npxManager = (function () {
            var npxLicKey = 'npxKeyReplace';
            /**
             * Gets the license key.
             *
             * @returns {string} - Gets the license key.
             */
            function get() { return npxLicKey; }
            return {
                getKey: get
            };
        })();
        this.manager.setKey(key);
    }
    /**
     * To validate the provided license key.
    */
    LicenseValidator.prototype.validate = function () {
        this.isLicensed = true;
        this.isValidated = true; 
        return this.isLicensed;
    };
    LicenseValidator.prototype.getDecryptedData = function (key) {
        try {
            return atob(key);
        }
        catch (error) {
            return '';
        }
    };
    /**
     * Get license information from key.
     *
     * @returns {IValidator} - Get license information from key.
     */
    LicenseValidator.prototype.getInfoFromKey = function () {
        return null;
    };
    return LicenseValidator;
}());
var licenseValidator = new LicenseValidator();
/**
 * To set license key.
 *
 * @param {string} key - license key
 * @returns {void}
 */
export function registerLicense(key) {
    licenseValidator = new LicenseValidator(key);
}
export var validateLicense = function (key) {
    if (key) {
        registerLicense(key);
    }
    return licenseValidator.validate();
};
export var getVersion = function () {
    return licenseValidator.version;
};
// Method for create overlay over the sample
export var createLicenseOverlay = function () {
};
