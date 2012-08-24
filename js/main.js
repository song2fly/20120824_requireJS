/*
var MyMath = (function(){
 
    // Put your private variables and functions here
     
    return { // Here are the public methods
        add:function(a, b){
            return a + b;
        }
    };
})();
 
console.log(MyMath.add(1, 2));
*/


/*
require(['MyMath'], function(MyMath){
    
    console.log(MyMath.add(1, 2));  
 
});
*/

/*
require(['Models/User'], function(User){
	
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
     
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
     
    localStorage.users = JSON.stringify(users);
});
*/

//require(['Models/User', 'Controllers/ListController'], function(User, ListController){
require(['Models/User', 'Controllers/AddController'], function(User, AddController){
     
    var users = [new User('Barney'),
                 new User('Cartman'),
                 new User('Sheldon')];
     
    localStorage.users = JSON.stringify(users);
     
    AddController.start(); 
});
