// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {
        //this当前实例
        this.onDestroy.on(cc.Node.EventType.TOUCH_START,function(e){

        }, bind(this),this);
        this.onDestroy.on(cc.Node.EventType.TOUCH_MOVE,function(e){
            var w_pos = e.getLocation;
            this.set
        }, bind(this),this);
        this.onDestroy.on(cc.Node.EventType.TOUCH_END,function(e){

        }, bind(this),this);
        this.onDestroy.on(cc.Node.EventType.TOUCH_CANCEL,function(e){

        }, bind(this),this);
    },

    update(dt) {
        //dt距离上次时间
    },
});
