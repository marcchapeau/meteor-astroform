import { ReactiveVar } from 'meteor/reactive-var'
import { ReactiveDict } from 'meteor/reactive-dict'

const af = class Astroform {
  static addForm (id, astro, doc) {
    const form = Astroform.forms[id] || {
      doc: {},
      hooks: {},
      submitted: new ReactiveVar(false),
      errors: new ReactiveDict(),
      fields: new ReactiveDict()
    }
    if (astro) form.astro = astro
    if (doc) form.doc = doc
    Astroform.forms[id] = form
    return Astroform.forms[id]
  }
  static removeForm (id) {
    if (Astroform.forms[id]) {
      delete Astroform.forms[id]
    }
  }
  static addHooks (id, hooks) {
    const form = Astroform.addForm(id)
    form.hooks = { ...form.hooks, ...hooks }
  }
  static addError (id, name, error) {
    Astroform.forms[id].errors.set(name, error)
  }
  static setSubmitting (id, submitted) {
    Astroform.forms[id].submitted.set(submitted)
  }
  static setField (id, fieldName, value) {
    Astroform.forms[id].fields.set(fieldName, value)
  }
}

af.forms = {}

export { af as Astroform }
