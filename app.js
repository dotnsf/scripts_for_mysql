//. app.js
var express = require( 'express' ),
    { exec } = require( 'child_process' ),
    app = express();
var ping_command = 'openssl rand -hex 8';
var create_command = './create_db.sh';
var drop_command = './drop_db.sh';

app.use( express.Router() );

//app.get( '/ping', function( req, res ){
app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  
  exec( ping_command, function( err, result, stderr ){
    if( err ){
      res.status( 400 );
      res.write( err.message );
      res.end();
    }else if( stderr ){
      res.status( 400 );
      res.write( stderr );
      res.end();
    }else{
      res.write( result );
      res.end();
    }
  });
});

app.post( '/create', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  
  exec( create_command, function( err, result, stderr ){
    if( err ){
      res.status( 400 );
      res.write( err.message );
      res.end();
    }else if( stderr ){
      res.status( 400 );
      res.write( stderr );
      res.end();
    }else{
      res.write( result );
      res.end();
    }
  });
});

app.post( '/drop', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  
  if( req.query.db ){
    exec( drop_command, function( err, result, stderr ){
      if( err ){
        res.status( 400 );
        res.write( err.message );
        res.end();
      }else if( stderr ){
        res.status( 400 );
        res.write( stderr );
        res.end();
      }else{
        res.write( result );
        res.end();
      }
    });
  }else{
    res.status( 400 );
    res.write( 'no db specified.' );
    res.end();
  }
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starging on " + port + " ..." );



