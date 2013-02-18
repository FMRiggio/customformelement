/*
*
*   CustomSelect - Plugin created By Filippo Matteo Riggio
*
*   Creative Commons License
*
*   Copyright --> http://www.good2know.it
*
*/
(function($) {

var status = 1 ;
	$.fn.customSelect = function() {
		
		$('.option').click(function() {
            $this = $(this);
			document.getElementById('select_hidden').value = this.rel;
			
           	show_list();
			$('.select').empty().append($this.html());
			
			controllo_option(this.rel);
        });
		
		function show_list(){
			if(status==1){
				$('.option_select').slideDown();
				status=2
			}else{
				$('.option_select').slideUp();
				status=1;
			}
			
		}
		
		function controllo_option(selected){
			
			$('.option').each(function(index){
									   
				 $this = $(this);

				 if(this.rel==selected){
					 this.className = 'option selected';
				 }else{
					 this.className = 'option';
				 }

			});

		}
		
		// Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
		return this.click(show_list);
	};
})(jQuery); // Call and execute the function immediately passing the jQuery object