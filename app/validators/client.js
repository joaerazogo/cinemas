import BaseValidator from 'ember-cp-validations/validators/base';
import Validator from 'ember-cli-data-validation/validator';

const Client = BaseValidator.extend({
  validate: function(name, value, attribute, model) {
        if(this.get('client' && name)) {
            // this would format the Error message
            return this.format();
        }
    }
});

Client.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default Client;
