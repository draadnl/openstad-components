import merge from 'merge';
import React from 'react';

import OpenStadComponentLibs from '../../libs/index.jsx';

import OpenStadComponentForms from '../../forms/index.jsx';

// import OpenStadComponentImageUpload from './openstad-component-formelements/image-upload.jsx';
// import OpenStadComponentFormelementsInputWithCounter from './openstad-component-formelements/input-with-counter.jsx';

'use strict';

export default class IdeasForm extends React.Component {

  constructor(props) {

    super(props);

		let self = this;

		self.defaultConfig = {
      user: {},
			ideaId: null,
      titleMinLength: 10,
      titleMaxLength: 20,
      summaryMinLength: 20,
      summaryMaxLength: 140,
      descriptionMinLength: 140,
      descriptionMaxLength: 5000,
      fields: [],
      enableAddressSearchClickEvent: true,
    };
		self.config = merge.recursive(self.defaultConfig, self.config, props.config || {})
    self.config.fields = [ ...self.config.fields ];

    let fields = self.config.fields || [];

    if (!self.props.idea.extraData) self.props.idea.extraData = {};

    let state = {
      formfields: {
        id: self.props.idea.id || '',
        user: self.props.idea.user || {},
      },
      showFormErrorsWarning: false,
      isBusy: false,
    };

    fields.forEach((field) => {
      if (field.name) {
        state.formfields[field.name] = eval('self.props.idea.' + field.name);
        field.value = eval('self.props.idea.' + field.name);
      }
    });

    let titleField = fields.find(field => field.name == 'title');
    if (titleField) {
		  titleField.minLength = self.config.titleMinLength;
		  titleField.maxLength = self.config.titleMaxLength;
    }

    let summaryField = fields.find(field => field.name == 'summary');
    if (summaryField) {
		  summaryField.minLength = self.config.summaryMinLength;
		  summaryField.maxLength = self.config.summaryMaxLength;
    }

    let descriptionField = fields.find(field => field.name == 'description');
    if (descriptionField) {
		  descriptionField.minLength = self.config.descriptionMinLength;
		  descriptionField.maxLength = self.config.descriptionMaxLength;
    }

    let imageField = fields.find(field => field.inputType == 'image-upload'); // TODO: multiple images?
    if (imageField) {
		  imageField.imageserver = self.config.imageserver;
    }

    if (OpenStadComponentLibs.user.hasRole( self.config.user, 'editor' ) ) {

      // typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        let choices = [];
        self.config.types.forEach(type => {
          let typeDef = type;
          if (!typeDef.auth || ( typeDef.auth.createableBy && OpenStadComponentLibs.user.hasRole( self.config.user, typeDef.auth.createableBy ) )) {
            choices.push({ title: typeDef.name, value: typeDef.id || typeDef.value})
          }
        });
        self.config.fields.push({
				  name: "typeId",
				  title: "Type inzending",
				  value: self.props.idea.typeId,
          inputType: "multiple-choice",
          choices
			  })
        state.formfields.typeId = self.props.idea.typeId;
      }

      // moderator
      self.config.fields.push({
				name: "modBreak",
				title: "Moderator reactie",
				value: self.props.idea.modBreak,
				inputType: "textarea-with-counter",
				minLength: 0,
				maxLength: 2000,
			})
      state.formfields.modBreak = self.props.idea.modBreak;

    } else {

      // hidden: typeId
      if (self.config.types && self.config.typeField == 'typeId') {
        self.config.fields.push({
				  name: "typeId",
				  value: self.props.idea.typeId,
				  inputType: "hidden",
			  })
        state.formfields.typeId = self.props.idea.typeId;
      }

    }

    self.state = state;

  }

	componentDidMount(prevProps, prevState) {
  }

  // todo: als hanlefieldchange met meerder waarden in een { key: value } formaat gaat werken dan kan deze weg
  handleLocationChange({location, address}) {
    let state = { ...this.state };
    state.formfields['location'] = { coordinates: [ location.lat, location.lng ] };
    state.formfields['address'] = address;
    this.setState(state)
    this.dispatchUpdateEditIdea(state.formfields)
  }

  dispatchUpdateEditIdea(idea) {
		var event = new window.CustomEvent('updateEditIdea', { detail: { idea } });
		document.dispatchEvent(event);
  }

  validateIdea() {

    var self = this;
    
	  var isValid = true;

	  // location
	  if (self.state.formfields['location']) {
			self['form-warning-location'].style.display = 'none';
		} else {
      console.log('xxx');
			self['form-warning-location'].style.display = 'block';
			isValid = false;
		}

	  // // images
	  // if (!self.imageField.validate()) {
		//   self['form-warning-image'].style.display = 'block';
		//   isValid = false;
	  // } else {
		//   self['form-warning-image'].style.display = 'none';
    // }

	  return isValid;

  }

  submitIdea() {

    let self = this;

    self.setState({ isBusy: true }, () => {

      let formValues = self.form.getValues();

      let isValid = self.form.validate({ showErrors: true });

	    if ( !self.validateIdea() || !isValid ) { // validateIdea doet nog locatie en images
        self.setState({ isBusy: false, showFormErrorsWarning: true });
        return;
      }

      self.setState({ showFormErrorsWarning: false });

	    if (!self.config.api.isUserLoggedIn) return alert('Je bent niet ingelogd');

	    var url = self.config.api.url + '/api/site/' + self.config.siteId + '/idea';
      let headers = OpenStadComponentLibs.api.getHeaders(self.config);


      let body = {
        location: JSON.stringify({ "type": "Point", ...self.state.formfields['location'] }),
      };
      Object.keys(formValues).forEach(key => {
        let match = key.match(/^extraData\.(.+)/)
        if (match) {
          if (!body.extraData) body.extraData = {};
          body.extraData[match[1]] = formValues[key];
        } else {
          body[key] = formValues[key];
        }
      });

      // if ( self.config.user && self.config.user.role == 'admin' ) {
      //   body.modBreak = self.state.formfields['modBreak'];
      // }

      let method = 'POST';
      if (typeof this.state.formfields.id == 'number') {
        method = 'PUT';
        url = url + '/' + this.state.formfields.id;
      }

      fetch(url, {
        method,
        headers,
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      })
        .then((response) => {
          if (!response.ok) {
            throw response;
          }
          return response.json();
        })
        .then( json => {
          self.setState({ isBusy: false }, () => {
		        var event = new window.CustomEvent('newIdeaStored', { detail: { idea: json } });
		        document.dispatchEvent(event);
          })
        })
        .catch((err) => {
          console.log('Niet goed');
          console.log(err);
          if ( typeof err.json == 'function' ) {
            err.json().then(json => self.setState({ isBusy: false, showFormErrorsWarning: json.message }) );
          } else {
            self.setState({ isBusy: false, showFormErrorsWarning: err.message || err })
          }
        });
    })
    
  }
  
	render() {

    let self = this;

    let formErrorsWarningHTML = null;
    if (self.state.showFormErrorsWarning) {
      let text = 'Niet alle velden zijn correct ingevuld. Scroll naar boven om te zien wat er mis gaat.';
      if (typeof self.state.showFormErrorsWarning == 'string') {
        text = self.state.showFormErrorsWarning;
      }
      formErrorsWarningHTML = (
        <div className="osc-form-errors-warning">{ text }</div>
      );
    }

    let formHTML = null;
    formHTML = (
      <OpenStadComponentForms.Form config={ self.config } values={{ typeId: self.state.formfields.typeId /* typeId is hidden */ }} ref={(el) => { self.form = el;}}/>
    )

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-form'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

        <form className="osc-form">

				  <h1>Nieuw punt toevoegen</h1>

          <div className="osc-form-group">
					  <h2>
              Naam
					  </h2>
            {self.state.formfields.user && self.state.formfields.user.fullName}
          </div>

          {self.config.enableAddressSearchClickEvent &&
            <div className="osc-form-group">
              <h2>
                Een locatie vlakbij
              </h2>
              {self.state.formfields.address || 'Geen adres gevonden'}
              <div className="osc-form-warning" style={{display: 'none'}}
                   ref={el => this['form-warning-location'] = el}>Geen locatie geselecteerd
              </div>
            </div>
          }

          {formHTML}

          <br/>
          {formErrorsWarningHTML}
          <br/>
          <a className={`osc-button osc-button-blue${ self.state.isBusy ? ' osc-disabled' : '' }`} onClick={() => { if (!self.state.isBusy) self.submitIdea() } } ref={el => (self.submitButton = el)}>Versturen</a>
          <br/>
          <br/>
          <br/>

        </form>

			</div>
    );

  }

}
