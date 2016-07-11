![](https://camo.githubusercontent.com/0ac4844780d7e981e44a9ca97887476f50a0b840/687474703a2f2f7777772e64726f707a6f6e656a732e636f6d2f696d616765732f6e65772d6c6f676f2e737667)
# ng-dropzone
AngularJS directive for __[dropzone](https://github.com/enyo/dropzone)__
####[Preview](https://rawgit.com/thatisuday/ng-dropzone/master/test/test.html)



## Getting started

### Install using bower
Run following command in your working directory using shell/cmd
```
bower install ngdropzone
```


### Install manually
##### Step 1
You must have AngularJS library included for this directive to work : [Download from Google CDN](https://developers.google.com/speed/libraries/#angularjs)

##### Step 2
You need to download `dropzone.js` and `dropzone.css` files from dropzone repository : [Get from official release](https://github.com/enyo/dropzone/releases/tag/v4.3.0)

##### Step 3
Download `ng-dropzone.min.js` from this [official release](https://github.com/thatisuday/ng-dropzone/releases)

##### Step 4
Include above files in `<head></head>` section of your html page

----------

## Create .js file and set _Dropzone.autoDiscover_ to _false_
```
//Add below line at the top of your JavaScript code
Dropzone.autoDiscover = false;
//This will prevent Dropzone to instantiate on it's own unless you are using dropzone class for styling
```


## Configure your angular app
Include `thatisuday.dropzone` module inside your angular app.
```
var myNgApp = angular.module('myAppName', ['thatisuday.dropzone']);
```

####⛹Optional
> You can configure dropzone before an app starts running. ng-dropzone comes with built in **dropzoneOps** provider to configure [dropzone options](http://www.dropzonejs.com/#configuration-options) which can be implemented as below. _setOptions_ function will set default options fot all your dropzone instances in that app.

```
myNgApp.config(function(dropzoneOpsProvider){
	dropzoneOpsProvider.setOptions({
		url : '/upload_url',
		maxFilesize : '10',
		...
	});
});
```

####⛹Optional
>You can also add default options in **dropzoneOps** provider `(ng-dropzone.min.js)` inside `defOps` object. This is very helpful in case you have multiple apps.  **_But it is not recommended because if you upgrade this directive in future, your app might not behave the way it should._**


## Create dropzone(s)
You can create dropzone using `ng-dropzone` attribute or `<ng-dropzone></ng-dropzone>` element.
```
<div class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods" ng-dropzone></div>
```
**_OR_**
```
<ng-dropzone class="dropzone" options="dzOptions" callbacks="dzCallbacks" methods="dzMethods"></ng-dropzone>
```
> **options** attribute specifies model that will set [options (click to see)](http://www.dropzonejs.com/#configuration-options) for dropzone and will override any options that may have been provided with **dropzoneOps** provider. For example, `$scope.dropzoneOps = {bla:bleh,...};`

> **callbacks** attribute specifies model that will handle [events (click to see)](http://www.dropzonejs.com/#events) for dropzone. For example, `$scope.dzCallbacks.addedfile = function(file){//do something};`

> **methods** attribute specifies model that will set [methods (click to see)](http://www.dropzonejs.com/#dropzone-methods) for dropzone. For example, `$scope.dzMethods.removeFile(file);` or `<button ng-click="dzMethods.removeAllFiles();">...</button>`

As per above example, **_dzOptions_** is model that set options for dropzone, **_dzCallbacks_** is model that handles events for dropzone while **_dzMethods_** is _gateway_ model that triggers dropzone methods.



## Configure dropzone(s)
**callbacks** are not necessary for your dropzone to work, these are just events that you may need as a callback for certain activities of your dropzone. But **options** must be given inside your controller _unless you are configuring it from **dropzoneOps** provider_. _url_ field in dropzone options is mandatory.

```
myNgApp.controller('main', function($scope){
	//Set options for dropzone
	//Visit http://www.dropzonejs.com/#configuration-options for more options
	$scope.dzOptions = {
		url : '/alt_upload_url',
		paramName : 'photo',
		maxFilesize : '10',
		acceptedFiles : 'image/jpeg, images/jpg, image/png',
		addRemoveLinks : true,
		...
	};
	
	
	//Handle events for dropzone
	//Visit http://www.dropzonejs.com/#events for more events
	$scope.dzCallbacks = {
		'addedfile' : function(file){
			console.log(file);
			$scope.newFile = file;
		},
		'success' : function(file, xhr){
			console.log(file, xhr);
		},
		...
	};
	
	
	//Apply methods for dropzone
	//Visit http://www.dropzonejs.com/#dropzone-methods for more methods
	$scope.dzMethods = {};
	$scope.removeNewFile = function(){
		$scope.dzMethods.removeFile($scope.newFile); //We got $scope.newFile from 'addedfile' event callback
	}
});
```

By default, dropzone starts file upload when file is dropped or added to the list. But this can be prevented using `autoProcessQueue:false` in options. Then you have to manually start file upload using **_dzMethods_** model. You just have to call function `dzMethods.processQueue();` to start upload.

> For better understanding, **__⚑__**  checkout source code in /test/test.html file or visit second example in  [preview](https://rawgit.com/thatisuday/ng-dropzone/master/test/test.html) of this directive.

> I have added two more extra methods `getDropzone` and `getAllFiles` which returns **dropzone instance** and **dropzone files** respectively. These methods do not accept any _arguments_ and only work with _ng-dropzone_.



# ⛹Optional :Beautify Dropzone
Add `ng-dropzone.min.css` file below `dropzone.css` file for professional looking dropzone.



# Complaints & Contribute
Feel free to create as many issues as you want. Take a fork and create pull request for bug fixes and enhancements.
