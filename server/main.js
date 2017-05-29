import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base'; 
import { Organizations } from '../collections/organizations';
import { Link } from 'react-router-dom';

Meteor.startup(() => {

 Organizations.insert({
     name: 'Centro Ines',
     category: 'Educación',
     avatar:"https://scontent.fsig3-1.fna.fbcdn.net/v/t1.0-9/13015624_503262786531679_848047690728558062_n.jpg?oh=9dd667672011fe7af5cadca3ee1ee194&oe=59B3C587",
     about: "Nuestra Misión: Ofrecer servicios educativos, sociales, recreativos y culturales a niños, envejecientes y otros grupos comunitarios con necesidades especiales, con el fin de mejorar su calidad de vida.",
     email:"centroines@centroines.org",
     phone:"787-706-0465",
     postalAddress:"PO Box 360342 San Juan, PR 00936-0342",
     physicalAddress:"Ave. Lomas Verdes (PR-177) Int. Ave. San Ignacio (PR-841) Río Piedras, Puerto Rico 00921",
     athMovil:"",
     Q1:"Para que usaremos las donaciones monetarias?", 
     A1:"Blah blah blah",
     Q2:"",
     A2:"",
     Q3:"",
     Q4:"",
     img1:"https://scontent.fsig3-1.fna.fbcdn.net/v/t1.0-9/16999049_630940623763894_7634753635447486637_n.jpg?oh=f5b42e2bebe0a9e44fdd167131a931db&oe=59B4CBB2",
     img2:"https://scontent.fsig3-1.fna.fbcdn.net/v/t1.0-9/15401047_595474817310475_5556353401640067790_n.jpg?oh=492ccf06ccb68e5169cece191dc1120e&oe=59A4BD06",
     img3:"https://scontent.fsig3-1.fna.fbcdn.net/v/t1.0-9/15380547_595088127349144_2558107691741905063_n.jpg?oh=ee5576ab6f05008ad8d566ec9aa18b14&oe=59E8EBD3",
     event1:"https://scontent.fsig3-1.fna.fbcdn.net/v/t1.0-9/17992072_703356019836913_4446293137227184477_n.png?oh=1b5eaabd20c14df5c8f7aedf4a36cb03&oe=59A6846B"

   });
  // Organizations Publication
  Meteor.publish('organizations', function() {
    return Organizations.find({});
  });

  // Single Organization Publication
  Meteor.publish('organization', function(organizationID) {
    return Organizations.find({_id: organizationID});
  });

});

Meteor.methods({

  'sendVerificationLink' : function() {
    let userId = Meteor.userId();
    if ( userId ) {
      return Accounts.sendVerificationEmail( userId );
    }
  }
}); 

