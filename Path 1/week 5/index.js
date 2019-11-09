module.exports = {
subs: {},
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        // console.log(this.subs);
        if(subscriber == undefined) {
            return this;
            // console.log(this);
        }else {
            if(!this.subs.hasOwnProperty(event)) {
                this.subs[event] = [];
            }
            // console.log(this.subs);
            this.subs[event].push({
                subscriber: subscriber,
                handler: handler.bind(subscriber)
            });
            // console.log(this.subs[event][2]);
            return this;
        }
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if(this.subs[event] == undefined) {
            return this;
        }else if(this.subs.hasOwnProperty(event) && subscriber === undefined) {
            this.subs[event].splice(0,this.subs[event].length);
        }else if(this.subs.hasOwnProperty(event)) {
            for( i = this.subs[event].length -1; i >= 0; i--) {
                if(this.subs[event][i].subscriber === subscriber) {
                    this.subs[event].splice(i,1);
                }
            }
            return  this;
        }
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if(this.subs[event] != undefined && this.subs[event].length > 0) {
            for(i = 0; i < this.subs[event].length; i++) {
                this.subs[event][i].handler();
            }
        }
        return this;
    }
};
