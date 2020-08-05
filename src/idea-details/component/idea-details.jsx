import merge from 'merge';
import React from 'react';
import VoteButton from './vote-button.jsx';

import OpenStadComponentLibs from '../../libs/index.jsx';
import OpenStadComponentReactions from '../../reactions/index.jsx';

'use strict';

export default class IdeasDetails extends React.Component {

  constructor(props) {

    super(props);

		// config
		let defaultConfig = {
      siteId: null,
      ideaId: null,
      user: {},
			api: {
        url: null,
        headers: null,
        isUserLoggedIn: false,
      },
      argument: {
        isActive: true,
      },
      showVoteButtons: true,
      labels: {},
		};
		this.config = merge.recursive(defaultConfig, this.config, this.props.config || {})

    this.state = {
      idea: this.props.idea,
    };
        
  }

	componentDidMount(prevProps, prevState) {

    let self = this;
    
		self.storedListener = function(event) {
      self.onReactionStored(event.detail);
    }
    document.addEventListener('osc-reaction-stored', self.storedListener);

		self.deletedListener = function(event) {
      self.onReactionDeleted(event.detail);
    }
    document.addEventListener('osc-reaction-deleted', self.deletedListener);

    self.fetchData();

	}

  componentWillUnmount() {
		document.removeEventListener('osc-reaction-stored', this.storedListener);
		document.removeEventListener('osc-reaction-deleted', this.deletedListener);
  }

  dispatchEditIdeaClick(e) {
    e.stopPropagation();
    if ( this.config.editIdeaLink ) {
      document.location.href = this.config.editIdeaLink;
    } else {
		  var event = new window.CustomEvent('osc-edit-idea-click', { detail: this.state.idea });
		  document.dispatchEvent(event);
    }
  };
  
  onReactionStored(data) {
    this.state.idea.argCount++;
    this.setState({ idea: this.state.idea });
  }

  onReactionDeleted(data) {
    this.state.idea.argCount--;
    this.setState({ idea: this.state.idea });
  }

  fetchData() {

    let self = this;

    let ideaId = self.config.ideaId || (this.state.idea && this.state.idea.id);

    if (!ideaId) return;

    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea/${ ideaId }?includeVoteCount=1&includeArguments=1&includeUser=1&includeUserVote=1`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);
		
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) throw Error('Error fechting detail');
        return response.json();
      })
      .then( json => {

        let idea = json;
        idea.image = (idea.posterImage && idea.posterImage.key) || (idea.extraData && idea.extraData.images && idea.extraData.images[0]) || "https://stemvanwest.amsterdam.nl/img/placeholders/idea.jpg";
        self.setState({ idea }, function() {
          if(OpenStadComponentLibs.localStorage.get('osc-reactions-login-pending')) {
            window.location.hash = `#reactions`;
            OpenStadComponentLibs.localStorage.set('osc-reactions-login-pending', false)
          }
        });

      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

  deleteIdea() {

    let self = this;

    if (!( self.config.user && self.config.user.role && self.config.user.role == 'admin' )) return;
    if (!( this.state.idea || this.state.idea.id )) return;

    let url = `${ self.config.api.url }/api/site/${  self.config.siteId  }/idea/${ this.state.idea.id }`;
    let headers = OpenStadComponentLibs.api.getHeaders(self.config);

    let ideaId = this.state.idea.id; // backup
		
    fetch(url, {
      method: 'DELETE',
      headers
    })
      .then((response) => {
        if (!response.ok) throw Error('Error deleting idea');
        return response.json();
      })
      .then( json => {
        if ( this.config.afterDeleteIdeaLink ) {
          document.location.href = this.config.afterDeleteIdeaLink;
        } else {
		      var event = new window.CustomEvent('osc-idea-deleted', { detail: { ideaId } });
		      document.dispatchEvent(event);
        }
      })
      .catch((err) => {
        console.log('Niet goed');
        console.log(err);
      });

  }

	render() {

    let self = this;
    let idea = self.state.idea;

    if (!idea) return null;

    let labelHTML = null;
    if (self.config.labels && self.props.label && self.config.labels[ self.props.label ]) {
      // console.log(self.config.labels[ self.props.label ]);
      let color = self.config.labels[ self.props.label ].color || 'white';
      let backgroundColor = self.config.labels[ self.props.label ].backgroundColor || '#164995';
      let text = self.config.labels[ self.props.label ].text;
      labelHTML = (
        <div className="ocs-idea-label" style={{ color, backgroundColor }}>{text}</div>
      );
    }

    let voteButtonsHTML = null;
    if (self.config.showVoteButtons) {
      voteButtonsHTML = (
        <div className="osc-details-vote-buttons-container">
          <h3>Likes</h3>
          <VoteButton config={{ text: 'eens', opinion: 'yes', api: this.config.api, user: this.config.user, siteId: this.config.siteId }} idea={this.state.idea} name="likebutton" value={idea.yes}/>
        </div>
      );
    }

    let editButtonsHTML = null;
    if ( self.config.user && self.config.user.role && self.config.user.role == 'admin' ) {
      editButtonsHTML = (
        <div className="osc-editbuttons-container">
          <button className="osc-idea-details-editbutton osc-edit" onClick={(event) => self.dispatchEditIdeaClick(event)}>Bewerk idee</button>
          <button className="osc-idea-details-editbutton osc-delete" onClick={(event) => { if ( confirm('Weet je het zeker') ) self.deleteIdea(event) }}>Verwijder idee</button>
        </div>
      );

    }

    let modBreakHTML = null;
    if (idea && idea.modBreak) {
      modBreakHTML= (
        <div className="osc-modbreak">
          {idea.modBreakDateHumanized}<br/>
          <br/>
          {idea.modBreak}
        </div>
      );
    }

    let reactionsCountHTML = null;
    if ( self.config.argument.isActive ) {
      reactionsCountHTML = (
        <div>
          <h3>Reacties</h3>
          <a href="#reactions" className="osc-no-of-reactions">{idea.argCount || 0} reacties</a>
        </div>
      );
    }

    let reactionsHTML = null;
    if ( self.config.argument.isActive ) {
      reactionsHTML = (
        <div>
			    <div id="reactions" className="osc-reactions-header"><h3>{self.config.argument.title || 'Reacties'}</h3></div>
          <OpenStadComponentReactions config={{ ...self.config.argument, title: undefined, api: self.config.api, user: self.config.user, siteId: self.config.siteId, ideaId: idea.id }}/>
        </div>
      );
    }

    return (
			<div id={self.id} className={self.props.className || 'osc-info-block-idea-details'} ref={el => (self.instance = el)}>

			  <div className="osc-spacer"></div>

			  <div className="osc-idea-details-container">
			    <div className="osc-idea-details">

				    <h2>{eval(`idea.${self.config.titleField}`)}</h2>

            <div className="osc-details-image-and-stats">

              <div className="osc-image-container">
                <div className="osc-image" style={{ backgroundImage: `url(${idea.image})` }}></div>
              </div>

              {labelHTML}

              <div className="osc-details-sharebuttons">
                <ul>
							    <li><a className="osc-share-facebook" target="_blank" href={ 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.location.href) }>Facebook</a></li>
							    <li><a className="osc-share-twitter" target="_blank" href={ 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.location.href) }>Twitter</a></li>
							    <li><a className="osc-share-email" target="_blank" href={ 'mailto:?subject=' + encodeURIComponent(eval(`idea.${self.config.titleField}`)) + '&body=' + encodeURIComponent(document.location.href)}>Email</a></li>
							    <li><a className="osc-share-whatsapp" target="_blank" href={ 'https://wa.me/?text=' + encodeURIComponent(document.location.href) }>WhatsApp</a></li>
						    </ul>
              </div>

              <div className="osc-details-stats">

                {voteButtonsHTML}

                {reactionsCountHTML}

                {editButtonsHTML}

              </div>

            </div>

            <p className="">
              <span className="ocs-gray-text">Door </span>{idea.user.nickName || idea.user.fullName || idea.user.firstName +' ' + idea.user.lastName}
              <span className="ocs-gray-text"> op </span>{idea.createDateHumanized}
						  <span className="ocs-gray-text">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
						  <span className="ocs-gray-text">Thema: </span>{idea.extraData.theme}
            </p>

            {modBreakHTML}

            <p className="osc-details-summary">{idea.summary}</p>

            <p className="osc-details-description" dangerouslySetInnerHTML={{ __html: idea.description }}></p>

			    </div>
          {reactionsHTML}

			    <div className="osc-bottom-spacer"></div>

        </div>

			</div>
    );

  }

}
