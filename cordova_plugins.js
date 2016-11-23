cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "Cordova-Plugin-FCMNotification.CDVPushyMe",
        "file": "plugins/Cordova-Plugin-FCMNotification/www/FCMNotificationPlugin.js",
        "pluginId": "Cordova-Plugin-FCMNotification",
        "clobbers": [
            "navigator.FCMNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "Cordova-Plugin-FCMNotification": "1.0.0-dev"
};
// BOTTOM OF METADATA
});