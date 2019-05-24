const mongoose = require('mongoose');
const {Schema} = mongoose;

const settingsSchema = new Schema({
    shop: { type: String, unique : true, required : true, dropDups: true},
    introTitle: { type: String },
    introParagraph: { type: String },
    resultsTitle: { type: String },
    resultsParagraph: { type: String },
    shareParagraph: { type: String },
    resultsTextAfter: { type: String },
    resultOptions:[{ type: Schema.Types.ObjectId, ref: 'ResultOption' }],
    questions:[{ type: Schema.Types.ObjectId, ref: 'Question' }],
    resultEmail: { type: String },
    thankYouTitle: { type: String },
    thankYouText: { type: String },
    title: { type: String },
    intro: { type: String },

});

// Collected Emails
const emailsSchema = new Schema({
  shop: { type: String, unique : true, required : true, dropDups: true},
  emails: [{ type: String }]
});

//Result Options
const resultOptionSchema = Schema({
    title: String,
    slug: String,
    paragraph: String,
    product: {
      id: String,
      title: String,
      handle: String,
      descriptionHtml: String,
      images:[{
          edges: [{
            node: {
              originalSrc: String,
              altText: String
            }
          }]
        }]
    }
  });

// Questions
const questionSchema = Schema({ 
    question: String,
    text: String,
    answers: [{
        text: String,
        positive: [{ type: Schema.Types.ObjectId, ref: 'ResultOption' }],
        negative: [{ type: Schema.Types.ObjectId, ref: 'ResultOption' }],
    }]
  });

  const Settings = mongoose.model('Settings', settingsSchema);
  const Emails = mongoose.model('Emails', emailsSchema);
  const ResultOption = mongoose.model('ResultOption', resultOptionSchema);
  const Question = mongoose.model('Question', questionSchema);

module.exports = { Settings, Emails, ResultOption, Question }