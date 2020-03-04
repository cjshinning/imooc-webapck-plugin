class CopyrightWebpackPlugin {
    apply(compiler){
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
            console.log('compiler');
        })

        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation, cb) => {
            debugger;
            compilation.assets['copyright.txt'] = {
                source: function(){
                    return 'copyright by Jenny Chan'
                },
                size: function(){
                    return 23;
                }
            }
            cb();
        })
    }
}

module.exports = CopyrightWebpackPlugin;