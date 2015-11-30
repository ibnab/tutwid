define([
    "jquery",
    'Magento_Ui/js/core/app',
    'underscore',
    'Magento_Ui/js/modal/alert'
], function($,mage,_,alert){

    window.WD = Class.create();

    WD.prototype = {
        /**
         * Initialize object
         */
        initialize: function() {
            var self = this;

        },
       validate: function() {
          alert({
           title: $.mage.__('I Go'),
           content: $.mage.__('i GO .'),
           actions: {
            always: function(){}
          }
         });
         return false;
        }
    };
    wd_instance = new WD();
});
