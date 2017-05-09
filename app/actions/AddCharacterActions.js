import Alt from '../alt';

class AddCharacterActions {
    constructor() {
        this.generateActions (
            'addCharacterSuccess',
            'addCharacterFail',
            'updateName',
            'updateGender',
            'invalidName',
            'invalidGender'
        );
    }

    addCharacter(name, gender) {
        $.ajax({
            type: 'post',
            url: '/api/characters',
            data: {name: name, gender: gender}
        })
        .done((data) => {
            this.actions.addCharacterSuccess(data.message);
        })
        .fail((jqXhr) => {
            this.actions.addCharacterFail(jqXhr);
        })
    }
}

export default Alt.createActions(AddCharacterActions);
