module.exports = function(app, db){

  db.serialize(function() {

    //TODO make this once when no database exists !
    db.run('CREATE TABLE players (deviceId TEXT)');
    var stmt = db.prepare('INSERT INTO players VALUES (?)');

    for (var i = 0; i < 10; i++) {
      stmt.run('player ' + i);
    }

    stmt.finalize();

    db.each('SELECT rowid AS id, deviceId FROM players', function(err, row) {
      console.log(row.id + ': ' + row.deviceId);
    });
  });

  db.close();

};
