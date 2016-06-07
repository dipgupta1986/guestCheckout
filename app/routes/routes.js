    module.exports = function(app) {
        var viewFolderName=__dirname+"/../../public/views/";
        if(__dirname.indexOf("\\")!=-1){
            viewFolderName=__dirname+"\\..\\..\\public\\views\\";    
        }
        app.get('/', function(req, res) {            
            res.sendFile('/index.html', { root: viewFolderName });
        });
    };
