(function($) {
    $.fn.validation = function(options) {
        // valori di default
        var config = {
            'output': 'alert',
            'altro': 'altro valore'
        };
    
        if (options) $.extend(config, options);
    
        this.each(function() {
            $this = $(this);
            
            if(config.output == 'alert'){
                alert($this.html())
            }else if(config.output == 'console'){
                console.debug($this.html());
            }
        });
            
        return this;
    
    }
})(jQuery);