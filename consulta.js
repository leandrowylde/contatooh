var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/freshdesk');

var db = mongoose.connection;

var TicketSchema = mongoose.Schema({

});

var Ticket = mongoose.model('Ticket', TicketSchema);

Ticket.find()
.where({ descricao: { $in: [/009fd/]}})
.where("hora_criacao", { $gt: '2016-04-10', $lt: '2016-04-19'})
.select('id')
.exec(function(err, tickets){
	console.log(tickets);
});