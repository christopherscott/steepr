((function(){var a={}.hasOwnProperty,b=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);return e.prototype=c.prototype,b.prototype=new e,b.__super__=c.prototype,b};define(["jquery","use!backbone","TeaView"],function(a,c,d){var e;return e=function(c){function e(){return e.__super__.constructor.apply(this,arguments)}return b(e,c),e.name="TeaListView",e.prototype.el=a("#tea-list"),e.prototype.initialize=function(){return this.collection.bind("add",this.addTeaView,this)},e.prototype.addTeaView=function(b){var c,e;return e=new d({model:b}),c=e.render().el,a(c).data("model",b),this.$("ul").append(c)},e.prototype.activateSwipe=function(){var b;return b=this.collection,window.swipe=new Swipe(this.el,{callback:function(c,d,e){return b.activate(a(e).data("model").get("name"))}})},e}(c.View)})})).call(this)