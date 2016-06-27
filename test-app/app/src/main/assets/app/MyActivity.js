/* 
	// demonstrates how to extend class in TypeScript with prebuilt Java proxy
	
	declare module android {
		export module app {
			export class Activity {
				onCreate(bundle: android.os.Bundle);			
			}
		}
		export module os {
			export class Bundle {}
		}
	}
	
	@JavaProxy("com.tns.NativeScriptActivity")
	class MyActivity extends android.app.Activity
	{
		onCreate(bundle: android.os.Bundle) 
		{
			super.onCreate(bundle);
		}
	}
*/
__enableVerboseLogging();
var MyActivity = (function (_super) {
    __extends(MyActivity, _super);
    function MyActivity() {
        _super.apply(this, arguments);
    }
    MyActivity.prototype.onCreate = function (bundle) {
        _super.prototype.onCreate.call(this, bundle);

    var B = java.lang.Object.extend({
        coolMethod: function(a) {
            __log("I DO SOME./... nevermind! :D");
        },
        unpack: function(fileIn, out) { // Unpacker
            console.log("It's the unpack thingie!");
        },
        properties: function() {

        },
        toString: function() { // Object

        },
        formatTo: function() {

        },
        update: function() {

        },
        addPropertyChangeListener: function(listener) {

        },
        pack: function() {

        },
        removePropertyChangeListener: function(listener) {

        },
        interfaces: [java.util.jar.Pack200.Unpacker, java.util.Formattable, java.util.Observer, java.util.jar.Pack200.Packer]
        // interfaces: [aa.a.b.c.D.E, java.util.jar.Pack200.Unpacker, java.lang.Cloneable, java.lang.Iterable, java.lang.Comparable]
    });

    var b = new B();

     b.coolMethod();

//        var B = java.lang.Object.extend({
//            toString: function() {
//            return "";
//            }
//        });
//
//        B;

//    	require("./tests/testsWithContext").run(this);
//    	execute(); //run jasmine

    	var layout = new android.widget.LinearLayout(this);
    	layout.setOrientation(1);
    	this.setContentView(layout);
    	
    	var textView = new android.widget.TextView(this);
    	textView.setText("It's a button!");
    	layout.addView(textView);
    	
    	var button = new android.widget.Button(this);
    	button.setText("Hit me");
    	layout.addView(button);
    	var counter = 0;
    	
    	var Color = android.graphics.Color;
    	var colors = [Color.BLUE, Color.RED, Color.MAGENTA, Color.YELLOW, Color.parseColor("#FF7F50")];
    	var taps = 0;

    	var dum = com.tns.tests.DummyClass.null;
    	
    	button.setOnClickListener(new android.view.View.OnClickListener("AppClickListener", {
    		onClick:  function() {
    			button.setBackgroundColor(colors[taps % colors.length]);
    			
    			taps++;
    		}}));
    };
    MyActivity = __decorate([
        JavaProxy("com.tns.NativeScriptActivity")
    ], MyActivity);
    return MyActivity;
})(android.app.Activity);