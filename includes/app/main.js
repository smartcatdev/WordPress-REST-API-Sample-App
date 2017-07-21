jQuery(document).ready(function ($) {


    var app = {
        
        restUrl : 'https://wordcampdemo.wpengine.com/wp-json/',
        
        init : function() {
            
            this.getSiteData()
            this.loadPosts()
            this.loadCategories()
            
        },
        
        getSiteData : function() {
            
            $.get( this.restUrl )
                .done( function( response ) {
                    $( '.site-title' ).html( response.name )
                    $( '.description' ).html( response.description )
                })
                .fail( function() {
                    alert( 'failed to call specified URL' )
                })

        },
        
        loadPosts : function() {
            
            var url = this.restUrl + 'wp/v2/posts?_embed'
            
            $.get( url )
                .done( function( response ) {
                    
                    var template = $( '#blog-post-template' ).html()
                    var output = $( '#blog-roll' )
                    
                    for( var key in response ) {
                        var result = Mustache.to_html( template, response[ key ] )
                        output.append( result )
                    }
                    
                })
                .fail( function() {
                    alert( 'cannot load posts' )
                })
            
        },
        
        loadCategories : function() {
            
            var url = this.restUrl + 'wp/v2/categories'
            
            $.get( url )
                .done( function( response ) {
                    
                    var template = $( '#blog-categories-template' ).html()
                    var output = $( '#categories' )
                    
                    for( var key in response ) {
                        var result = Mustache.to_html( template, response[ key ] )
                        output.append( result )
                    }
                    
                })
                .fail( function() {
                    alert( 'cannot load categories' )
                })
            
        },
   
        
    }

    app.init();

});
