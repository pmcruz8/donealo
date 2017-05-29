import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from '../../../imports/ui/AccountsUIWrapper'

export default class Upload extends Component {
    componentDidMount() {
        Slingshot.fileRestrictions('avatar', {
            allowedFileTypes: ["image/png", "image/jpeg", "image/jpg"],
            maxSize: 5 * 500 * 500
        });
    }
    upload() {
        let userId = Meteor.user()._id;
        let metaContext = { avatarId: userId };
        let uploader = new Slingshot.Upload("UsersAvatar", metaContext);
        uploader.send(document.getElementById('input').files[0], function (error, downloadUrl) {
            if (error) {
                alert (error);
            } else {
                //Meteor.users.update(Meteor.userId(), {$set: {"profile.avatar": downloadUrl}});
                Meteor.call('saveAvatar', downloadUrl); 
            }
        });
    }
    onSubmit() {
        let avatarUrl = downloadUrl;
        Meteor.users.update(Meteor.userId(), {
            $set: {profile: avatarUrl}
        });
    }
    render() {
        return (
            <div className="container">
              <AccountsUIWrapper />
                <form>
                    <input type="file" id="input" onChange={this.upload.bind(this)} />
                    <button type="submit" onClick={this.onSubmit.bind(this)}>Upload</button>
                </form>
            </div>
        )
    }
}
