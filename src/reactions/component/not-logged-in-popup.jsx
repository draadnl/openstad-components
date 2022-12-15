'use strict';

import OpenStadComponent from '../../component/index.jsx';
import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentModalPopup from '../../modal-popup/index.jsx';

export default class OpenStadComponentNotLoggedInPopup extends OpenStadComponent {

  constructor(props) {
    super(props, {
      loginUrl: '',
    });
  }
  
  showPopup() {
		// dispatch an event
    let self = this;
    let loginUrl = OpenStadComponentLibs.auth.getLoginUrl(self.config);
		var event = new window.CustomEvent('osc-show-modal-popup', { detail: {
      divId: self.divId,
      title: 'Log in om verder te gaan',
      text: 'Log in om een reactie te plaatsen.',
      buttonAction: () => { OpenStadComponentLibs.localStorage.set('osc-login-pending-scroll-to-reactions', true); OpenStadComponentLibs.localStorage.set('osc-login-pending-show-details', 34); document.location.href = loginUrl; },
      buttonText: 'Inloggen',
    }});
		document.dispatchEvent(event);
  }
  
  render() {
    return (
      <OpenStadComponentModalPopup id={this.divId} ref={el => (self.modalPopup = el)}/>
    );
  }

}
