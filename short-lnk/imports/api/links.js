import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if(Meteor.isServer) {
    Meteor.publish('links', function () {
        return Links.find({userId: this.userId});
    });
}

Meteor.methods({
    'links.insert'(url) {

        if(!this.userId){ // if user is not logged in
            throw new Meteor.Error('not-authorized');
        }
        //url validation
        new SimpleSchema({
            url: {
                type: String,
                label: 'Your link',
                regEx: SimpleSchema.RegEx.Url
            }
        }).validate({url});

        Links.insert({
            _id: shortid.generate(),
            url,
            userId: this.userId
        });
    }
});