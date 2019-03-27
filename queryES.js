const elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: ['http://127.0.0.1:9200']
});

var b = {
    size: 200,
    from: 0,
    "query": {
        match: {
            name: 'Jobat'
        }
    }

}
var ans;

function search(body){
    var p=""
   var re= client.search(
        {
            index: 'tutorial',
            body:body,
            type: 'cities_list' })
        .then(results => {
           // console.log(results.hits.hits)
            console.log(`found ${results.hits.total} items in ${results.took}ms`);
            // set the results to the result array we have

           p= results.hits.hits;;
            //console.log("hi"+JSON.stringify(p[0]["_source"]));
            //console.log(p.length)
           ans =p;
        })
        .catch(err => {
            console.log(err)

        });
setTimeout(function () {
    return p[0]
},1000)

}
module.exports={
    search
}