const SPR = (function(){
    const myPostFetch = async function(url, params){
        return await fetch(url, {
            method: "POST",
            body: JSON.stringify(params),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
    }; 
    const myPatchFetch = async function(url, params){
        return await fetch(url, {
            method: "PATCH",
            body: JSON.stringify(params),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
    }; 
    const myGetFetch = async function(url, params){
        let url_and_params = new URL(url);
        url_and_params.search = new URLSearchParams(params);
        return await fetch(url_and_params, {
            method: "GET",
        })
    };
    const myDeleteFetch = async function(url){
        return await fetch(url, {
            method: "DELETE",
        })
    };
    const validateArgsSize = function (args){
        if(args.length > 2){
            throw new Error("Expected 2 arguments given "+args.length)
        }
    };
    const findCallback = function(args){
        let cb = ()=>{};
        args.forEach(element => {
            if(typeof element == "function"){
                cb = element;
            }
        });
        return cb;
    };
    const findParams = function(args){
        let obj = {};
        args.forEach(element => {
            if(typeof element == "object"){
                obj = element;
            }
        });
        return obj;
    };
    return {
        async get(url, ...args){
            validateArgsSize(args);
            let params = findParams(args);
            let callback = findCallback(args);
            let fetch = myGetFetch(url, params);
            let resp = await fetch.then((response)=>response)
            let data = await resp.json()
            callback(data, resp.status)
        },
        async post(url, ...args){
            validateArgsSize(args);
            let params = findParams(args);
            let callback = findCallback(args);
            let fetch = myPostFetch(url, params);
            let resp = await fetch.then((response)=>response)
            let data = await resp.json()
            callback(data, resp.status)
        },
        async patch(url, ...args){
            validateArgsSize(args);
            let params = findParams(args);
            let callback = findCallback(args);
            let fetch = myPatchFetch(url, params);
            let resp = await fetch.then((response)=>response)
            let data = await resp.json()
            callback(data, resp.status)
        },
        async delete(url, ...args){
            validateArgsSize(args);
            let params = findParams(args);
            let callback = findCallback(args);
            let fetch = myDeleteFetch(url);
            let resp = await fetch.then((response)=>response)
            let data = await resp.json()
            callback(data, resp.status)
        },
    };
})();