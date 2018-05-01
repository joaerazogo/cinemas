import DS from 'ember-data';
import ValidatorMixin from 'ember-cli-data-validation/mixins/validator';

export default DS.Model.extend({
  name: DS.attr('string', {
        validation: {
            required: true
        }
    }),
  lastName: DS.attr('string', {
        validation: {
            required: true
        }
    }),
  address: DS.attr('string', {
        validation: {
            required: true
        }
    }),
  telephone: DS.attr('string', {
        validation: {
            required: true
        }
    }),
  email: DS.attr('string', {
        validation: {
            required: true,
            email:true,
        }
    }),
  password: DS.attr('string', {
        validation: {
            required: true
        }
    }),
});
