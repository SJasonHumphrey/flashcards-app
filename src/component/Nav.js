import React from 'react'

export default function Nav(props) {
    const setView = props.setView;
    const view = props.view;
    const setActiveCard = props.setActiveCard;
    let viewClass;
    let reviewClass;
    let createClass;

    if (view === 'view-cards') {
        viewClass = 'active';
        reviewClass = '';
        createClass = '';
    } else if (view === 'review-cards') {
        viewClass = '';
        reviewClass = 'active';
        createClass = '';
    } else if (view === 'create-card') {
        viewClass = '';
        reviewClass = '';
        createClass = 'active';
    }

    const handleReviewClick = () => {
        setActiveCard(0);
        setView('review-cards');
    }

    return (
        <nav className="ui centered">
            <div className="navbar-brand mr-0">
                <h4 onClick={() => setView('create-card')} className="font-weight-bold cursor-pointer">Simple <i className="fas fa-bolt icon"></i> Flashcards</h4>
            </div>
            <div className="ml-md-auto">
                <span role="button" onClick={handleReviewClick} className={'ui button review'}>Review</span>
                <span role="button" onClick={() => setView('view-cards')} className={'ui button view'}>View Cards</span>
                <span role="button" onClick={() => setView('create-card')} className={'ui button create'}>Create Card</span>
            </div>
        </nav>
    )
}
